let obj={
    name:'Subhajit',
    class:'B.Tech',
    myfunction:function(){
        console.log(this)
        console.log(this.name,this.class)
        console.log("I am method inside object")
    },
    subjects:["DBMS","CN","NM"],

    newobj:{
        1:12,
        myfunction:function(){
            console.log(this)
        }
    }
}

console.log(obj.myfunction())
console.log(obj.newobj.myfunction())

const arrowFunction=()=>{
    let a=10;
    let b=20;
    let c=a+b;

    return c
}

let ans=arrowFunction()
console.log(ans)

// arrowFunction()

//this keywords is not use in arrowfunction.


let num1=30 , num2=20;

if(num1<num2){
    console.log(`${num1} is less then ${num2}`);
}else if(num1>num2){
    console.log(`${num1} is not less then ${num2}`);
}
else{
    console.log(`${num1} is equal to ${num2}`);
}



//let souppose you have one num as input you have to cheack if num is multiple of 3 then print "Fizz",if num is multiple of 5 print "Buzz",if num is multiple of both 3 and 5 print "Fizz Buzz"

num=30;
if(num%3==0 && num%5 !=0){
    console.log('Fizz');
}
else if (num%5==0 && num%3!=0){
    console.log('Buzz');
}
else if (num%3==0 && num%5==0){
    console.log("Fizz Buzz");
}

//For loop

// for(start ; condion ; inc/dec){
//     log
// }
let num3=10
for(let i=0;i<num3;i++){
    console.log(i,num3)
}



let arr=[1,2,3,4,5,6,7,8,9,10]

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

let str="Subhajit Mandal";

for (let i=0;i<str.length;i++){
    console.log(i,str[i])
}

for (let i=0;i<str.length;i++){
    console.log("a"+str[i],"b")
}