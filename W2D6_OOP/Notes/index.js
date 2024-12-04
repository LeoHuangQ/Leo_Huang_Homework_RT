/* 
object and class 
*/
// ES 5
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
        // template literal use ` not ' !!!!!!!
        // return '${this.title} was written by ${this.author} in ${this.year}';
    };
};

Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
};


const book1 = new Book('book1', "aaaa", "2010");
const book2 = new Book('book2', "bbbbbb", "2020");

console.log(book1.getSummary());
console.log(book2.getAge());
console.log(book1);

function Magazine(title, author, year,month){
    // use call? 
    Book.call(this, title, author, year );
    this.month = month;
}
// should include the prototype of the book, to enable getAge function
Magazine.prototype = Object.create(Book.prototype);

const mag1 = new Magazine('m1', 'ffff', "2020", 'Jan');
console.log(mag1.getSummary());
console.log(mag1);
console.log(mag1.getAge());

///ES 6
class NewBook {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getAge(){
        const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
    }
    getSummary = function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

const book3 = new NewBook("book3", 'dfdfd', "2023");
console.log(book3.getAge());

// ES6: no need to use object.call & object.create !!!
class Mag extends Book{
    constructor(title, author, year, month){
        super(title, author, year);
        this.month = month;
    }
}

const mag2 = new Mag("mag2", 'aaafff', '2000', 'Feb');
console.log(mag2.getSummary());
console.log(mag2);

/*
Static related
*/

class User{
    static count = 0;
    constructor(name){
        this.name = name;
        //use the class name User, not this !!!!
        User.count += 1;
    }
    static getCount(){
        //use the class name User and this are both fine !!!!
        return `${this.count} users are here`;
    }
}

const u1 = new User('A');
const u2 = new User('B');
const u3 = new User('C');
console.log(User.count);
console.log(User.getCount());

/*
this 
*/
const video ={
    title: 'a',
    tags: [1,2,3],
    play(){
        // console.log(this.title);
        console.log(this);
    },
    showTags(){
        this.tags.forEach(function(tag){
            console.log(this.title, tag);
        },this)
    }
}
video.play();
video.showTags();

function Video(title){
    this.title = title;
    console.log(this);
}

const v = new Video('b');