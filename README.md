### node.js-basics
- front end + back end = full stack
- client side + server side + database


### What is Node.js
- server environment, It not a programming language.
- runs on various platforms (Windows, Linux, Mac OS etc.)
- it's free(for learning or using.)


### Why learn Node.js
- easy to learn
- used for collecting form data.
- Node.js can add, delete, modify data in your database.
- it uses asynchronous programming. Which is different than PHP, ASP.

#### Environment setup
- Node.js software install in your computer
- Editor (VS Code or others)



#### Node version check
```
node -version
or,
node -v
```

### Node.js Modules
- Module is a set of functions. (linke as js libraries such as Math)
- 3 types of modules
1. Local Modules (own created modules)

2. Built in Modules (node.js own modules) - http, url, path, fs, os, events, stream, dns etc. [No need to install]. Built in Modules

3. External Modules (managed by npm)


## Local Module
- lesson1 => student.js file
```javascript
const getName = () =>{
    return 'Anisur Islam';
}
const getAge = () =>{
    return "24";
}

const cgpa = () =>{
    return '3.54'
}

exports.name = getName;
exports.getAge = getAge;
exports.getCGPA = cgpa;
```

- teacher.js file
```javascript
exports.getEducation = () =>{
    return 'CSE';
}

// exports.getEducation = getEducation;
```
- index.js file
```javascript
const s1 = require('./student');
const {getEducation} = require('./teacher');

console.log(s1.name());
console.log(s1.getAge());
console.log(s1.getCGPA());


console.log(getEducation());
```
----
## Built in Module
### fs module:
#### Fs means file system. fs module have many methods like as:

- writeFile() || writeFileSync()
- appendFile() || appendFileSync()
- readFile() || readFileSync()
- rename() || renameSync()
- unlink() || unlinkSync()
- exists() || existsSync()

```javascript
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



// for syncronous : 
// - use syncronous fs library like fs.writeFileSync, fs.readFileSync etc.
// - remove callback function
```
### os module:
#### OS module provides information about the computer's operating system.
```javascript
const os = require('os');
console.log(os);

console.log(os.userInfo());
console.log(os.homedir());
console.log(os.hostname());
console.log(totalmem());
console.log(freemem());
```
### path module:
#### The Path module provides a way of working with directories and file paths.
`__dirname and  __filename`
```javascript
console.log(__dirname);
console.log(__filename);
```
```javascript
// path module 
const path = require('path');
// console.log(path);

const extensionName = path.extname("index.html");
console.log(extensionName);

const joinName = path.join(__dirname + '/practice');
console.log(joinName);

const joinName2 = path.join(__dirname + '/../views');
console.log(joinName2);
```
### http module:
`To create http server`
#### For request to the server, there are some common methods:
- get()
- post()
- delete()
- put()
- head()

#### In response, we will get two things:
- status code
- data(head and body)

#### HTTP status code:
1. informational response(100-199)
2. successful response(200-299)
3. redirects(300-399)
4. client errors(400-499)
5. server errors(500-599)

- set (status code and data) on head
```javascript
const http = require("http");
const port = 3000;
const hostname = '127.0.0.1';

const ourServer = http.createServer((req,res)=> {
    res.writeHead(201,{'Content-Type':'text/html'});
    res.write('<h4>Hello, Hi<h4>');
    res.write('<h4>Hello2, Hi2<h4>');
    res.end();
});
ourServer.listen(port,hostname,()=> {
    console.log(`Our msg runs at http://${hostname}:${port}`);
})
```

## External Modules
#### package example:

- random-fruits-name
- nodemon
#### How to use external modules/ packages

- firstly, initialized the npm (npm init or npm init -y)

- then, install packages and read documentation

- package.json এর কাজ হচ্ছে সম্পূর্ণ প্রজেক্ট এর একটা সামারি রাখা। এই প্রজেক্ট টা যদি অন্য কোনো প্যাকেজ এর উপর নির্ভর করে, তবে তাকে package.js এ ডিপেন্ডেন্সি হিসেবে রাখবে।

```javascript
// random-fruits-name external packages
const getRandomFruitsName = require('random-fruits-name');
console.log(getRandomFruitsName('en'));
```
### Nodemon
#### How to install and run nodemon package
- npm install nodemon

- and also set "start": "nodemon index.js" in scripts file in package.json

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
```