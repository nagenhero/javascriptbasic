const person2={
    firstName: "jane",
    lastName:"doe",
    age:30,
    isMarried:true,
    address:{
        street:"church sr",
        city:"sydney",
        state:"Nsw",
        postcode:2150

    },
    getFullAddress: function()
    {
        return this.address.street + this.address.city+  this.address.state +  this.address.postcode;
    }
}

console.log(getFullAddress());
console.log("hiiiii");