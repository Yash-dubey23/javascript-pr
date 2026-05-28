const myNums = [1, 2, 3]
const myTotal=myNums.reduce(function(acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
     return acc + currval; }, 0)
// it will return a single value that is the result of the function for each element in the original array, it takes an accumulator and the current value as arguments, the accumulator is the value that is returned by the function for the previous element, the current value is the value of the current element, the second argument is the initial value of the accumulator
console.log(myTotal);

const myTotal2=myNums.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal2);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const TotalPrice= shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(TotalPrice);