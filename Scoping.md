Scoping in JavaScript refers to the accessibility or visibility of variables within different parts of your code. Understanding how scoping works is crucial for writing bug-free and efficient JavaScript. Let's break it down into its main types: **Global Scope**, **Function Scope**, **Block Scope**, and **Lexical Scope**.

### 1. **Global Scope**
   - **Description:** Variables declared outside any function or block are in the global scope. They can be accessed from anywhere in your code, including inside functions and blocks.
   - **Usage:**
     ```javascript
     var globalVar = "I am global";

     function logGlobalVar() {
         console.log(globalVar); // Accessible here
     }

     logGlobalVar(); // "I am global"
     console.log(globalVar); // Accessible here as well
     ```
   - **Key Points:**
     - Variables in the global scope are properties of the global object (`window` in browsers).
     - Overuse of global variables can lead to namespace pollution and conflicts.

### 2. **Function Scope**
   - **Description:** Variables declared within a function using `var` are scoped to that function. They are not accessible outside the function.
   - **Usage:**
     ```javascript
     function logMessage() {
         var message = "Hello from function";
         console.log(message); // Accessible here
     }

     logMessage(); // "Hello from function"
     console.log(message); // ReferenceError: message is not defined
     ```
   - **Key Points:**
     - Function scope means the variable is confined to the function in which it is declared.
     - `var` is function-scoped, meaning it's only accessible within the function.

### 3. **Block Scope**
   - **Description:** Variables declared with `let` or `const` are block-scoped, meaning they are only accessible within the block (`{}`) where they are defined.
   - **Usage:**
     ```javascript
     if (true) {
         let blockVar = "I am block scoped";
         console.log(blockVar); // Accessible here
     }

     console.log(blockVar); // ReferenceError: blockVar is not defined
     ```
   - **Key Points:**
     - Block scope is a more fine-grained scoping than function scope, introduced in ES6.
     - `let` and `const` are block-scoped, unlike `var`.
     - Variables declared with `let` or `const` inside loops, `if` statements, or other code blocks are confined to that block.

### 4. **Lexical Scope (Static Scoping)**
   - **Description:** Lexical scoping refers to how a function's scope is determined by its physical location within the source code. Inner functions have access to variables defined in their outer (parent) functions.
   - **Usage:**
     ```javascript
     function outerFunction() {
         let outerVar = "I am from outer function";

         function innerFunction() {
             console.log(outerVar); // Accessible here due to lexical scope
         }

         innerFunction();
     }

     outerFunction(); // "I am from outer function"
     ```
   - **Key Points:**
     - Lexical scope means that the scope of a variable is determined at compile-time, based on its location within the source code.
     - Inner functions can access variables from their outer scope, but the reverse is not true.
     - This concept is fundamental to closures in JavaScript.

### 5. **Closures**
   - **Description:** A closure is a function that remembers its lexical scope even when the function is executed outside that scope. This allows the function to retain access to the variables from the outer scope where it was defined.
   - **Usage:**
     ```javascript
     function outerFunction() {
         let outerVar = "I am from outer function";

         return function innerFunction() {
             console.log(outerVar); // Closure allows access to outerVar
         };
     }

     const closure = outerFunction();
     closure(); // "I am from outer function"
     ```
   - **Key Points:**
     - Closures are created every time a function is created, at function creation time.
     - Useful for data encapsulation and maintaining state across function calls.

### 6. **Shadowing**
   - **Description:** Shadowing occurs when a variable declared within a certain scope (inner scope) has the same name as a variable in an outer scope. The inner variable shadows (overrides) the outer variable within its scope.
   - **Usage:**
     ```javascript
     let outerVar = "I am the outer variable";

     function shadowingExample() {
         let outerVar = "I am the inner variable";
         console.log(outerVar); // "I am the inner variable"
     }

     shadowingExample();
     console.log(outerVar); // "I am the outer variable"
     ```
   - **Key Points:**
     - Shadowing can lead to confusion if not managed properly, as it can obscure which variable is being accessed.

### 7. **Hoisting**
   - **Description:** Hoisting is JavaScript's default behavior of moving all variable and function declarations to the top of their containing scope during the compile phase. However, only the declarations are hoisted, not the initializations.
   - **Usage:**
     ```javascript
     console.log(hoistedVar); // undefined (due to hoisting)

     var hoistedVar = "I am hoisted";

     function hoistedFunction() {
         console.log("I am a hoisted function");
     }

     hoistedFunction(); // "I am a hoisted function"
     ```
   - **Key Points:**
     - `var` variables are hoisted and initialized to `undefined`.
     - Function declarations are hoisted with their definition.
     - `let` and `const` are also hoisted but are not initialized, leading to a "temporal dead zone" (TDZ) until the variable's declaration is encountered.
