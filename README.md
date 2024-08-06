# Javascript Data Types
## Undefined vs null

Undefined : in the absence of a definition. Undefined uses as a default value when JS engine initializes our
variables. we sue Undefined for anything like functions dont retuurn anythng or missing properties from object.

Null: It is the absence of value there is no value there. 


## Array and functions are objects:
```javascript
function a() {
    return 5;
}
a.hi= 'Hi!';
console.log(a.hi);
```
## Primitive vs Non Primitive types
## Primitive
- In JS all types other than the object type are primitive (objects, Array, function)
- it is the data which only represents simple value.
- Immutable (a= 5 and a=10 remove 5 from memory and relace with 10)

## Non Primitive

```javascript
const obj1 = {
    a: "Hi!"
}
// primitive data type which acts like a object here JS slently create a wrapper object around this true when we try an attempt
// a property to primitive data type super confusing things like String, Boolean exist in order for use to be able to sue some methods.

true.toString()
```
it does not contain directly value but it contains the reference somewhere in memory.
### JS-Built-In-Objects
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

### Arrays are objects
- Underneath the hood 

```javascript
typeof [] //Array
var a = ['1', '2', '3'];
const obja = {
    0: '1',
    1: '2',
    2: '3',
}
// check type is Array Array.isArray(arr)

```

# Pass by value vs Pass By reference
## Pass by value 
- Simply we made a copy of the value and create the value somehwere else in memory.
- Primitives: when assign value 5 to variable a same as b = 10 omwhere in memory variable a contain the reference the valye 5.
- a & b don't know of each other that we say pass by value

```javascript
var a= 5;
var b= a;
b++;
console.log(b) //6
// b has the reference to primitive type value 5 
```
## Pass by reference
- objects stored in memory and pass by reference we don't copy the values like in primitive types we pass the reference of obj1 to the obj2 
- We safe memory from copy value 
- Drawback: Accidental some what value change by passing reference in memory 

```javascript
var obj1 = {user: 'Tom'}
var obj2 = obj1;


// Array example
var c = [1,2,4];
var d = c;
d.push(5);
console.log(c) // [1,2,4,5]

// clone array without affect array c
var c = [1,2,4];
var d = [].concat(c);
d.push(5);
console.log(c) // [1,2,4]
console.log(d) // [1,2,4, 5]

// clone object without affect array c
var c = {a: 'a', b: 'b'};
var d = Object.assign({}, c);
d.c = 5343443;

// nested object example
var c = {a: 'a', b: 'b', c: {deep: true}};
var d = Object.assign({}, c);
d.c.deep = 5; // output both c & d deep property has value of 5

```
- Remember each object gets passed by reference although we cloned the inital object .Shallow clone it clones 
the first level so there is another addressin memory which never always reference this object deep.


## Deep Clone - nested object example solution Correct way to clone nested objects

```javascript
var c = {a: 'a', b: 'b', c: {deep: true}};
var superClone = JSON.parse(JSON.stringify(c));
d.c.deep = 5; 

```
- Warning: Deep clone comes with performance issue becuase of massive objects which are more deep.

Type coercion in JavaScript refers to the automatic or implicit conversion of values from one data type to another. This can happen when operators or functions are applied to values of different types, or when JavaScript expects a specific type but receives a different one. There are two types of type coercion in JavaScript: implicit and explicit.

### Implicit Type Coercion

Implicit type coercion occurs when JavaScript automatically converts one data type to another. This can often lead to unexpected results.

Examples:

1. **String to Number:**
   ```javascript
   let result = '5' - 2; // result is 3
   ```

2. **Number to String:**
   ```javascript
   let result = '5' + 2; // result is '52'
   ```

3. **Boolean to Number:**
   ```javascript
   let result = true + 1; // result is 2
   ```

4. **Null to Number:**
   ```javascript
   let result = null + 1; // result is 1
   ```

5. **Undefined to Number:**
   ```javascript
   let result = undefined + 1; // result is NaN
   ```

### Explicit Type Coercion

Explicit type coercion occurs when you manually convert a value from one type to another using built-in functions or operators.

Examples:

1. **String to Number:**
   ```javascript
   let num = Number('5'); // num is 5
   let num = parseInt('5'); // num is 5
   let num = parseFloat('5.5'); // num is 5.5
   ```

2. **Number to String:**
   ```javascript
   let str = String(5); // str is '5'
   let str = (5).toString(); // str is '5'
   ```

3. **Boolean to Number:**
   ```javascript
   let num = Number(true); // num is 1
   let num = Number(false); // num is 0
   ```

4. **Boolean to String:**
   ```javascript
   let str = String(true); // str is 'true'
   let str = String(false); // str is 'false'
   ```

5. **Number to Boolean:**
   ```javascript
   let bool = Boolean(1); // bool is true
   let bool = Boolean(0); // bool is false
   ```

### Examples in Practice

Implicit type coercion:
```javascript
let a = '10';
let b = 5;
let result = a * b; // result is 50 because '10' is coerced to 10
```

Explicit type coercion:
```javascript
let a = '10';
let b = 5;
let result = Number(a) * b; // result is 50 because '10' is explicitly converted to 10
```

# JTS Dynamic vs Static typed
## Dynamic typed 
- Dynamic languages allow us to check the type based on value without specifying types just like static typed langages.
they are not bound to specfic type.
- type detcted on runtime JIT just in time compilation while user browse through website while JS is running.
### Props: 
- much cleaner and easier.
- Proper documntation
### Cons
-  but cause a problem in runtime due to assign or access data types
-  
# Strong vs weakly typed
- JS weakly typed language

```javascript
var abc = 'abcdef';
abc+17; // abcdef17
// JS i know what you are going to do so it will concat here's type Coersion working and treat 17 as string & concat
```

# Links

- https://repl.it/@aneagoie/reference-exe
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
- https://dorey.github.io/JavaScript-Equality-Table/
- https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3
