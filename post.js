let options={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer 141dccaf09fe3db23fd460689a2f53f1151998c0a4d958d2ae432b0aad598ba5"
    },
    body:JSON.stringify({
        name:"meher",
        email:"meher34532@example.com",
        gender : "male",
        status : "active"
    })

};

fetch("https://gorest.co.in/public-api/users",options)
.then(function(response){
    return response.json();
}).then(function(jsonData){
    console.log(jsonData)
});