import "./scss/styles.scss";

// variables


const hero = document.querySelectorAll(".footer__hero-content")
const modal = document.querySelector(".modal")
const close = document.querySelector(".modal__icon")

// listeners
hero.forEach( item => {
    item.addEventListener("click",openModal )
})

close.addEventListener('click', closeModal);

//functions
function openModal () {
    modal.classList.remove('hidden')
    modal.classList.add('visibility')
}

function closeModal (){
    modal.classList.remove('visibility')
    modal.classList.add('hidden')

    
}




