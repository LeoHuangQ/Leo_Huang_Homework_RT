

const build = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1} ${ingredient2} ${ingredient3}`;
        }
    }
}

const my = build('bacon')('lettuce')('tomato');
console.log(my);

const build2 = (ingredient1) => (ingredient2) => (ingredient3) =>  `${ingredient1} ${ingredient2} ${ingredient3}`;
        
const my2 = build2('bacon22')('lettuce22')('tomato22');
console.log(my2);
////
function sayHi(getPerson){
    const person = getPerson();
    // console.log(`hi my name is ${person.name}`);
    return `hi my name is ${person.name}`;
}

const getPerson = () => {
    return {
        name: 'jack'
    }
}

console.log(sayHi(getPerson));

///

function stockController(){
    let stock = 0;
    return {
        buyStock: function (count){
            stock += count;
        },
        show: function (){
            return stock;
        },
        sellStock: function(count = 0){
            if (count > stock) {
                stock = 0;
                return;
            }
            stock -= count;
            // return stock;
        }
    }
}

const stock = stockController();
stock.buyStock(30);
console.log('After buying stock 30, stock is ', stock.show());
// typeof NaN (not a number) is number
// stock.buyStock();
// console.log(stock.show() , typeof stock.show());
stock.sellStock(10);
console.log('After selling stock 10, stock is ', stock.show());

stock.sellStock(100);
console.log('After selling stock 100, stock is ', stock.show());


// scope: variable search will find the nearest one
let a = 'global';
(function bar(){
    const a = 'bar';
    (function foo(){
        // const a = 'foo';
        console.log(a);
    }
    )();
})();


