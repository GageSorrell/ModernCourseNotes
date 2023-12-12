module.exports =
{
    extends:
    [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:typescript-sort-keys/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions:
    {
        ecmaVersion: 2022,
        sourceType: "module"
    },
    plugins:
    [
        "@typescript-eslint",
        "typescript-sort-keys",
        "@stylistic"
    ],
    rules:
    {
        "@stylistic/eol-last": [ "error", "always" ],
        "@stylistic/keyword-spacing": "error",
        "@stylistic/max-len": [ "error", { "code": 100 } ],
        "@stylistic/padded-blocks": [ "error", "never" ],
        "@typescript-eslint/naming-convention":
        [
            "error",
            {
                "custom":
                {
                    "match": true,
                    "regex": "^(F|I|P|T|S)[A-Z][a-zA-Z]+$|^[A-Z]$"
                },
                "format": [ "PascalCase" ],
                "selector": "typeLike"
            }
        ],
        "@typescript-eslint/no-shadow": "error",
        "@typescript-eslint/no-unused-vars":
        [
            "error",
            {
                "argsIgnorePattern": "^_"
            }
        ],
        "brace-style":
        [
            "error",
            "allman"
        ],
        "camelcase":
        [
            "error",
            {
                "properties": "always"
            }
        ],
        "comma-dangle": [ "error", "never" ],
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-import-module-exports": "off",
        "import/no-unresolved": "off",
        "no-shadow": "off",
        "no-unused-vars": "off",
        "quotes": [ "error", "double" ],
        "react/jsx-filename-extension": "off",
        "react/react-in-jsx-scope": "off",
        "sort-imports":
        [
            "error",
            {
                "ignoreCase": false,
                "ignoreDeclarationSort": false,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder":
                [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "sort-keys":
        [
            "error",
            "asc",
            {
                "caseSensitive": true,
                "minKeys": 2,
                "natural": false
            }
        ]
    },
    settings:
    {
        "import/parsers":
        {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        }
    }
};
