const menu = () => {

const mobileBtn = document.querySelector('.navbar-btn');
const mobileMenu = document.querySelector('.navbar-sector-two');

mobileBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    if (mobileMenu.style.right == "100%" || mobileMenu.style.right == "") {
        mobileMenu.style.right = 0;
    } else {
        mobileMenu.style.right = "100%";    
    }
});

console.log(mobileBtn);

};

export default menu;
