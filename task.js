const modal = document.getElementById('modal_main')
const modal2 = document.getElementById('modal_success')
modal.classList.add('modal_active')

const close = document.querySelectorAll('.modal__close_times')
const closeMain = close[0];
const closeSuccess = close[1]

closeMain.onclick = () => {
    modal.classList.remove('modal_active')
}
closeSuccess.onclick = () => {
    // modal.classList.remove('modal_active')
    modal2.classList.remove('modal_active')
}

const a = document.querySelector('.btn_danger')

a.onclick = () => {
    modal2.classList.add('modal_active')
    modal.classList.remove('modal_active')
}
