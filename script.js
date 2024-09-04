
let button=document.getElementById("btn")
let color=document.querySelector(".color")
const arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
button.addEventListener("click",()=>{
    const hh=generatehex();
    document.body.style.backgroundColor=hh;
    color.textContent=hh;

})
const generatehex=()=>{
    // alert("button is  clicked")
    let hex="#";
    for(let i=0;i<6;i++){
        hex+=arr[getele()];

    }
    return hex;
    
    
}

const getele=()=>{
    return Math.floor(Math.random()*arr.length)
}

