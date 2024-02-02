# Spread Operator (...):

The spread operator is commonly used for creating a new object with some additional properties or merging multiple objects.

```javascript
const person = { name: 'John' };
const details = { age: 30, city: 'New York' };

const combined = { ...person, ...details };

console.log(combined); // { name: 'John', age: 30, city: 'New York' }
```

# Rest Operator (...) in Object Destructuring:

The rest operator is often used in object destructuring to capture some properties and store the rest in a separate object.

```javascript
const { name, ...otherDetails } = { name: 'Alice', age: 25, country: 'Canada' };

console.log(name);          // 'Alice'
console.log(otherDetails);  // { age: 25, country: 'Canada' }

```