const openModal = document.querySelector('.ver_mas');
const modal = document.querySelector('.modal');

const Closemodal = document.querySelector('.modal_close')

openModal.addEventListener('click',(e)=>{e.preventDefault();
    modal.classList.add('modal--show');
});

Closemodal.addEventListener('click',(e)=>{e.preventDefault();
    modal.classList.remove('modal--show');
});