### 1. **Arrow Functions**
   - **Purpose:** Provides a more concise syntax for writing functions and also handles `this` context more predictably.
   - **Usage:**
     ```javascript
     const add = (a, b) => a + b;
     console.log(add(2, 3)); // 5
     ```
   - **Key Points:**
     - Lexical scoping of `this`, which means the value of `this` inside an arrow function is inherited from the parent scope.
     - Cannot be used as constructors.

### 2. **`let` and `const`**
   - **Purpose:** Introduces block-scoped variables (`let`) and block-scoped constants (`const`), replacing `var` for most use cases.
   - **Usage:**
     ```javascript
     let x = 10;
     const y = 20;

     if (true) {
         let x = 30; // Block scope
         console.log(x); // 30
     }

     console.log(x); // 10
     ```
   - **Key Points:**
     - `let` is mutable and block-scoped.
     - `const` is immutable (cannot be reassigned) and block-scoped.
     - Variables declared with `let` or `const` are not hoisted in the same way as `var`.

### 3. **Template Literals**
   - **Purpose:** Provides a way to create multi-line strings and embed expressions within strings.
   - **Usage:**
     ```javascript
     const name = 'Wolfgang';
     const greeting = `Hello, ${name}!`;
     console.log(greeting); // "Hello, Wolfgang!"

     const multiLine = `This is
     a multi-line
     string.`;
     console.log(multiLine);
     ```
   - **Key Points:**
     - Use backticks (`` ` ``) instead of quotes.
     - Supports expression interpolation using `${expression}`.

### 4. **Destructuring Assignment**
   - **Purpose:** Allows unpacking of arrays or objects into individual variables.
   - **Usage:**
     ```javascript
     const [a, b] = [1, 2];
     const {name, age} = {name: 'Wolfgang', age: 30};

     console.log(a); // 1
     console.log(name); // Wolfgang
     ```
   - **Key Points:**
     - Can be used with arrays and objects.
     - Provides a shorthand for accessing and assigning data.

### 5. **Default Parameters**
   - **Purpose:** Allows functions to have default values for parameters if no argument is provided.
   - **Usage:**
     ```javascript
     function greet(name = 'Guest') {
         return `Hello, ${name}!`;
     }

     console.log(greet()); // "Hello, Guest!"
     console.log(greet('Wolfgang')); // "Hello, Wolfgang!"
     ```
   - **Key Points:**
     - Default parameters are evaluated at the time of function call.

### 6. **Rest and Spread Operators**
   - **Purpose:** The rest operator (`...`) allows collecting all remaining elements into an array. The spread operator (`...`) allows expanding elements of an array or object.
   
   **Rest Operator:**
   - **Usage:**
     ```javascript
     function sum(...numbers) {
         return numbers.reduce((total, num) => total + num, 0);
     }

     console.log(sum(1, 2, 3)); // 6
     ```
   
   **Spread Operator:**
   - **Usage:**
     ```javascript
     const arr = [1, 2, 3];
     const newArr = [...arr, 4, 5];
     console.log(newArr); // [1, 2, 3, 4, 5]

     const obj = {a: 1, b: 2};
     const newObj = {...obj, c: 3};
     console.log(newObj); // {a: 1, b: 2, c: 3}
     ```
   - **Key Points:**
     - Rest operator is used in function parameters and array destructuring.
     - Spread operator is used in array and object literals.

### 7. **Classes**
   - **Purpose:** Introduces a more familiar OOP (Object-Oriented Programming) syntax for creating objects and handling inheritance.
   - **Usage:**
     ```javascript
     class Person {
         constructor(name, age) {
             this.name = name;
             this.age = age;
         }

         greet() {
             return `Hello, my name is ${this.name}`;
         }
     }

     const person = new Person('Wolfgang', 30);
     console.log(person.greet()); // "Hello, my name is Wolfgang"
     ```
   - **Key Points:**
     - Simplifies prototype-based inheritance.
     - Supports inheritance with `extends`.

### 8. **Modules (Import/Export)**
   - **Purpose:** Provides a standardized way to organize and reuse code across files.
   - **Usage:**
     ```javascript
     // module.js
     export const pi = 3.14;
     export function square(x) {
         return x * x;
     }

     // main.js
     import { pi, square } from './module.js';
     console.log(pi); // 3.14
     console.log(square(2)); // 4
     ```
   - **Key Points:**
     - `export` keyword is used to export variables, functions, or classes.
     - `import` keyword is used to bring exported elements into another file.

### 9. **Promises**
   - **Purpose:** Provides a way to handle asynchronous operations more cleanly than callbacks.
   - **Usage:**
     ```javascript
     const promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve('Success!'), 1000);
     });

     promise.then(result => console.log(result)); // "Success!"
     ```
   - **Key Points:**
     - Promises represent the eventual completion (or failure) of an asynchronous operation.
     - `.then()` is used to handle resolved promises, `.catch()` for rejected promises, and `.finally()` for cleanup.

### 10. **Enhanced Object Literals**
   - **Purpose:** Provides shorthand syntax for defining properties and methods in objects.
   - **Usage:**
     ```javascript
     const name = 'Wolfgang';
     const age = 30;

     const person = {
         name,
         age,
         greet() {
             return `Hello, my name is ${this.name}`;
         }
     };

     console.log(person.greet()); // "Hello, my name is Wolfgang"
     ```
   - **Key Points:**
     - Allows properties and methods to be defined more succinctly.

### Practical Examples
- Be ready to demonstrate how arrow functions improve code readability and how `let` and `const` provide better variable scoping.
- Show how destructuring and the spread/rest operators simplify working with arrays and objects.


# Additional features of ES6
It looks like the major ES6 (ECMAScript 2015) features were covered, but there are a few additional features and nuances that I didn't mention. Here’s a quick overview of what was missed:

### 1. **`Map` and `Set`**
   - **Purpose:** Introduces new collection types for managing unique values (`Set`) and key-value pairs (`Map`).

   **Map:**
   - **Usage:**
     ```javascript
     const map = new Map();
     map.set('name', 'Wolfgang');
     map.set('age', 30);

     console.log(map.get('name')); // 'Wolfgang'
     console.log(map.has('age')); // true
     console.log(map.size); // 2
     ```
   - **Key Points:**
     - Allows any type of key (objects, functions, etc.).
     - Maintains the order of insertion.

   **Set:**
   - **Usage:**
     ```javascript
     const set = new Set([1, 2, 3, 3]);
     set.add(4);

     console.log(set.has(3)); // true
     console.log(set.size); // 4
     ```
   - **Key Points:**
     - Only stores unique values.
     - Useful for filtering duplicates from an array.

### 2. **`WeakMap` and `WeakSet`**
   - **Purpose:** Similar to `Map` and `Set`, but with weak references to keys (in `WeakMap`) or values (in `WeakSet`), allowing garbage collection when there are no other references.
   
   **WeakMap:**
   - **Usage:**
     ```javascript
     const weakMap = new WeakMap();
     let obj = {};
     weakMap.set(obj, 'some value');

     console.log(weakMap.get(obj)); // 'some value'
     obj = null; // The object is garbage-collected since it's only weakly referenced
     ```

   **WeakSet:**
   - **Usage:**
     ```javascript
     const weakSet = new WeakSet();
     let obj = {};
     weakSet.add(obj);

     console.log(weakSet.has(obj)); // true
     obj = null; // The object is garbage-collected
     ```

   - **Key Points:**
     - Keys/values are held weakly, meaning they can be garbage collected if there are no other references.
     - Useful for managing resources without preventing garbage collection.

### 3. **Symbols**
   - **Purpose:** Provides a unique and immutable data type that can be used as object property keys without collision.

   - **Usage:**
     ```javascript
     const sym = Symbol('description');
     const obj = {
         [sym]: 'value'
     };

     console.log(obj[sym]); // 'value'
     console.log(Object.keys(obj)); // [] (Symbol keys are not enumerable)
     ```
   - **Key Points:**
     - Each `Symbol` is unique, even if created with the same description.
     - Useful for creating private or special object properties that won't clash with other properties.

### 4. **Block-Scoped Functions**
   - **Purpose:** Functions declared inside a block (`if`, `for`, etc.) are block-scoped when declared with `function`.

   - **Usage:**
     ```javascript
     if (true) {
         function doSomething() {
             console.log('Doing something');
         }
         doSomething(); // Works here
     }
     // doSomething(); // ReferenceError: doSomething is not defined
     ```
   - **Key Points:**
     - Previously, functions were hoisted and available outside the block, but ES6 changes this to be block-scoped like `let` and `const`.

### 5. **Binary and Octal Literals**
   - **Purpose:** Adds support for binary and octal number formats.

   - **Usage:**
     ```javascript
     const binary = 0b1010; // Binary (10 in decimal)
     const octal = 0o12; // Octal (10 in decimal)

     console.log(binary); // 10
     console.log(octal); // 10
     ```
   - **Key Points:**
     - Binary literals use the `0b` prefix.
     - Octal literals use the `0o` prefix.

### 6. **Tail Call Optimization**
   - **Purpose:** Optimizes recursive functions that use tail calls (a function call that is the last action in a function), reducing the risk of stack overflow errors.

   - **Usage:**
     ```javascript
     function factorial(n, acc = 1) {
         if (n === 0) return acc;
         return factorial(n - 1, n * acc); // Tail call
     }
     console.log(factorial(5)); // 120
     ```
   - **Key Points:**
     - Tail call optimization is automatically applied by some JavaScript engines when a function is in strict mode.
     - It helps with performance in recursive functions by reusing the same stack frame for tail calls.

### 7. **`Number.isNaN()` and `Number.isFinite()`**
   - **Purpose:** Provides more reliable methods for checking if a value is `NaN` or finite.

   - **Usage:**
     ```javascript
     console.log(Number.isNaN(NaN)); // true
     console.log(Number.isNaN('NaN')); // false

     console.log(Number.isFinite(100)); // true
     console.log(Number.isFinite(Infinity)); // false
     ```
   - **Key Points:**
     - `Number.isNaN()` is a more precise way to check for `NaN` than `isNaN()`, which coerces the argument to a number first.
     - `Number.isFinite()` checks if the value is a finite number, without coercion.
