const fs = require('fs');
console.log(fs);

fs.writeFile('demo1.txt','My name is Farhana Binte Hasan.',(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('successful') ;
    }
}) 



fs.appendFile("demo1.txt", "I am a student.",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log('successful') ;
    }
}) 


 fs.readFile("demo1.txt", "utf-8", (error,data) => {  //utf-8 using for stop buffering
    if(error){ 
        console.log(error);
    }
    else{
        console.log(data) ;
    }
}) 


fs.rename("demo1.txt", "demo2.txt", (error) => {  //rename file
    if(error){ 
        console.log(error);
    }
    else{
        console.log("successful") ;
    }
}) 


fs.unlink("demo2.txt", (error) => {  //using for delete file
    if(error){ 
        console.log(error);
    }
    else{
        console.log("successful") ;
    }
})


fs.exists("demo2.txt", (result)=> {     
    if(result){
        console.log("file found");
    }
    else {
        console.log("file is not found");
    }
})
