

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
