<link rel="stylesheet" href="/bower_components/jasmine/lib/jasmine-core/jasmine.css">
<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap.css">
<link rel="stylesheet" href="/bower_components/bootstrap/dist/css/bootstrap-theme.css">
<style>
body {
    padding: 2rem;
}
</style>
# Miscellaneous Notes

## Reserve

[List of Reserved Words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar)

Languages typically have reserved words that have special meaning to the compiler/interpreter.  These reserved words cannot be used as the names of variables.

## Expression vs. Statement

Often these two terms are used interchangeable, but `any fragment of code that produces a value is an expression`.  For example:

```
var x = 10 + 22 - 7;
var y = userAuthenticated || "Invalid user";
var z = !loggedIn
```

In x, 22 and 7 are both expressions.  You can test this by putting parenthesis around them.

```
var x = 10 + (22) - (7);
```

Each expression can be grouped with a set of parenthesis without changing the actual value.

```
var x = (10 + ((22) - (7)));
```

For y and z:
```
var y = ((userAuthenticated) || ("Invalid user"));
var z = !(logged);
```

Statements are the evaluation of all the expressions, terminated by the semi-colon or a new line if you are using Automatic Semi-Colon Insertion.

## The Window object

In the browser, trying to create a variable without using the keyword `var` attaches a variable to the global object.  The `use strict` statement is a way of turning that off, and NodeJS does this by default.

## Variables

Literally anything that can vary.  This is opposed to `constants`, which cannot change.

# Scoping

## Lexical Scoping

JavaScript uses `lexical scoping` to understand the `scope` of a value.  `Scope` refers to the `lifetime` and `visibility` of a variable.  `Lexical` refers to each variable being visible at the function level.  Each inner function maintains a reference to variables in the outer function, known as a `closure`.  But variables in the inner scope are not accessible to the outer scope.  It is considered best practice to make your variables as local as possible and to avoid passing around large numbers of references.

## Block Scoping

In ES6, JavaScript introduced the keyword `let`, which creates a block scope.  A block-scoped variable is delimited by a set of braces `{}` instead of by a function scope `function newfunction () {}`

# Hoisting

Functions can be written as `function expressions`.

    var func = function () { // Do something here. };

Or they can be written as `function declarations`.

    func doSomething() {}

When using `function declarations`, the code is hoisted to the enclosing function, or to the global object (`window`).  This means you can use a function before it's been defined.  The reason for this is because of what's known as `mutually recursive function calls`, where `function a` needs to call `function b`, and `function b` needs to call `function a`.  Since both functions call each other, there needs to be a way to load these functions into memory before they are actually invoked in the code.

Generally, it is recommended to use `function expressions`, since they make the code easier to reason about, although some people like being able to call functions at the top of the code.  

Any variables declared with `var variable = y`, no matter where they are put in the code, will be `hoisted` to the top of the current function scope.  If they are used before the definition is found, the result will be `undefined`.

# JavaScript Objects

JavaScript is composed of two types of objects.
  
  1. Built-in objects are shared across all versions of JavaScript like Object, Array, Boolean, Number, RegExp, etc.
  
  2. The Host Objects are unique to each environment JavaScript is running within.  In the case of the browser, this is window, document, console, etc.  Node and Electron have different host objects than the browser.
  
  Since this is meant to demonstrate JavaScript at its most common and simplest, we will be using the Browser to demonstrate JavaScript.  

## Variables.  

* A variable is literally something which can change or vary.  JavaScript in ES5 supports var as the keyword for declaring a variable.  In ES6, let is supported for block-scoped variables and const is supported for constants.
* Variables cannot begin with a number, but can use one anywhere else.
* Can use special characters and even Unicode valid characters, but you will be cursed by every other programmer after you.
* The $ sign and the _ are valid anywhere in the variable names, but when used in the beginning, they tend to have special meaning.

### Common Variable Idioms

* Functions with a constructor, those that require the new keyword, are generally capitalized.
* Everything else is generally lower-cased for the first word.
* There are two common conventions, snake-casing and camel-casing.  Snake casing looks like this `var my_new_variable` whereas camel casing looks like this `var myNewVariable`.  Camel casing is generally used because that's how the DOM expects JavaScript variables to work.

## Primitives vs. Complex Types

1. JavaScript has what it calls Primitives, but they are not true primitives.  In programming, a true primitive has no methods or properties on it.  The closest thing JavaScript has to a true primitive is `NULL` AND `UNDEFINED`, which are known as bottom-values.
2. `UNDEFINED` means that a variable has been declared, but has not had any value assigned to it.  `var x;` would declare that x exists, but it would not give it any value.  The value would be undefined.  `y;` would be undefined, since there is no `var` declaration before it.  This will throw an error, so you have to check this by using the `typeof` language construct.  `typeof thing` will show `undefined`.  You must assign null for it to show up as a value.
3. All JavaScript functions without an explicitly declared return value will return `undefined` as well.
4. A primitive type will not be strictly equal to a string created with a Constructor.  Also, the typeof check will fail for a string created with a constructor.  It is also unnecessarily verbose.  For this reason, it is advised to avoid using the Constructor version of creating primitive types.

## Objects

- Objects are key-value stores.  The key is the name used to access a value.  The value is what is stored.
- Properties of an object are values.  Methods of an object are functions.
- Object keys can be accessed with one of two notations, the dot notation or the square bracket notation.
- The dot notation is more commonly used, but it can only access string properties.
 
        object.dotnotation
        object[squareNotation]
 
- The square notation can access dynamic properties or properties with non-standard names.  It is highly recommended that you do not attempt to create non-standard variable names.

## Classes

- Classes feature a few key ideas:  `Abstraction`, `Polymorphism`, `Inheritance`, and `Encapsulation`.

- In our example, Abstraction is achieved by having multiple classes derive from one base class, the `Person` class.
- Variations on the Person class are achieved by the `Doctor` and `PinballPlayer` class.

- `Polymorphism` is a fancy name that means that a child class can overwrite the parent's class methods.  For example, the `Doctor` class overwrites the parent's `fullname` method by appending `Dr.` to the front of it.
- `Inheritance` means that child classes will inherit methods and properties from the parent class.
- `Encapsulation` is perhaps one of the most important.  This means that classes will not leak out to other methods/functions to manipulate.
