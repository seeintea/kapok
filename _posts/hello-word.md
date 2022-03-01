---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

### 1. 在 JavaScript 创建对象的方法

[原文地址：what-are-the-possible-ways-to-create-objects-in-javascript](https://github.com/sudheerj/javascript-interview-questions#what-are-the-possible-ways-to-create-objects-in-javascript)

如下所述，在 javascript 中有多种创建对象的方法

- Object constructor

创建对象最简单的方法是使用对象构造函数。

```javascript
let object = new Object()
```

- Object `create` 方法

将原型对象作为参数，通过 `Object.create` 方法创建一个新的对象。

```javascript
let object = Object.create(null)
```

- Object 字面量语法

Object 字面量等价于 `create` 方法的参数为 `null` 。

```javascript
let object = {}
```

- Function constructor

定义任意函数并通过 `new` 操作符创建对象实例。

```javascript
function Person(name) {
  this.name = name
  this.age = 21
}
let object = new Person("ammi")
```

- 包含属性和方法的 Function constructor

和 Function constructor 类似，但是使用原型定义对象的属性和方法。

```javascript
function Person() {}
Person.prototype.name = "ammi"
let object = new Person()
```

相当于将函数的原型作为参数，使用 `Object.create` 方法创建实例，然后将实例和参数作为函数的参数调用。

```javascript
function func() {}
new func(x, y, z)

// (OR)

// 通过函数原型创建对象实例
let newInstance = Object.create(func.prototype)
let ret = func.call(newInstance, x, y, z)

console.log(ret && typeof ret === "object" ? ret : newInstance)
```

- ES6 Class 语法

ES6 引入类特性用于创建对象。

```javascript
class Person {
  constructor(name) {
    this.name = name
  }
}
let object = new Person("ammi")
```

- 单例模式

单例是只会被创建一次实例的对象。多次调用其构造函数会返回相同的实例，确保不会被意外的创建多个对象。

```javascript
let object = new (function () {
  this.name = "ammi"
})()
```

### 2. 原型链是什么？

[原文地址：what-is-a-prototype-chain](https://github.com/sudheerj/javascript-interview-questions#what-is-a-prototype-chain)

原型链用于在现有对象的基础上创建新类型的对象，和类语言模型中继承类似。

对象实例的原型可以通过 `Object.getPrototypeOf(object)` 或者 `__prop__` 属性获取，而构造函数的原型可以通过 `Object.prototype` 获取。

![[20220223-1.png]]

### 3. `call` 、`apply` 、`bind` 之间的区别

[原文地址：What is the difference between Call, Apply and Bind](https://github.com/sudheerj/javascript-interview-questions#what-is-the-difference-between-call-apply-and-bind)

`call` 、`apply` 、`bind` 之间的区别可以用下面的例子来说明。

- **`Call`** : call 方法调用给定 `this` 的函数，并逐个传入参数。

```javascript
let ep1 = { firstName: "John", lastName: "Rodson" }
let ep2 = { firstName: "Jimmy", lastName: "Baily" }

function invite(word1, word2) {
  console.log(`${word1}, ${this.firstName} ${this.lastName}, ${word2}`)
}

// log: Hello, John Rodson, How are you?
invite.call(ep1, "Hello", "How are you?")
// log: Hello, Jimmy Baily, How are you?
invite.call(ep2, "Hello", "How are you?")
```

- **`Apply`** : apply 方法调用给定 `this` 的函数，并以数组的形式传入参数。

```javascript
// log: Hello, John Rodson, How are you?
invite.apply(ep1, ["Hello", "How are you?"])
// log: Hello, Jimmy Baily, How are you?
invite.apply(ep2, ["Hello", "How are you?"])
```

- **`Bind`** : bind 方法返回新的函数，传入参数的方法与原方法一致。

```javascript
let invite1 = invite.bind(ep1)
let invite2 = invite.bind(ep2)
// log: Hello, John Rodson, How are you?
invite1("Hello", "How are you?")
// log: Hello, Jimmy Baily, How are you?
invite2("Hello", "How are you?")
```

`call` 和 `apply` 是可以互换使用的，它们都是立即执行当前的函数。你需要决定是传入参数的方式，是数组还是以逗号分隔的参数。数组是使用 apply 方法，逗号分隔则是 call 方法。

而 `bind` 会返回一个参数，同时需要传入 `this` 作为 bind 方法的第一个参数。

### 4. JSON 常用操作

[原文地址：### What is JSON and its common operations](https://github.com/sudheerj/javascript-interview-questions#what-is-json-and-its-common-operations)

**JSON** 是基于文本的数据结构，其遵循 JavaScript 对象语法，由 `Douglas Crockford` 推广。当你想在网络中传输数据时非常有用，其文本文件的拓展名为 .json， MIME 类型为 application/json。

**Parse** : 将字符串转换为原生对象

```javascript
JSON.parse(text)
```

**Stringify** : 将原生对象转换为可以在网络传输中使用的字符串

```javascript
JSON.stringify(object)
```

### 5. 数组 `slice` 方法的作用

[原文地址：What is the purpose of the array slice method](https://github.com/sudheerj/javascript-interview-questions#what-is-the-purpose-of-the-array-slice-method)

`slice` 方法将数组中选定的元素作为新数组返回。其选定元素的开始为给定的第一个参数，结束时给定的第二个参数，但是不包括最后一个元素。第二个参数为可选参数，如果忽略，那么结束范围就是原数组的最后一个元素。

```javascript
let arr = [1, 2, 3, 4, 5]
// arr1 = [1,2]
let arr1 = arr.slice(0, 2)
// arr2 = [5]
let arr2 = arr.slice(4)
```

> slice 方法不会修改原数组，其总是返回一个新的数组。

### 6. 数组 `splice` 的作用

[原文地址：What is the purpose of the array splice method](https://github.com/sudheerj/javascript-interview-questions#what-is-the-purpose-of-the-array-splice-method)

`splice` 方法可以向原数组添加数据也可以删除原数组中的数据，并且返回被删除的数据。其第一个参数指定添加或删除的索引，第二个可选参数是删除元素的个数，之后的输入的所有参数作为增加项添加到数组中。

```javascript
let arr = [1, 2, 3, 4, 5]
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1, 2, 3, 4, 5]
// arr3 = [1,2] arr = [3,4,5]
let arr3 = arr.splice(0, 2)
// arr4 = [4,5] arr1 = [1,2,3]
let arr4 = arr1.splice(3)
// arr5 = [3] arr2 = [1,2,3,"a","b","c",5]
let arr5 = arr2.splice(3, 1, "a", "b", "c")
```

> splice 会修改原数组，并返回删除的数据。

### 7. `slice` 和 `splice` 的区别

[原文地址： What is the difference between slice and splice](https://github.com/sudheerj/javascript-interview-questions#what-is-the-difference-between-slice-and-splice)

主要区别入下表所示

| Slice                | Splice                |
| -------------------- | --------------------- |
| 不会修改原数组       | 会修改原属组          |
| 返回原数组的子集     | 返回被删除的数组      |
| 用于从数组中选择元素 | 用于向数组中增/删元素 |

### 8. 如何比较 `Object` 和 `Map`

[原文地址： How do you compare Object and Map](https://github.com/sudheerj/javascript-interview-questions#how-do-you-compare-object-and-map)

Object 和 Map 类似，都允许设置键值对、检索值、删除键、检索某些数据是否存在键中。出于这个原因，通常把 Object 当作 Map 使用。但是在某些情况下，使用 Map 更好。

- 对象的键可以是字符串也可以是 `Symbol` ，但是 `Map` 的键可以是任意类型，包括函数，对象以及任何原始类型。
- `Map` 的键是有序的，但是对象的键是无序的。当执行迭代操作时 `Map` 会按照插入的顺序返回键值。
- `Map` 可以通过 `size` 属性便捷的获取大小，但是对象的属性需要手动确认。
- `Map` 是可以迭代，对象的迭代需要先获取其键的值。
- 对象拥有原型，将其当作 `Map` 使用时，键的设置可会发生冲突。在 ES5 时，可以使用 `Object.create(null)` 来解决这个问题，但是现在很少使用了。
- 在频繁添加或删除键的场景下，`Map` 的性能更好。

### 9. `==` 操作符和 `===` 操作符的区别

[原文地址：What is the difference between == and === operators](https://github.com/sudheerj/javascript-interview-questions#what-is-the-difference-between--and--operators)

JavaScript 提供严格的相等比较和类型转换的相等比较。严格运算符考虑对象的类型，而非严格运算符会根据变量的值进行类型的校正/变换。严格运算符遵循以下原则。

- 当两个字符串拥有相同序列的字符，长度且每一个字符位置的一一匹配，则它们严格相等。
- 当两个数字的值相等时，它们严格相等。但是有两个特殊的例子。
  1.  `NaN` 不与任何值相等，包括其本身。
  2.  +0 和 -0 相等。
- 当布尔类型的值相等时，它们严格相等。
- 当两个对象的引用地址相同时，它们严格相等。
- `null` 和 `undefined` 在严格运算符下不相等，非严格运算符下相等。

### 10. 什么是 lambda 函数或箭头函数

[原文地址：What are lambda or arrow functions](https://github.com/sudheerj/javascript-interview-questions#what-are-lambda-or-arrow-functions)

### 11. 什么是头等函数

[原文地址：What is a first class function](https://github.com/sudheerj/javascript-interview-questions#what-are-lambda-or-arrow-functions)

### 13. 什么是高阶函数

[原文地址：What is a higher order function](https://github.com/sudheerj/javascript-interview-questions#what-is-a-higher-order-function)
