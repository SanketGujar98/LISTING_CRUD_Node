

const param=new URLSearchParams(window.location.search)
const id=param.get('id');

fetch(`http://localhost:8989/students/${id}`)
.then(res=>res.json())
.then(res=>{
    console.log(res);
    document.getElementById("name").value=res.name,
    document.getElementById("age").value=res.age,
    document.getElementById("course").value=res.course
})



function updateStu()
{
    let names=document.getElementById("name").value;
let age=document.getElementById("age").value;
let course=document.getElementById("course").value;

data={
    "_id":id,
    "name":names,
    "age":age,
    "course":course
}
console.log(data);

    fetch("http://localhost:8989/students",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then((res)=>{
        console.log(res);
        window.location.href='index.html'
    })

}