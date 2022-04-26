const modal = () => {
    const loginBtn = document.querySelector('.navbar-links__login');
    const modal = document.querySelector('.login');
    const modalWindow = document.querySelector('.login-modal');
    const modalClose = document.querySelector('.login-modal__close');

    loginBtn.addEventListener("click", (btn) => {
        btn.preventDefault();
        modal.style.display = 'block';
    });

    modal.addEventListener('click', (e) => { //при клике мимо модального окна само окно должно закрываться
        if (!e.target.closest('.login-modal') || e.target.closest('.login-modal__close')) {
            modal.style.display = 'none';  
            modal.style = '';  
        }
    });
};

export default modal;
