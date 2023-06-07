const data=[{
    id:1,
    Name:"praveen",
    age:21,
    qulification:"BCA",

},
{
    id:2,
    Name:"Murugan",
    age:21,
    qulification:"MBBS",

},
{
    id:3,
    Name:"raja kuru",
    age:21,
    qulification:"MBA",

}]
data.forEach(function(f){
   
    if(f.Name=="Murugan"){
        document.write("Murugan is back","<br>")
    }
    else{
        document.write("not a murugan","<br>")
    }
})



data.forEach(function(f){

    for(let key in f){
    if(key=="qulification"){
        if(f[key]=="MBA"){
        document.write(`this data is ${f.Name}`);
        }
    }

    }
})