const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)

// output : [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// So, here we are noticing that dc_heroes are the 4 element and if we want to access flash then 
// console.log(marvel_heroes[3][1])

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)
// output : [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const all_heroes = (marvel_heroes.concat(dc_heroes))
console.log(all_heroes)
// here concat combines both array into the new array

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

