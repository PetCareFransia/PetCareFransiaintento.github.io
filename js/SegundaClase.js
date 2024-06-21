let visible = 0;
const modal = document.querySelector('.ventana');
const uno = document.querySelector("#uno");

uno.addEventListener("click", function(){
    modal.style.display = "block";
    modal.style.zIndex = 1000;
    visible = 1;
});
const dos = document.querySelector("#cerrar");
dos.addEventListener("click", function(){
    modal.style.display = "none";
});

const modal2 = document.querySelector('.tratamiento');
const tres = document.querySelector('#tres');
tres.addEventListener("click", function(){
    modal2.style.display = "block";
    modal2.style.zIndex = 1000;
    visible = 2;
});
const cerrar2 = document.querySelector('#cerrar2');
cerrar2.addEventListener("click", function(){
    modal2.style.display = "none";
});

const modal3 = document.querySelector('.consultas');
const cuatro = document.querySelector('#cuatro');
cuatro.addEventListener("click", function(){
 modal3.style.display = "block";
 modal3.style.zIndex = 1000;
 visible = 3;
});

const cerrar3 = document.querySelector('#cerrar3');
cerrar3.addEventListener("click", function(){
    modal3.style.display = "none";
});

const modal4 = document.querySelector('.atencion');
const cinco = document.querySelector('#cinco');
cinco.addEventListener("click", function(){
    modal4.style.display = "block";
    modal4.style.zIndex = 1000;
    visible = 4;
});

const cerrar4 = document.querySelector('#cerrar4')
cerrar4.addEventListener("click", function(){
    modal4.style.display = "none";
});

if (visible == 1) {
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
}






// const openModal = document.querySelector('.vacuna');
// const Closemodal = document.querySelector('.modal_close')

// openModal.addEventListener('click',(e)=>{e.preventDefault();
//     modal.classList.add('modal--show');
// });

// Closemodal.addEventListener('click',(e)=>{e.preventDefault();
//     modal.classList.remove('modal--show');
// });