const fruits = ['banana', 'apple','mango'];
console.log(fruits);

// Use spread operator to create a new array

// const newfruits=[...fruits,'orange','lemaons'];
const newfruits=fruits.push('nice','looks')
console.log(fruits);


// Use the concat method to create a new array
const books=['pashto','dare','English']
const writes=['pancil','marker']
const alls=books.concat(writes,'tairq')
console.log(alls)
// Use the slice method to create a new array with a portion of the original array

const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits);

// Use the filter method to create a new array with only fruits that start with 'a'

const filteredFruits = fruits.filter(fruit => fruit.startsWith('a'));
console.log(filteredFruits);

// Use the map method to create a new array with the lengths of each fruit

const fruitLengths = fruits.map(fruit => fruit.length);
console.log(fruitLengths);

// Use the reduce method to calculate the total length of all fruits

const totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
console.log(totalLength);

// Use the sort method to sort the fruits alphabetically

const sortedFruits = fruits.sort();
console.log(sortedFruits);

// Use the sort method with a custom comparator function to sort the fruits by their lengths in descending order

const sortedFruitsByLength = fruits.sort((a, b) => b.length - a.length);
console.log(sortedFruitsByLength);

const names=['Tariq','AFghan','Khan']
names.push('Ali')

console.log(names)

names.unshift('John')

console.log(names)

names.splice(2,0,'Mary')

console.log(names)

names.pop()

console.log(names)
names.pop()

console.log(names)

names.shift()

console.log(names)

names.splice(1,1)

console.log(names)

names.reverse()

console.log(names)

names.sort()

console.log(names)

names.sort((a, b) => b.localeCompare(a))

console.log(names)

names.sort((a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
})

console.log(names)

names.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))

console.log(names)

names.sort((a, b) => a.localeCompare(b, ['en', 'fr', 'es'], { sensitivity: 'base' }))

const name='tariq'
console.log(name)

console.log(name.charAt(0))

console.log(name.charCodeAt(0))

console.log(name.concat(' Ali'))

console.log(name.includes('riq'))

console.log(name.startsWith('Tar'))
