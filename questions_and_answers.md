<div class="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A - `{}`

<i>In this question, a variable is declared using 'let'. However in the next line, another variable 'greetign' is declared without using 'var', 'let' or 'const' keywords. When such keywords are not used for declaring a variable, the variable becomes global-scoped, so it still remains valid. In this case, an empty object is assigned to 'greetign'. Which means, the result will {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C - `"12"`

<i>The answer "12" is not a number, but a string. In JavaScript, when a number and a string value are added, 'concatenation' occurs. This means when a number and string value are added using `+` operator, they attach to each other as if they are one value instead of adding. Here, the sum of 1 & "2" is an example of such a a case. So, the answer is "12" which is not a number in JavaScript sense.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A - ``['🍕', '🍫', '🥑', '🍔']``

<i>When an array is initialized, it is stored in the heap memory, & any modification done to it is done using its references in the call stack. So if a new variable is declared & the previous array is assigned to it, & some of the contents of the array are changed, they would change the contents of the original array as the variable is assigned to a reference of the original array. However in this question, the value of the key "favoriteFood" is initially food[0]. Then it is changed to "🍝". Here, no modification of the food array is occuring, rather a new data type, which is a string, has been assigned. Hence, the original 'food' array remains unchanged. So the answer is A.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B - `Hi there, undefined`

<i>The key difference between 'null' & 'undefined' is that 'null' is set deliberately to acknowledge that there is no value. So it is a special case of data type. But 'undefined' means a variable has been declared but no data has been assigned to it. In this question, the function asks for a parameter 'name'. However, as no argument is passed when the function is called, the value of the parameter becomes undefined. It is to be noted that a parameter is one type of variable too. It is initially unassigned, & gets assigned to the value of the argument when the function is called. In this case, the answer will be B.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C - 3

<i>In this question, we see that forEach array method has been applied on the array. The result is that for each value of the array being true, the value of 'count' will increase by 1. Although there are four values in the array, the first one is 0, which is a falsy. A falsy value is a value that gives false boolean value when compared. 0 is a falsy as its boolean value is false. Hence, for each 'num' being true, the value of 'count' increases by 1 which happens for 1, 2, 3 & not 0. So the answer is C.</i>

</p>
</details>
