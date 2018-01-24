console.log(10+20);
for (let index = 0; index < 5; index++) {
    console.log(index);    
}
const c=500;
console.log(c);    

// annonimus function ES5
let f=function() {
    return "WellsFargo ES5";
}
console.log(f());    

// annonimus function ES6 - arrow function.
let m= () => "WellsFargo ES6";

let change= () => { 
    let d=document.getElementById("h");
    let v=d.getAttribute("reply");
    d.innerHTML=v;
 };

console.log(m());    