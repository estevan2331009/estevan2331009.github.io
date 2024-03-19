let notescontain =document.querySelector(".notescontain");
let create =document.querySelector(".btn");
let notes = document.querySelectorAll(".input");

function shownotes(){
    notescontain.innerHTML = localStorage.getItem("notes");

}
shownotes();
function updatelocalstorage(){
    localStorage.setItem("notes",notescontain.innerHTML);
}
create.addEventListener("click",()=>{
    let input= document.createElement("p");
    let img = document.createElement("img");
    input.className = "input";
    input.setAttribute("contenteditable","true");
    img.src="delete.png";
    notescontain.appendChild(input).appendChild(img);
})
notescontain.addEventListener ("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatelocalstorage();
    }
    else if (e.target.tagName==="P"){
        notes=document.querySelectorAll(".input");
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updatelocalstorage();
            }
        })
    }
})
document.addEventListener("keydown",event=>{
    if(event.key === "Enter"){
        document.execCommand("insertlinebreak");
        event.preventDefault();

    }
})