const modal = () => {
    const loginBtn = document.querySelector('.navbar-links__login');

    loginBtn.addEventListener("click", (btn) => {
        btn.preventDefault();
        console.log('SUKA');
    });
    console.log(loginBtn);
};

export default modal;
