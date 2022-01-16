const line = document.querySelectorAll(".line")
const hamburger = document.querySelector(".hamburger")
const rwd = document.querySelector(".rwd-change")
const add = document.querySelector("#inf3")
const information = document.querySelector("#information")
const cancel = document.querySelector("#delete")
/*hamburger's hover*/
for(let i=0;i<3;i++){
    hamburger.addEventListener("mouseover",()=>{
        line[i].style.backgroundColor = "red"
    })
    hamburger.addEventListener("mouseout",()=>{
        line[i].style.backgroundColor = "white"
    })
    hamburger.addEventListener("click",()=>{
        rwd.classList.toggle("rwd-visible")
    })
}
add.addEventListener("click",()=>{
    var addPerson = document.createElement("li")
    var linkPerson = document.createElement("a")
    var personPic = document.createTextNode("person")
    document.body.appendChild(addPerson)
    information.appendChild(addPerson)
    addPerson.appendChild(linkPerson)
    linkPerson.appendChild(personPic)
    linkPerson.className = "material-icons"
})
cancel.addEventListener("click",()=>{
    
})