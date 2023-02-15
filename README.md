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

## Data Types

Data types specify what kind of data can be stored and manipulated within a program. In JavaScript, data types are divided into two parts. Primitive data types and Non-Primitive data types. These data types are subdivided into several types.

Primitive data types are string, number, boolean, null, undefined, symbol. As you know, strings are used to express texts. numbers are used to denote numbers, booleans are used to denote “true” and “false”, nulls are used to denote that a variable “has no value”, undefined are used to denote indefinite variables, and symbols are used to denote symbols.

Non-Primitive data types were data types created within the object. These are arrays, objects, functions, dates, etc.

![data-types](./img/data_types.png)

### Primitive Data Types:

 - #### String:
    Strings are written with quotes. You can use single or double quotes.

    ```js
    const str = 'some string';
    console.log(str);
    ```
 - #### Number:
    JavaScript has only one type of numbers. Numbers can be written with, or without decimals.

    ```js
    const nmbr = 20;
    console.log(nmbr);
    ```
 - #### Boolean:
    Booleans can only have two values: true or false.

    ```js
    const bln = true;
    console.log(bln);
    ```

    Booleans are often used in conditional testing.

    ```js
    const x = 15;
    const y = 15;
    console.log(x==y);
    ```

    ```js
    const x = 15;
    const y = 14;
    console.log(x==y);
    ```

 - #### Null:
    
    In JavaScript null is “nothing”. It is supposed to be something that doesn’t exist.

    ```js
    let nll = null;
    console.log(nll);
    ```

 - #### Undefined:
  
    In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

    ```js
    let undf;
    console.log(undf);
    ```
### Non-Primitive Data Types:

 - #### Array: 

    JavaScript arrays are written with square brackets.Array items are separated by commas. Array indexes are zero-based, which means the first item is [0], second is [1], and so on.

    ```js
    let programmingLanguage = ["C", "C++", "R"];
    console.log(programmingLanguage);
    ```

    - #### Array Methods:

        - **push()**

            This method add the last element of an array, and returns the new length. It changes the original array.

            ```js
            const arr = [];
            arr.push(1);
            console.log(arr);
            ```
        - **pop()**

            This method remove the last element of an array, and returns the removed element. It changes the original array.

            ```js
            const arr = [];
            arr.pop();
            console.log(arr);
            ```
          > So new elements are added or taken always from the “end”.

        - **shift()**

          This method removes the first element of an array, and returns the new length. It changes the original array.

          ```js
          const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];
          fruits.shift();
          console.log(fruits);
          ```

        - **unshift()**

          This method adds new items to the beginning of an array, and returns the new length. It changes the original array

          ```js
          const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];
          fruits.unshift('Pineapple');
          console.log(fruits);
          ```
          > new elements are added or taken always from the "begining of the array".
        - **splice()**

          This method adds/remove items to/from an array, and returns the removed item(s)

          **Remove item from array**

          ```js
          const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];
          fruits.splice(2, 1);
          console.log(fruits);
          ```

          **Add item from array**

          ```js
          const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];
          fruits.splice(2, 0, "Lemon", "Kiwi");
          console.log(fruits);
          ```
        - **slice()**

          This method returns the selected elements in an array, as a new array object.

          This method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

          ```js
          const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];
          const newFruits = fruits.slice(1, 3);
          console.log(newFruits);
          ```
        - **sort()**

          This method sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending or descending.

          ```js
          const fruits = ['Apple', 'Mango', 'Orange', 'Banana'];
          fruits.sort();
          console.log(fruits);
          const numbers = [25, 10];
          numbers.sort();
          console.log(numbers);
          ```
        - **reverse()**

          The method reverses the order of elements in array.

          ```js
          let arr = [1, 2, 3, 4, 5];
          arr.reverse();
          alert( arr );
          ```
        - **concat()**

          This method is used to join two or more arrays. It does not change the existing arrays, but returns a new array, containing the values of the joined array.

          ```js
          const arr1 = [1,2,3];
          const arr2 = [4,5,6];
          const arr3 = arr1.concat(arr2);
          console.log(arr3);
          ```
        - **split()**

          It splits the string into an array by the given delimiter.

          ```js
          let names = 'ram, sam, raj';
          let arr = names.split(', ');
          console.log(arr);
          ```
        - **join()**
         
          This method does the reverse to split. It creates a string of arr items joined by between them

          ```js
          let arr = ['ram', 'sam', 'raj'];
          let str = arr.join(',');
          console.log( str );
          ```
        - **.map()**

          Let me explain how it works with a simple example. Say you have received an array containing multiple objects – each one representing a person. The thing you really need in the end, though, is an array containing only the id of each person.

          ```js
          // What you have
          var officers = [
            { id: 20, name: 'Captain Piett' },
            { id: 24, name: 'General Veers' },
            { id: 56, name: 'Admiral Ozzel' },
            { id: 88, name: 'Commander Jerjerrod' }
          ];
          // What you need
          [20, 24, 56, 88]
          ```
          There are multiple ways to achieve this. One of the method `.map()`

          ```js
          const officersIds = officers.map((officer, index) => officer.id);
          console.log('officersIds', officersIds);
          ```
 - #### Object:

   JavaScript is an object-based language and in JavaScript almost everything is an object or acts like an object. 

   - ####  The object literal is the simplest way to create objects:

     The simplest way to create an object is to use the object literal. We define a set of properties inside curly braces `{}` separated by commas. Below is an example.

      ```js
      const employee = {
        name: 'John',
        role: 'Web developer'
      };
      ```

     The previous object has two properties. The first property has the key `name` and the value `John`.
   - #### Properties can be accessed using the dot and the bracket notations

     Properties can be accessed using the dot notation when the key is a valid identifier.

     ```js
     console.log(employee.name);
     ```

     When the key is not a valid identifier we need to use the bracket notation.

     ```js
     console.log(employee["name"]);
     ```

  - #### Object can store other objects

    The value of a property can have any type. Properties can store objects. Consider the next example where developer is an object not a string.

    ```js
    const game = {
      name : 'Fornite',
      developer: {
        name: 'Epic Games',
        founder: 'Tim Sweeney'
      }
    };
    ```
  - #### Objects can store functions

    The property value can be of any type including functions.The following object has the property toString storing a function.

    ```js
    const game = {
      name : 'Fornite',
      toString: function(){
        return this.name;
      }
    };
    console.log(game.toString());
    //Fornite
    ```
    When a function is stored on an object it can be used as a method. Notice that in methods we can use the this keyword to access properties on the associated object.

  - #### Arrays are emulated using objects

    Yes, arrays are emulated using objects. Consider the following array.

    ```js
    const games = [
      {name: 'Candy Crush', developer: 'King'},
      {name: 'Angry Birds', developer: ' Rovio Entertainment'}
    ];
    console.log(games[0]);
    //using map
    games.map((game,index) => console.log(g.name)); //
    ```
### Functions

  - #### What is a function?

    A function is a block of organized code used to perform a task, and it helps you write clean and reusable code.

    - **What does a JavaScript function look like?**
      - A JavaScript function is defined with the function keyword, followed by a name and parentheses ().
      - Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
      - The parentheses may include parameter names separated by commas:(parameter1, parameter2, …)
      - The code to be executed, by the function, is placed inside curly brackets: {}
      - A JavaScript function can be defined as a declaration or as an expression.

    ```js
    //function declaration
    function f1(parameter1, parameter2){
      //code to be executed
    }
    // arrow function
    const f1 = (parameter1, parameter2) => {

    }
    ```
    We need to give the function a name that we will use when we want to call this function. Inside the parenthesis, we define the parameters this function can receive, and inside brackets, we write to code that needs to be executed when this function is called.

    - **What is function scope?**

      The function scope refers to the variable access, any variable defined inside the function has function/local scope, which means are accessible only inside the function.

      ```js

      let variable1;

      const name = (param) => {
        let variable2
      }
      ```
    - **Functions can be passed to other functions**
      Functions can be passed as parameters to the other function. For example, if you need to filter an array, you can create a filter function and pass the function as a parameter to the built-in array filter function.

      ```js
      const isEven = (target) => {
        return target % 2 === 0;
      }
      const list = [1,2,3,4,5,6];
      list.filter(isEven);
      ```
### Conditional Statements
  `What is a conditional statement?` Well, conditional statements allow us to create a condition that will equate to either true or false. Should our conditions prove to be true, we can then choose to do something to our data. On the other hand, should our conditions prove to be false, they would be excluded from that something happening. But I would not count them out just yet as we are able to create multiple conditional statements to fit our functions needs. Let’s jump right into it.

  - **If Statement**

    The most common conditional statement as a developer that you will likely come across will be an if statement. An if statement takes in a condition that we set, should that condition prove to be true we can then do something. Let’s take a look at the example below as we create a pseudo if statement to help get a visual representation of the format as well.

    ```js
    if(condition){
      //do somthing
    }
    ```

    As you can see, we start with an if, then within our brackets is where we set our condition. Should that condition be true we will enter our curly brackets and probably do something before getting to the outside. Should our condition be false though, we will not even enter the curly brackets to begin with and end up where our outside is. Outside is here to represent the outside of the if statement and would most likely be the next line of code within your function. Let’s take a look at an if statement in action in the example function below.

    ```js
    const ifStatement = (num) => {
        let answer = ''
        if(num === 7){
            answer = '7 is my favorite'
        }

        if(num === 24){
           answer = '24 is my favorite'
        }

        return answer;
    }
    console.log(ifStatement(24));
    // 24 is my favorite
    ```
  - **Else If Statement**
    An else if statement looks the same as an if statement but with one difference. Else just needs to be in front of our if, otherwise everything looks and runs identical. The only different is that we will never lead with an else if statement. We will always start with an if statement, then should we need additional conditional statements they will always follow with else if should we need conditions. Let’s take a look at the same example but with our else if’s put into place.
    ```js
    const ifStatement = (num) => {
        let answer = ''
        if(num === 7){
            answer = '7 is my favorite'
        }else if(num === 24){
           answer = '24 is my favorite'
        }

        return answer;
    }
    console.log(ifStatement(24));
    // 24 is my favorite
    ```
  - **Else Statement**
    An else statement looks and acts a little different then the two previous statements that we have looked at. An else statement does not take in any conditions because its built-in condition is to run should all other if and/or else if statements fail. And for this reason, else statements are always placed last in your conditional statements. Think of it as always being the last conditional to run in your line of conditional statements. Let’s take a look at the example blow where we insert an else statement.

    ```js
    const ifStatement = (num) => {
        let answer = ''
        if(num === 7){
            answer = '7 is my favorite'
        }else if(num === 24){
           answer = '24 is my favorite'
        }else{
          answer = 'not my favorite'
        }

        return answer;
    }
    console.log(ifStatement(44));
    // 24 is my favorite
    ```




## REACT JS

## Introduction

- ### What is React?

  React.js builds user interfaces for single-page web apps by dividing the UI into composable elements. React.Js is a UI library, that was originally developed as an in-house library for Facebook, and then it was later open-sourced in 2013. It's famous and mostly used for a multitude of reasons

- ### Why Use React.js?

  - #### Easy To Learn:

    Since it requires a minimal understanding of JavaScript and HTML, the learning curve is fairly low. In some cases, we will even be using the ‘vanilla DOM JavaScript API’(you’ll see what I mean later), which means that the programmer doesn’t need to learn anything new before getting started.

  - #### Reusable Components:

    If you’ve developed simple websites in HTML, there might’ve been times where you wanted to group a bunch of HTML elements and then save them into some sort of ‘variable’ so that it could be re-used later on. For a developer, this is a lifesaver. React has the ability to implement such a facility.

## Getting Started: Installing React

First, go to the terminal and then type,

```sh
npx create-react-app app-name
```

This instruction creates a template of a React application with the name of `**app-name**` .

_Note:_ `**_npx_**` _is not a typo. It is a package runner command included within_ `**_npm_**` _._

Now, you need to navigate to the directory of this application and then view it in your browser like so:

```sh
cd app-name  
npm start
```

If the above operation is successful, your browser will open up to a URL of `**localhost:3000**` . This is the output in the browser

![](./img/1_pteOH-KRaRkCvhKT80D88A.png)

Output in the browser

Now let’s create a simple Hello World! application with this project.

Hello World! — With React
=========================

Within your project directory, go to `**src/index.js**` and replace the contents of the file `**index.js**`as follows:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

```

Code to write in index.js

*   `**Lines 1 and 2**` :Importing the `**react**` and `**react-dom**` libraries. The `**react**` module is used to write HTML code within JavaScript(also known as JSX) and `**react-app**` is used to execute the `**render**` function that will display the contents onto the page.
*   `**Line 5**`: Render an `**h1**` element in a container which has an `**id**` of root. The explanation of this method is done in the next part.

The output of the code is as follows:

```
Hello world!
```

The output of the code

_Note: You might be wondering that HTML tags within JavaScript are incorrect syntax. You’re absolutely right, but the React Library uses its own language that is similar to JavaScript but can use JSX within the language._

The render method
=================

The `**root.render**` method can be explained as follows:

```js
const container = Where do I want to render
const root = createRoot(container); // lets us render to the page
root.render(Element I want to render)
```

Syntax

As the syntax suggests, the

*   The `container` object specifies where you want to display the element. In normal convention, it’s a `div` element with the id of `root`. We use the JavaScript DOM API to identify this such element.
*   The `root.render`function specifies **what** element you want to display the element. In the above example, we rendered an `h1` element with the text `Hello World`.

_Question: Where can I find this_ `**_div_**` _element that has the_ `**_id_**` _of_ `**_'root’_**` _?_

Look into the code of the HTML file, `**public/index.html**` . Notice at `**line 31**` :

```html
  <div id='root'></div>
```

Line 31 in index.html

All of the elements we specify in the `**element**` argument will be displayed within the `**div**` element that has the specified `**id**` of `**root**` .

Thus, the compiler tells the browser that: _the_ `**_element_**` _will be displayed within_ `**_container_**` _._

But there are several things you should know when using this method:

Things to know about root.render()
----------------------------------

The `**root.render**` method **cannot contain two-parent elements in the first argument**. The example below is wrong and will give you an error:

```js
root.render(<h1>First Element</h1><h2>Second Element</h2>)
```

Wrong code

Instead, you can do this:

```js
root.render(<div>
  <h1>First Element</h1>
  <h2>Second Element</h2>
</div>
)
```

We can specify one single parent element to display 2 child `**h1**` elements on the page.

We can even display a small unordered list as follows:

```js
root.render(<ul>
  <li>First Element</li>
  <li>Second Element</li>
</ul>
)
```

Ordered list in React

In practical cases though, it’s not feasible to insert 40+ lines of HTML in the `**render**` method. This is where **Functional Components** come into place.

Functional Components
=====================

Let’s take this piece of HTML code:

```html
<table border="0" cellpadding="0" cellspacing="0">
    <thead>
        <tr>
            <th>Firm</th>
            <th>0rg</th>
            <th>Lob</th>
            <th>Sub Lob</th>
            <th>Business Plans</th>
            <th>Business Components</th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>BT0</ th>
            <td>2</td>
            <td>15</td>

        </tr>
        <tr>
        <tr class="UbTotat ROWS">
            <td colspan=" 3" class="sub-total-text">Sub Total</td>
            <td>6</td>
            <td>15</td>
        </tr>
</table>
```

Can this code be made modular?

As a React developer, it’s not viable to put so many elements within the `**render**` method. It is good practice to implement modularity.

You can put the elements you want to render within a separate function.

Core Idea
---------
```js
function ComponentName() {  
     return(   
      <component> </component>  
   )  
}
root.render(<ComponentName/> , document.getElementById('root'))
```

`**component**` is the HTML element you want to render, like `**h1**` or `**p**` .

Basic Example
-------------

As an example, let’s rewrite the function of the Hello World! app.

```js
function MyInfo() {
  return ( <hi1>
    Hello World with Functional Components
  </h1>
)
```

Basic Functional Components example

_Note: Always remember to use_ `**_return_**` _on your elements, otherwise, it will throw an error_

To render it,

```js
root.render(<MyInfo />);
```

Rendering a component

As you can notice, we can write our function as a JSX tag.

Keep in mind that you should

*   use **self-closing tags.**
*   Your function should **start with a capital letter.**

The code gives the following output

```
Hello World in functional components
```

Code output

Here also, we cannot have multiple parent elements. Like before, we will use one parent element with two child elements.

```js
function MyApp() {
  return (
    <div>
      <h1>Hello World in functional components</h1>
      <h1> This is another element </h1>
    </div>
  )
}
```

Multiple elements in a functional component

Exercise
--------

As a little task, I want you to render an `**h1**` element with your name in it, and then write a list that contains 3 facts about you. Perform this activity using functional components.

**Solution**: We cannot have two parents elements. Let’s use a `**div**` and then insert an `**h1**` element followed by a list(`**ul**`) .

```js
function MyApp() {
return(
  <div>
    <h1> Srinivas </h1>
    <ul> Age : 18 </ul>
  </div>
  )
}
```

And then it will be rendered.

The output of the code is as follows:

#### Srinivas
- Age: 18

The output of the code

In real-life projects, it is common practice to put your functional components within separate files as it makes your program more modular.

Move Functional Components Into Separate Modules
================================================

Let’s say your functional component is too complex. As a developer, you want to move your component into another file so that it can be used in your main file. Thus, this makes your program modular. Furthermore, modularity also makes your code look neater.

Core Idea
---------

First, create a functional component in a separate file. Then, we will export it as follows:

**export default ComponentName**

`**ComponentName**` is the name of your functional component.

Basic Example
-------------

Let’s rewrite the above exercise.

Create a new file, called `**MyApp.js**` and write your code as follows:

```js
import React from 'react';
function MyApp() {
  return (
      <div>
        <h1>Srinivas</h1>
        <ul>
          <li>Age: 18</1i>
          <li>occupation: student </1i>
        </ul>
        <h1> This was done through modular components </h1>
      </div>
  )
}
export default MyApp;
```

Functional Component in a separate file

*   `**Line 1**` : Import the `**react**` module to use JSX tags within our code
*   `**Lines 2–12**` : Our functional component
*   `**Line 13**` : Export our `**MyApp**` function so that it could be used within our `**index.js**` file.

Now we can use it in our `**index.js**` file like so:

```js
 import React from "React";
 import {createRoot} from "react-dom/client";
 import MyApp from "./MyApp";
 const container = document.getElementById('app');
 const root = createRoot(container);
 root.render(<MyApp />)
```

*   `Line 3`: We will use the `**import**` keyword to use the `**MyApp**` component. **Always remember to use relative paths to specify your module**. First-party modules like `**react**` don’t need relative paths.
*   `Line 7`: Render the `**MyApp**` component.

The output of the code is as follows:

```text
Srinivas

Ager l3
occupation: student

This was done through modular components

```

The output of the code

Parent/Child Components
=======================

Sometimes, even when writing HTML tags within functions becomes too complex. You cannot write so many lines of code within a function as it seems unreadable.

You can nest your functional components as much as you want

Core Idea
---------

Define basic functional components

```js
function MyFirstComponent() {  
    return(   
     <component> </component>  
   )  
}
```

Use it in a second functional component

```js
function MySecondComponent() {  
  return (  
    <div>  
      <MyFirstComponent/>  
      <!--further code here -->  
    </div>  
  )  
}
```

And then render it

**root.render(<MySecondComponent/>);**            

Basic Example
-------------

As an example, let’s define a footer element in a separate file and then use it.

In a file `**Footer.js**`

And then to use it in `**App.js**` :

Notice that our `**Footer**` element was used in `**Line 13**`

Now let’s render `App` element within `**index.js**`

root.render(<App/>);

Recap
=====

Hello World App
---------------

```js
import React from "react"  
import ReactDOM from "react-dom"**root.render(<h1> Hello World </h1>);**
```

Functional Components
---------------------
```js
function MyComponent() {  
  return(  
    <component>   
    </component>  
    )  
}
```
Functional Components in Another File
-------------------------------------

*   Define a component, `**MyComponent.js**` and export

```js
function MyComponent() {  
  return(  
    <component> </component>  
    )  
}
```
**export default MyComponent**

*   Use in another file `**index.js**` ,

```js
import React from "react"  
import ReactDOM from "react-dom"  
import MyComponent from "./MyComponent"\
```

Nested Components
-----------------

*   Define the first component, `**MyComponent.js**` and export

```js
function MyComponent() {  
  return(  
   <component> </component>  
    )  
}
export default MyComponent
```

*   Define the second component, `**App.js**` and export

And then use in `**index.js**`

```js
import React from "react"  
import ReactDOM from "react-dom"  
import App from "./App";
```

External Resources:
-------------------

*   [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)
*   [Hello World — React](https://reactjs.org/docs/hello-world.html)
*   [React Render HTML- W3 Schools](https://www.w3schools.com/react/react_render.asp)


