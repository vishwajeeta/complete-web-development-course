//spread operator 
arr=[1,2,5,9]

function avg(a,b,c){
    return a+b+c/3
}
// spread operator ... it will open the array
// it will take only 3 "1,2,5"
let a=avg(...arr)
console.log(a)
try{
    let a=avg(arr)
    console.log(a)
}catch{console.log(Error)}

//we can also use
let b = [4,7,...arr,0]
console.log("with spread operator:",b)
//without using spread operator
let c = [4,7,arr,0]
console.log("without spread operator:",c)

// concatinating
arr1=[5,8,9]
c=[...arr1,...arr]
console.log("concatinating:",c)

//opetation on objects
let obj1={
    name:"vishwa",
    class:"8a",
    P_language:"javascript"
}
// let obj2={}
// obj2.name=obj1.name
// obj2.class=obj1.class
// obj2.P_language="python"
// console.log(obj2)

//operation on objects with spread operator
let obj2={...obj1,P_language:"python"} //it will take all the things ,but overwrite P_language
console.log(obj2)
//desctructuring
