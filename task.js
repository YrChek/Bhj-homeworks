const modal = document.getElementById('modal_main');
const modal2 = document.getElementById('modal_success');
modal.classList.add('modal_active');
const a = document.querySelector('.btn_danger');

function close() {
    this.closest('.modal').classList.remove('modal_active');
}

a.onclick = () => {
    modal2.classList.add('modal_active');
    modal.classList.remove('modal_active');
}

const w = document.querySelectorAll('.modal__close_times')
w.forEach((r) => {
    r.onclick = close;
})
