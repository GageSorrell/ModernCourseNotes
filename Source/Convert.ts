/* File:      Convert.ts
 * Author:    Gage Sorrell <gage@sorrell.sh>
 * Copyright: (c) 2023 Gage Sorrell
 * License:   MIT
 * 
 * This file is heavily derivative of `convert.js` of
 * https://github.com/KrauseFx/markdown-to-html-github-style/blob/master/convert.js
 */

import * as Showdown from "showdown";
import { Dirent, promises as Fs } from "fs";
import hljs from "highlight.js";
import path from "path";

Showdown.extension("highlight", () =>
{
    const HtmlDecode = (Text: string): string =>
    {
        return Text
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">");
    }

    return [
        {
        filter: (text, _converter, _options) =>
        {
            const left = "<pre><code\\b[^>]*>";
            const right = "</code></pre>";
            const flags = "g";
            const replacement = (
                _wholeMatch: string,
                match: string,
                InLeft: string,
                _InRight: string) =>
            {
                match = HtmlDecode(match);

                const lang = (left.match(/class="([^ "]+)/) || [])[1];
                InLeft = left.slice(0, 18) + "hljs " + left.slice(18);

                if (lang && hljs.getLanguage(lang)) 
                {
                    return InLeft + hljs.highlight(match, {language: lang}).value + right;
                }
                else 
                {
                    return InLeft + hljs.highlightAuto(match).value + right;
                }
            };

            return Showdown.helper.replaceRecursiveRegExp(
                text,
                replacement,
                left,
                right,
                flags
            );
        },
        type: "output"
    }];
});

const ReadFileAsString = async (Path: string): Promise<string> =>
{
    return (await Fs.readFile(Path)).toString();
};

type FInput =
{
    Input: string;
    Output: string;
};

const EMPTY_PATH = "EMPTY_PATH";

type FValidationCondition =
{
    Arguments: Array<unknown>;
    ErrorMessage: string;
    Result: boolean;
};

const ValidateConditions = async (
    Functions: Readonly<Array<(...Arguments: Array<unknown>) => Promise<FValidationCondition>>>
): Promise<boolean> =>
{
    let Continues: boolean = true;
    let ExhaustedAllFunctions: boolean = false;
    let PreviousArguments: Array<unknown> = [ ];
    let ErrorMessage: string = "";
    for await (const Function of Functions)
    {
        if (Continues)
        {
            const FunctionRetVal: FValidationCondition = await Function(PreviousArguments);
            PreviousArguments = FunctionRetVal.Arguments;
            ExhaustedAllFunctions = Functions.indexOf(Function) === Functions.length - 1;
            Continues = FunctionRetVal.Result;
            ErrorMessage = FunctionRetVal.ErrorMessage;
        }
        else
        {
            console.error(ErrorMessage);
            process.exit(1);
        }
    }

    return Promise.resolve(Continues && ExhaustedAllFunctions);
};

const InputValidityConditions:
    Readonly<Array<(...Arguments: Array<unknown>) => Promise<FValidationCondition>>> =
[
    /** Are the paths provided by the CLI? */
    async (..._Arguments: Array<unknown>): Promise<FValidationCondition> =>
    {
        const Input: string = process.argv?.[2];
        const Output: string = process.argv?.[3];
        return {
            Arguments: [ Input, Output ],
            ErrorMessage: "Path(s) were not provided by CLI.",
            Result: Input !== undefined && Output !== undefined
        };
    },
    /** Is the path an existing directory? */
    async (...Arguments: Array<unknown>): Promise<FValidationCondition> =>
    {
        console.log(Arguments);
        const Input: string = (Arguments[0] as Array<string>)[0] as string;
        const Output: string = (Arguments[0] as Array<string>)[1] as string;

        return {
            Arguments: [ Input ],
            ErrorMessage: "A path is not an existing directory.",
            Result: (await Fs.lstat(Input)).isDirectory() && (await Fs.lstat(Output)).isDirectory()
        };
    },
    /** Does the directory have at least one markdown file in it? */
    async (...Arguments: Array<unknown>): Promise<FValidationCondition> =>
    {
        const Input: string = (Arguments[0] as Array<string>)[0] as string;

        const FileNames: Array<string> = await Fs.readdir(Input);
        let HasMdFile: boolean = false;
        FileNames.forEach((FileName: string): void =>
        {
            if (FileName.endsWith(".md"))
            {
                HasMdFile = true;
            }
        });

        return {
            Arguments: FileNames,
            ErrorMessage: "There exists no Markdown files in the path.",
            Result: HasMdFile
        };
    }
] as const;

const ProcessInput = async (): Promise<FInput> =>
{
    if (await ValidateConditions(InputValidityConditions))
    {
        /* This is just copied from above. */
        const Input: string = process.argv?.[2];
        const Output: string = process.argv?.[3];

        return {
            Input,
            Output
        };
    }
    else
    {
        /* This execution path cannot be reached. */
        return {
            Input: EMPTY_PATH,
            Output: EMPTY_PATH
        };
    }
};

type FSettings =
{
    AtomDarkStylesPath: string;
    MainStylesPath: string;
};

const Settings: FSettings =
{
    AtomDarkStylesPath: path.join(process.cwd(), "/node_modules/highlight.js/styles/atom-one-dark.css"),
    MainStylesPath: path.join(process.cwd(), "/Resources/Style.css")
};

type FTextFile =
{
    Contents: string;
    Path: string;
};

const ReadFilesFromDirectory = async (
    DirectoryPath: string,
    Extension?: string
): Promise<Array<FTextFile>> =>
{
    const FileNames: Array<string> = (Extension !== undefined
        ? (await Fs.readdir(DirectoryPath, { withFileTypes: true }))
            .filter((FileName: Dirent): boolean => FileName.name.endsWith(Extension))
        : (await Fs.readdir(DirectoryPath, { withFileTypes: true })))
        .map((FileName: Dirent): string => FileName.name);

    const Files: Array<FTextFile> = [ ];

    for await (const FileName of FileNames)
    {
        const Contents: string = await ReadFileAsString(FileName);
        Files.push({
            Contents,
            Path: FileName
        });
    }

    return Files;
};

const Main = async () =>
{
    const { Input, Output } = (await ProcessInput());

    const AtomDarkStyles: string = await ReadFileAsString(Settings.AtomDarkStylesPath);
    const MainStyles: string = await ReadFileAsString(Settings.MainStylesPath);

    const Converter: Showdown.Converter = new Showdown.Converter({
        extensions: [ "highlight" ],
        ghCompatibleHeaderId: true,
        ghMentions: true,
        simpleLineBreaks: true,
        tables: true
    });

    let PreContent: string = `
    <html>
        <head>
        <title>${path.basename(Input.replace(".md", ""))}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="UTF-8">`;

    PreContent += `
        </head>
        <body>
        <div id='content'>
    `

    const PostContent: string = `

        </div>
        <style type='text/css'>${MainStyles}</style><style type='text/css'>${AtomDarkStyles}</style>
        </body>
    </html>`;


    const Files: Array<FTextFile> = await ReadFilesFromDirectory(Input);

    for await (const File of Files)
    {
        const Html: string = PreContent + Converter.makeHtml(File.Contents) + PostContent;

        Converter.setFlavor("github");

        const OutputFilePath: string = path.join(
            Output,
            path.basename(File.Path).replace(".md", ".html")
        );

        await Fs.writeFile(OutputFilePath, Html, { flag: "wx" });
    }
};

Main();
