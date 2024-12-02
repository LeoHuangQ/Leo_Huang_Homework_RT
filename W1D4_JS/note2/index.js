const items = [
    {id : 1, name : "aaa"},
    {id : 2, name : "ccc"},
]

const item = items.filter((item) => {
    return item.id >= 2
})

console.log(item)

const itemname = items.map((item) => {
    return item.name
})


console.log(itemname)

const finditem = items.find((item) => {
    return item.name === "aaa"
})
console.log(finditem)

const num = [1,2,3,4,5,6]
console.log(num.includes(3))