# JavaScript

## Introduction

The browser has an embedded engine sometimes called a `JavaScript virtual machine`.

Different engines have different “codenames”. For example:
- V8 – in Chrome, Opera and Edge.
- SpiderMonkey – in Firefox.
- …There are other codenames like  `Chakra` for IE, `JavaScriptCore`, `Nitro` and `SquirrelFish`s for Safari, etc.

## Variables

Variables are named values and can store any type of JavaScript value.

**Example**
```js
var x = 100;
```

And here’s what’s happening in the example above:

- var is the keyword that tells JavaScript you’re declaring a variable.
- x is the name of that variable.
- = is the operator that tells JavaScript a value is coming up next.
- 100 is the value for the variable to store.



### Using variables

After you declare a variable, you can reference it by name elsewhere in your code.

**Example**

```js
var x = 100;  
x + 102;

OUTPUT
202
```

  
You can even use a variable when declaring other variables.

**Example**

```js
var x = 100;  
var y = x + 102;  
y;

OUTPUT

202
```


### Reassigning variables


You can give an existing variable a new value at any point after it’s declared.

**Example**

```js
var weather = "rainy";  
​weather = "sunny";  
weather;

OUTPUT
"sunny"
```

### Naming variables

Variable names are pretty flexible as long as you follow a few rules:

*   Start them with a letter, underscore \_, or dollar sign $.
*   After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.
*   Don’t use any of JavaScript’s reserved keywords.

With that in mind, here are valid variable names:

**Example**

```js
var camelCase = "lowercase word, then uppercase";  
var dinner2Go = "pizza";  
var I\_AM\_HUNGRY = true;  
var \_Hello\_ = "what a nice greeting"  
var $\_$ = "money eyes";  
```
  
And here are some invalid variable names — try to spot what’s wrong with each of them:

**Example**

```js
var total% = 78;  
var 2fast2catch = "bold claim";  
var function = false;  
var class = "easy";
```
  
Variable names are case-sensitive, so myVar, MyVar, and myvar are all different variables. But generally, it’s a good practice to avoid naming variables so similarly.

### Difference between `var`, `let`, and `const` keyword


#### Scope

| var | let | const |
|-----|-----|-------|
|Variables declared with `var` are in the function scope.|Variables declared as `let` are in the block scope.|Variables declared as `const` are in the block scope.|

```js

// var example
if(true){
 var a=10;
 console.log('a value with in the scope', a);

}

//let example
if(true){
 let b=11;
 console.log('b value with in the scope', b);
}

//const example
const c = 12;
//const c = 3 // if you declare will get an errror

 console.log('a value out of the scope', a);
 console.log('b value out of the scope', b); //will get error

```


#### Reassign the value

To reassign a value is to reassign the value of a variable.

| var | let | const |
|-----|-----|-------|
|Allowed|Allowed|Not allowed|

**Example**

- **var**
    ```js
    var v1 = 1;
    v1 = 30;
    console.log(v1);
    ```

- **let**
    ```js
    let v1 = 1;
    v1 = 30;
    console.log(v1);
    ```
- **const**
    ```js
    const v1 = 1;
    v1 = 30;
    console.log(v1);
    ```

Reassign difference between var, let, and const keyword

**Explanation:**

*   In the `var` and `let` tab, when you run the code, you will see that there is no error and we can define new values to the `var` and `let` variables.
    
*   In the `const` tab, when you run the code, you will get an error as a `const` variables value cannot be reassigned.
    

#### Redeclaration of the variable

The redeclaration of a variable means that you can declare the variable again.

| var | let | const |
|-----|-----|-------|
| Allowed | Not Allowed | Not allowed |

**Example**

- **var**
    ```js
    var v1 = 1;
    var v1 = 30;
    console.log(v1);
    ```

- **let**
    ```js
    let v1 = 1;
    let v1 = 30;
    console.log(v1);
    ```
- **const**
    ```js
    const v1 = 1;
    const v1 = 30;
    console.log(v1)
    ```


**Explanation:**

*   In the `var` tab, when you run the code, you will see that there is no error as we allowed to declare the same variable again.
    
*   In the `let` and the `const` tabs, when you run the code, you will get an error as the `let` and `const` variables do not allow you to redeclare them again.
    
