const addBtn = document.querySelector("#add")
// const removeBtn = document.querySelector("#remove")
const rel = document.querySelector("h2")

let flag = 0;
addBtn.addEventListener("click",(e)=>{
    if(flag === 0) {
        rel.innerHTML = "Friend"
        rel.style.color = "green"
        addBtn.innerHTML = "Remove"
        addBtn.setAttribute("id","remove")
        flag = 1
    }
    else{
        rel.innerHTML = "Someone Else"
        rel.style.color = "red"
        addBtn.innerHTML = "Add Friend"
        addBtn.removeAttribute("id","remove")
        flag = 0
    }
})

