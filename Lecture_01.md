# Lecture \#1

| Lecture № | <span style="font-weight:normal">1</span>       |
| :-------- | :--- |
| **Day**         | 1 (of 2) |
| **Week**         | 1 (of 16) |
| **Date**         | Tuesday, January 9, 2023 |
| **Goal**         | Review fundamentals and explain how to maximize success in the course  |
| **Key Concepts**         | Sets, Numbers, Field Axioms, Completeness & Order |

# Maximizing Your Success

First, the basics,

* eat healthy
* exercise
* get quality sleep
* collaborate and network with your peers

## Communicate with Me

As the instructor, I wish that you will reach out to me with any question regarding the course.
There are no dumb questions (although there are best practices when asking).

If you are doing your work at 2AM and have a question, email me.
Sure, I will likely be asleep, but I do not want any student to ever worry that they are bothering me by asking a question.

Several studies demonstrate that the biggest difference in behavior between students who do well and students who do not do well is the use of office hours.

Every student should know what my office hours are.
You will be tested on this multiple times over the course.

## Asking Questions Properly

When asking a question, the best way to get an answer is to be thorough.
Often, you will find that you better understand the topic of your question by writing a thorough question because you are forced to think through the content.

Here is a good template for asking a question,

> I am struggling with *topic*.  Here is all of the context related to my question: ... .  Here is an explicit formulation of my question: ... .  I have tried *this and that* but I am stuck *here*.

## Organizing Your Work

It is trivially obvious that organizing your work allows you to be better at your work, but it may be unclear *what* organized work looks like in a College Algebra course.

First, consider that your work will consist of a sequence of statements.
Typically, our work is best organized when each statement results from the statement before it (starting with the problem statement).

Additionally, when we formulate a new statement from the previous statement, there is a logical *justification* for why the new statement follows from the previous one.

### Two-Column Proofs

Utilizing these two facts yields the "two-column" proofwriting style.
Here is an example of a two-column proof that proves that all odd perfect cubes have odd cube-roots,
| **Statement**                                     | **Reason**                                   |
|---------------------------------------------------|----------------------------------------------|
| Assume $n$ is even (*i.e.*, $n = 2k$ for some integer $k$) | Definition of an even number (Contrapositive assumption) |
| $n^3 = (2k)^3$                    | Algebra                          |
|$(2k)^3=8k^3$              | Algebra                          |
| $8k^3$ is even since it is $2\cdot4k^3$ | Any number times 2 is even                   |
| $n^3$ is even                   | Substitution from step 1 to step 4           |
| If $n$ is not odd, then $n^3$ is not odd | Conclusion of the contrapositive proof       |

A final bit of notation: for two statements $P$ and $Q$, the statement $P \rightsquigarrow Q$ means that from statement $P$, we arrive to statement $Q$.
Proofwriting (writing detailed solutions to problems) often takes the form $P_0 \rightsquigarrow P_1 \rightsquigarrow P_* \rightsquigarrow P_n$ for many statements $P_x$.

### Natural Language and Notation

> Experts prefer conciseness, learners prefer verbosity.

&mdash;*Unknown (and I am mad about it)*

Regardless of where I heard this from (!!), this is true for most.
Thus, I encourage you to reject the convention of short variable names.
Suppose you are solving a problem that involves quantities of shirts of various colors.
You might see others construct statements like,

$$
    y = 2x + 3
$$

where $x$ and $y$ are defined to represent the number of blue shirts and yellow shirts, respectively.
This can be confusing, as you have to remember what the meanings are of $x$ and $y$; the benefit to using one-letter names is only that you write your statements slightly faster.

Instead, I encourage you to be verbose, where it helps you,

$$
    \text{Yellow Shirts} = \text{Blue Shirts} + 3
$$

This statement is only marginally harder to write out, and can make reasoning easier.

Similarly, you are encouraged to write out statements in natural language when you find it helpful.
For example, if you are solving a problem, and these statements are give to you,

* "The solution is an odd number."
* "The solution is a multiple of $5$."

You might write in your work "The solution is not a multiple of $10$" to help you remember and consider this key result of the problem's statement.

With this said, traditional notation "boxing you in" does have the benefit of making it harder to accidentally form degenerate statements.

## Generative AI

Generative AI such as ChatGPT is radically changing our relationship with technology, and will be more transformative than the internet.

**Its potential for democratizing education is exciting and immense.**
Everyone should be experimenting and learning what these tools can do for oneself.

When I am not available for a question, or out of your own curiosity, I encourage you to formulate questions for one of these tools to help you understand the topics in this course.

One method of using generative AI to enhance learning that I have used is as follows:

1. copy-and-paste text from a learning resource
2. explain the content to ChatGPT (as if I were teaching it)
3. ask ChatGPT to critique my explanation

This forces the user to really think about the content, and ChatGPT can identify potential misunderstandings or additional details that the user may have missed.

Two final warnings,

* of course, one should not use generative AI to cheat

* large-language models are not designed to do computations

This last point is to say that an LLM can help explain a mathematical concept, but will likely fail to compute the correct numeric result from an expression.

## Course Format

Each lecture will have its own notes, which will be uploaded to BrightSpace at least twenty-four hours before the lecture.

You are expected to read through the notes to have a rough idea of what we will cover.
The notes alone are insufficient for learning the content, but they allow you to get a good idea of what we will be covering the in the following lecture.

It is highly encouraged that you read through the notes *and annotate them* with any questions or considerations that you have ahead of the lecture.
In addition to the raw Markdown on GitHub, I will also upload to BrightSpace an 8.5" $\times$ 11" PDF of the notes, so that you can annotate the notes either by tablet or on paper.

# Introduction to Core Concepts

It will be greatly beneficial to everyone to begin the course with a unified understanding of core concepts, and a unified set of definitions to easily communicate problems and solutions (whether it be communication between student-and-instructor, or student-and-student).

I have identified five fundamental concepts that underlie everything that we will learn in this course.
These concepts are,

1. Sets & Numbers
2. Statements
3. Expressions
4. Relations
5. The Complete Ordered Field, $\mathbb{R}$

You need not understand these concepts perfectly, but you are expected to brush up on these regularly.

In fact, there will be many terms and facts presented that you will not need to know, but serve as important "logical stepping-stones" to reach the results that will benefit you to know.

The information that you should take from these lectures are starred; these starred items are what you should review over the course.

# Sets & Numbers

The set is the most fundamental concept of mathematics.
Even without considering the exact contents of a set, operations on sets provide powerful tools to reason through problems.

<div style="border: 2px solid #3BACD9; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
    📖 A <strong>set</strong> is a collection of objects.
</div>

<div style="border: 2px solid #3BACD9; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
    📖 <strong>Object</strong> is the term that we use to mean a <i>thing</i>.
    <br/>
    As mathematicians, our arrogance compels us to sound smart, so we say <i>object</i> instead of <i>thing</i>.
</div>

Sets contain *elements*, and the number of elements is the *cardinality* of the set.

Sets can contain a *finite* number of elements, like the set $\{2, 9, 12\}$.
The cardinality of this set is $3$.

Sets can also contain *infinitely many* elements, such as the set of natural numbers, $\mathbb{N} = \{ 1, 2, 3, \ldots\}$.
The cardinality of this set *is* a number, but not a number in the typical sense.
Its cardinality is $\aleph_0$ (pronounced "aleph null"), but this number cannot be used with arithmetic like we are familiar with.

There exist several sets of numbers that are important to arithmetic.
We will build off of this arithmetic to learn algebra, so we will now walk through these sets of numbers, and their properties.

## The Natural Numbers and Addition $(\mathbb{N}, +)$

Suppose we have an object.
How *much* of the object do we have?
This notion of *quantity* is what numbers exist to help us with.

<div style="border: 2px solid #3BACD9; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
    📖 <strong>Numbers</strong> are objects that implement the notion of <i>quantity</i>.
</div>

Let us define $1$ to be the number that represents having a *complete* instance of something.

Then, imagine that we have not only our original object, *but we also have another one*.
How many do we have?
Clearly we have $2$, but more formally, we have our previous quantity *plus one more*.
Indeed, addition is the *grouping* of quantities.

From this, we can *inductively* define the natural numbers,
1. define $1$ as given
2. define the next number to be the previous one plus one ($S(n) = n + 1$)

This set of numbers is the natural numbers, which are also called the counting numbers.

## The Integers and Subtraction $(\mathbb{Z}, -)$

What if we wish to reason with having a lack of something?
For every quantity that we can have $(\mathbb{N})$, we can have an absence of that quantity.
Thus, we assign every natural number an *inverse* element, which is the "opposite" quantity.

For example, having a lack of $2$ objects can be thought of as having $-2$ objects.

Then, what if we combine a lack of objects with objects?
We have $0$ elements.
Specifically, if we add a number with its inverse, we get $0$, which is called the neutral element of the integers.

## The Rationals and Multiplication (and Division) $(\mathbb{Q}, \cdot)$

# Statements

Statements are objects that *evaluate* to true or false.
Formally, they are finite sequences of quantifiers ("there exists...", "for all..."), connectives (this *and* that, *not* this), variables ("any number that satisfies *x*, *y*, and *z*"), and other objects.

Reasoning is done through and expressed by writing statements, and evaluating them to arrive to new statements, often until a solution is found to a problem.

Most statements that we will work with are *equations*, which are statements that relate two expressions (the *left-hand side* (LHS) and *right-hand side* (RHS) expressions) such that they are stated to be equal.

Most statements of interest are *open* statements, meaning that they are defined for some unknown object called a *variable*.
The equations that we will work with are often open, and the solutions to most problems we will encounter involve describing the set of values that make the equation true when we use those values in place of the variable.

One more bit of notation: for two statements $P$ and $Q$, $P \Longleftrightarrow Q$ means that the two statements are equivalent.
They might not be *identical*, but the meaning of the statements is the same.
The statement $P \Longleftrightarrow Q$ is called a *bijection* (or *logical bijection*).

For example, the natural-language statements "today is Tuesday" and "today is the third day of the week" (let us assume that we start the week on Sunday) *mean* the same thing, despite being different sequences of symbols (words).

Thus, the statement "today is the third day of the week $\Longleftrightarrow$ today is the third day of the week" is true, even if today is not Tuesday, because the two original statements have the *same truth value*.

These two statements are different *formulations* of the same thing.

# Field Axioms

<div style="border: 2px solid #3BACD9; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
    📖 An <strong>axiom</strong> is a fundamental statement used as a basis for reasoning or problem-solving.
</div>

The field axioms are a set of axioms that formalize most of standard arithmetic, *i.e.*, the math that you likely were taught in grades K-5.

The strategies that we will use to solve problems in the course heavily rely on these axioms.


|name|	addition|	multiplication|
|---|---|---|
associativity|	$(a+b)+c=a+(b+c)$|$	(ab)c=a(bc)$|
commutativity	|$a+b=b+a$|	$ab=ba$|
distributivity|	$a(b+c)=ab+ac$|$	(a+b)c=ac+bc$|
identity|	$a+0=a=0+a$|	$a·1=a=1·a$|
inverses|	$a+(-a)=0=(-a)+a	$|$aa^{-1}=1=a^{-1}a$ if $a\not=0$|

This table was lifted from Wolfram's *MathWorld*, which is an invaluable resource for students in all levels of mathematics.[[1]](#1)

# Completeness and Order

The field axioms describe *all but two* of the key properties of the real numbers.
These remaining properties are *completeness* and *ordering*.

## Completeness

The completeness of the real numbers essentially means that the reals are "filled in."
There are two important results from this:

1. Most reasonable constructions of real numbers are valid
2. Sets of real numbers can be described using real numbers, rather than additional tools

<!-- Essentially, when using the math that we have covered thus far, you need not worry about whether your expressions will evaluate to real numbers: the result will either be a real number, described using real numbers, or an incorrect result. -->

Essentially, if you think to yourself "the solution to this problem is a real number that satisfies these properties...", chances are, you are in fact describing a real number.

The key result of completeness is that in order to describe real numbers, sets of real numbers, and solutions to problems that involve real numbers, we often can state our work using only real numbers, instead of relying on other tools and concepts.
This makes the real numbers a *complete* tool for reasoning.

The true definition of completeness of the reals is *Dedekind*-completeness, but this specific form of completeness is a bit complicated.
Instead, we will look at *Cauchy*-completeness, which is defined as follows,

<div style="border: 2px solid #3BACD9; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
    📖 <strong>Cauchy-completeness</strong> is the property that any real number can be constructed as a sequence of digits, and at most one decimal point.
</div>

By being able to string digits together arbitrarily in this form, we can construct any number that we can reasonably think of.
If the number cannot be constructed in this form, then it is not a real number.

<div style="border: 2px solid #85DEF2; border-bottom: none; padding: 1rem; margin-bottom: 10px; border-radius: 0.25rem; margin: 0;">
    🔎 <strong>Example.</strong> Some formulations of real numbers using this result are,
</div>
<div style="height: 2rem; border: 2px dashed #85DEF2; border-top: none; border-bottom: none; margin-bottom: -2rem;">
</div>

<span style="margin-left: 1rem;"></span>$2,$

<span style="margin-left: 1rem;"></span>$0.875,$

<span style="margin-left: 1rem;"></span>$3.14159\ldots \big(= \pi\big)$

<div style="border: 2px solid #85DEF2; border-top: none; border-style: none dashed solid dashed; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
</div>

<div style="border: 2px solid #91F2F2; border-bottom: none; padding: 1rem; margin-bottom: 10px; border-radius: 0.25rem; margin: 0;">
    ☝️ <strong>Note.</strong> This method of constructing real numbers is not <i>injective</i>, meaning that not every sequence defines a <i>unique</i> real number.
    <br/>
    Here are some examples of different representations of the same numbers,
</div>
<div style="height: 2rem; border: 2px dashed #91F2F2; border-top: none; border-bottom: none; margin-bottom: -2rem;">
</div>

<span style="margin-left: 1rem;"></span>$2 = 2.0 = 2.00 = 2.000 = \cdots$

<span style="margin-left: 1rem;"></span>$0.9999\ldots = 1$

<div style="border: 2px solid #85DEF2; border-top: none; border-style: none dashed solid dashed; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
</div>

An equivalent formulation of completeness is the *least upper-bound property* (or *lub*).
This formulation of the property states that any set of real numbers that is bounded above is bounded by a real number.

<div style="border: 2px solid #85DEF2; border-bottom: none; padding: 1rem; margin-bottom: 10px; border-radius: 0.25rem; margin: 0;">
    🔎 <strong>Example.</strong> Consider the set of real numbers whose square is less than two,
</div>
<div style="height: 2rem; border: 2px dashed #85DEF2; border-top: none; border-bottom: none; margin-bottom: -2rem;">
</div>

$$
    S = \{ x : x \in \mathbb{R}, x^2 < 2 \}
$$

This set is bounded above by many numbers; we can say every element in $S$ is less than $4$, less than $8$, *etc.*, but specifically the best description is that every element is less than $\sqrt{2}$, and $\sqrt{2}$ *is a real number*.

<div style="border: 2px solid #85DEF2; border-top: none; border-style: none dashed solid dashed; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
</div>

Equivalently, the reals satisfy the *greatest lower-bound property*, but this is same property, stated in an "opposite" formulation.

## Order

<div style="border: 2px solid #3BACD9; padding: 10px; margin-bottom: 10px; border-radius: 0.25rem;">
    📖 <strong>Order</strong> is a relation on a set that defines an <i>arrangement</i> among elements in the set.
    <br/>
    When the order defines an arrangement <i>for all elements</i> in the set, the order is a <strong>partial order</strong>.
</div>

Order is much more intuitive than completeness, but perhaps less intuitive than the field axioms.

The order of the reals ($<$) is a *strict* partial order, meaning that it has three properties.
First, let us define $a, b, c \in \mathbb{R}$, then,

| Property | Meaning | Example |
| --- | --- | --- |
| Irreflexive | $a \not< a$ | $12 \not< 12$ |
|Antisymmetric| $a < b \Longrightarrow b \not< a$ | $2 < 9 \Longrightarrow 9 \not< 2$ |
|Transitive | $a < b $ and $b < c \Longrightarrow  a < c$ | $3 < 4$ and $4 < 6 \Longrightarrow 3 < 6$ |


# References

| Citation | Source |
| -------: | :----- |
| <a id="1">[1]</a> | https://mathworld.wolfram.com/FieldAxioms.html |
