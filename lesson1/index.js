const s1 = require('./student');
const {getEducation} = require('./teacher');

console.log(s1.name());
console.log(s1.getAge());
console.log(s1.getCGPA());


console.log(getEducation());