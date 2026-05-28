// const coding = ["js", "ruby", "java", "python", "cpp"]

// const valuess = coding.forEach( (item) => {    // it donst not return anything, it just iterates over the array and executes the function for each element
//     console.log(item);
// } )

// console.log(valuess);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //  when u use scope you will use return
// const filteredNums = myNums.filter( (num) => { return num > 4; } );
// console.log(filteredNums);

// const newNums=[]
// myNums.forEach( (num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// } )
// console.log(newNums);


const books = [
    {
        title: "Book One",genre: "Fiction",published: 2001,edition: 2004},
    {
        title: "Book Two",genre: "Non-Fiction",published: 2005,edition: 2008},
    {
        title: "Book Three",genre: "History",published: 2010,edition: 2012},
        {title: "Book Four",genre: "Science",published: 2015,edition: 2018},
        {title: "Book Five",genre: "Fantasy",published: 2020,edition: 2021},
        {title: "Book Six",genre: "Biography",published: 2022,edition: 2023},
        {title: "Book Seven",genre: "Mystery",published: 2023,edition: 2024},
        {title: "Book Eight",genre: "Romance",published: 2024,edition: 2025},
        {title: "Book Nine",genre: "Thriller",published: 2025,edition: 2026}
]

let userBooks = books.filter( (bk) => bk.genre === "History" )


  userBooks = books.filter( (bk) => { 
    return bk.published>= 2015 && bk.genre === "Romance";
})
console.log(userBooks);