const arr = ["foo", "bar"];
// ["foo", "bar"]
// console.log(arr);

// how to not mutate the original array
const sortedCopy2 = [...arr].sort();
// ["bar", "foo"], ["bar", "foo"]
// console.log(sortedCopy2, arr);

const sortedCopy = arr.sort();
// this mutates the original array as you can see from the log
// ["bar", "foo"], ["bar", "foo"]
// console.log(sortedCopy, arr);

// how to block the original array from being mutated
const originalArr: ReadonlyArray<string> = ["foo", "bar"];
// @ts-expect-error - we are trying to mutate the original array, TS will complain
const sortedCopy3 = originalArr.sort();
// correct way of copying readonlyArray
const sortedCopy4 = originalArr.slice().sort();
// ["bar", "foo"], ["bar", "foo"]
// console.log(sortedCopy4, originalArr);

// cautious about js unicode sorting
const foo = [1,3,22]
foo.sort()
// [1, 22, 3]
// console.log(foo)
// it is essentially comparing like a string where 22 is like aaa and 3 is like b, 33 like bb, etc ...

// to sort a number we need to parametrize the sort function
const foo2 = [1,3,22]
// if a is less than b, return -1
// if a is greater than b, return 1
// if a is equal to b, return 0
foo2.sort((a, b) => a - b)
// [1, 3, 22]
// console.log(foo2)

// how to sort more complex objects
const foo3 = [{name: "foo", age: 30}, {name: "bar", age: 20}, {name: "baz", age: 40}]
// we can sort by age comparing the age property
foo3.sort((a, b) => a.age - b.age)
// [{name: "bar", age: 20}, {name: "baz", age: 40}, {name: "foo", age: 30}]
// console.log(foo3)

// to sort the items in descending order we simply reverse the order of the sort
const foo4 = [{name: "foo", age: 30}, {name: "bar", age: 20}, {name: "baz", age: 40}]
foo4.sort((a, b) => b.age - a.age)
// [{name: "foo", age: 30}, {name: "baz", age: 40}, {name: "bar", age: 20}]
// console.log(foo4)

// case insensitive sorting
const foo5 = ["foo", "bar", "baz", "Foobig", "Barbig", "Bazbig"]
// if we use jus the sort method, it will put the capital letters first
foo5.sort()
// [ 'Barbig', 'Bazbig', 'Foobig', 'bar', 'baz', 'foo' ]
// console.log(foo5)

// to sort properly we use the localeCompare method
foo5.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
// [ 'bar', 'Barbig', 'baz', 'Bazbig', 'foo', 'Foobig' ]
