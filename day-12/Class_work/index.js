let form = document.getElementById("userFrom");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(e)
    let fullNane = document.getElementById("name"),value;
    let email=document.getElementById("email").value;
    let number=document.getElementById("number").value;
    let pasword=document.getElementById("pasword").value;
    let confrompasword=document.getElementById("conformpasword").value;

    console.log(fullNane,email,number,pasword,confrompasword);

    let obj={
        fullNane,email,number,pasword,confrompasword
    }

    

    if(pasword !== confrompasword){
        return alert("Password do not match")
    }

    let tr= document.createElement("tr")

    let td1 = document.createElement("td")
    td1.innerText=obj.fullNane;

    let td2= document.createElement("td")
    td2.innerText=obj.email;

    let td3= document.createElement("td")
    td2.innerText=obj.number;

    let td4= document.createElement("td")
    td2.innerText=obj.pasword;

    let td5= document.createElement("td")
    td2.innerText=obj.confrompasword;

    tr.append(td1,td2,td3,td4,td5);

    document.getElementById("tbody").append(tr);
})