[Back to Index Page](/docs/index.md)

## Java Script Fundamentals Part 1

Theory Slides: Click [here](../../course-slides/theory-lectures-v2.pdf)

### Datatypes in Java script
1 number

2 string

3 boolean

4 null

5 undefined

6 symbol

7 bigint

### var, let and const
var: old way of declaring variables in javascript. It was using before ES6/ES2015.
let: modern way of declaring variables in javascript. It was introduced in ES6/ES2015.
variable can be mutate.
const: used to declare constant variable in javascript. variable whose value will n't be changed.

> [Note]
> 
> Don't create var without any var, let and const. Actually it will not create variable instead it creates 
> a property in the global object.
> Like below code:
```javascript
name = 'Revs';
```

### Operators

Power: 2 power 3
```javascript
let twoPowThree = 2 ** 3; // 8
let squareNumber = 4 ** 2; // 16
let cubeNumber = 3 ** 3; // 27 
```

### Arrays

```javascript
// defining an array
const studentNames = ['Revs', 'Pushpa', 'Siddu'];
const parents = new Array('Revs', 'Pushpa');

// array functions
// push(): adds a element to the end the array and returns length of the array
const studentLength = studentNames.push('Tiger');
console.log(`Student Length: ${studentLength}`);
// unshift(): adds an element to the first position of the array and returns the length
studentNames.unshift('Anjali');
// pop(): removes the elemnet from an array and returns the removed element.
const poppedStudent = studentNames.pop(); // Tiger
const firstStudent = studentNames.shift(); // Revs
// includes(): checks the presence of the element in the array and return true if present orelse -1.
console.log(studentNames.includes('Revs')); // false

// indexof(): returns the index of the element
studentNames.indexof('Pushpa'); // 1

```