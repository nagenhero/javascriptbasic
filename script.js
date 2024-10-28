
// // // alert("hellow world");
// // // console.log("hi this is first time in javascriot");
// // //array
// // const value = [ "prem", 345, "nagen", null, { name:"prem"}];
// // console.log(value, typeof value);
// // // lengthm push,pop,shoft,unshift, splice, slice ,indexOf,

// const arr= [];
// const even =[];
// const odd =[];

// for(let i=0; i<50; i++)
// {
//     arr[i]=parseInt(Math.random()*101);
//     console.log(arr[i]);
// }
// // arr.reverse();
// console.log( arr.sort((a,b) =>b-a));
// for (let i=0;i<arr.length; i++)
// {
//     if(arr[i]%2 === 0)
//     {
//         even.push(arr[i]);
       
       

//     }
//     else
//     {
//          odd.push(arr[i]);
        
//     }
// }
// console.log("even number is:");
// console.log(even);
// console.log("odd number is");
// console.log(odd);
// //remove duplicates data
// const newData =arr.filter((item,i)=> arr.indexOf(item)=== i)
// console.log(newData);
// // subtotal
// const total = newData.reduce((acc,item)=>
// {
//     return acc+item;
// },0)
// console.log("total value of unique 50's array is");
// console.log(total);

 
// const a= 10;
// if(!(a=== 9))
// {
//     console.log("hi");
// }


// const person2 = {
//   firstName: "jane",
//   lastName: "doe",
//   age: 30,
//   isMarried: true,
//   address: {
//     street: "church sr",
//     city: "sydney",
//     state: "Nsw",
//     postcode: 2150,
//   },
//   getFullAddress: function () {
//     return ( 
//         "Full Address is " + "," +
//       this.address.street + 
//       this.address.city +
//       this.address.state +
//       this.address.postcode
//     );
    
//   },
// };

// console.log(person2.getFullAddress());

//how to use fucntion in js

function convertf(a) {

   return a*(9/5)+32;
}

//either above defined or down 
const convert = (a)=>

{
    return a*(9/5)+32;

}
console.log(convertf(100));
console.log(convert(100));





