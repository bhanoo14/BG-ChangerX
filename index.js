const buttons = document.getElementsByClassName('mybutton')
const body = document.querySelector('body')

myData = Array.from(buttons);

myData.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.id === "blue"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "green"){
            body.style.backgroundColor = e.target.id
        }
    })
});