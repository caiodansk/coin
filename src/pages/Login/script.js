// configurando posição do separator
document.getElementById("buttonPosition").addEventListener("click", function(){
    let separator = document.querySelector(".separator")
    separator.style.animation = 'left 1s'
    setTimeout(() => {
        separator.classList.add("left")
    }, 1000);
})

document.getElementById("buttonPositionUp").addEventListener("click", function(){
    let separator = document.querySelector(".separator")
    separator.style.animation = 'right 1s'
    setTimeout(() => {
        separator.classList.remove("left")
    }, 1000);
})

