//for each

// let arr = [1,2,3,4,5,6,7,8,9,10,'subhajit']

// arr.forEach((el, index)=>{
//     return index;
//     console.log(el,index)
//     return el
// })

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i],i)
// }

// let output = arr.forEach((el, index)=>{
//     return el
    
// })

// console.log(output)

// let output= arr.map((el, index)=>{
//     return el*2
// })

// console.log(output)

//filter

// let output = arr.filter((el, index)=>{
//     return el%2==0;
// })

// console.log(output)

// let output = arr.filter((el, index)=>{
//     return typeof el === 'string';
// })

// console.log(output)

let arr = [1,2,3,4,5,6,7,8,9,10,12,11]

// let output = arr.reduce((acc, el)=>{
//     return acc+=el;
// }, 100)    //0->accumulator

// console.log(output)

// let output = arr.reduce((acc, el)=>{
//     return acc+el;
// }, 100)    //0->accumulator

// console.log(output)

// let output= arr.filter((el, index)=>{
//     return typeof el != 'string' && el%2 ==0;
// }).map((el,index)=>{
//     return el**2;
// })

// console.log(output)

// let output= arr.filter((el, index)=>{
//     return typeof el != 'string' && el%2 ==0;
// }).reduce((acc,el)=>{
//     return acc*el;
// },1)

// console.log(output)

let output= arr.filter((el, index)=>{
    return typeof el != 'string' && el%2 ==0;
}).map((el,index)=>{
    return el**2;
}).reduce((acc,el)=>{
    return acc+el;
},0)

console.log(output)

// let ans= arr.sort((a,b)=>{
//     return a-b;
// })

// console.log(ans)

let data= [
    {name:"watch",price:2000,reting:2},
    {name:"phone",price:1900,reting:4},
    {name:"shoe",price:1200,reting:5},
    {name:"car",price:10000,reting:5},
    {name:"earphone",price:1900,reting:4.3},
]

// let ans = data.sort((a,b)=>{return a.price-b.price})

// console.log(ans)

// let ans = data.sort((a,b)=>{return a.name-b.name})

// console.log(ans)

let ans = data.sort((a,b)=>{
    if (a.name>b.name)
        return -1;
    else
        return 1;
})

console.log(ans)