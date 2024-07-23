let a=[5,10,7]
let b=[...a,...a,...a]
let c=[a,a,a]
console.log(b)
console.log(c)

function print(a,c,b)
{
    console.log(a,b,c)
    return {a,b,c}
}
let d=print(...a)
console.log(d)