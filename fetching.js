let options={
    method:"GET"
};

fetch("https://gorest.co.in/public-api/users",options)
.then(function(response)
{
    return response.json();
}).then(function(jsonData)
{
    console.log(jsonData)
});

