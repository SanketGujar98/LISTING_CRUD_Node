

fetch("http://localhost:8989/students",{
    method:"GET"
})
.then(res=>res.json())
.then(res=>{
     
    for(let i=0;i<res.length;i++)
    {
        document.getElementById("body").innerHTML+=`<tr>
                                                    <td>${i+1}</td>
                                                    <td>${res[i]['name']}</td>
                                                    <td>${res[i]['age']}</td>
                                                    <td>${res[i]['course']}</td>
                                                    <td>
                                                    <button class="btn  btn-primary"><a href="update.html?id=${res[i]['_id']}">Update</a></button>
                                                    <Button class="btn  btn-danger" onclick="deleteStu('${res[i]._id}') ">Delete</Button>
                                                   </td>
                                                    </tr>`
    }
})



function deleteStu(id)
{
   fetch(`http://localhost:8989/students/${id}`,{
    method:"DELETE"
   }).then(res=>res.json())
   .then(res=>{
    console.log(res);
    window.location.reload();
   })

}