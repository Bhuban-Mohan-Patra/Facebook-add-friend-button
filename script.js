const addBtn = document.querySelector("#add")
const removeBtn = document.querySelector("#remove")
const rel = document.querySelector("h2")

addBtn.addEventListener("click",(e)=>{
    // const msg = document.createTextNode("Friend")
    rel.innerHTML = "Friend"
    rel.style.color = "green"
})