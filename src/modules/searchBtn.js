const searchBtn = () => {
    console.log('TEST');
    const searchBtn = document.querySelector('.navbar-links__search');
    const searchLine = document.querySelector('.navbar-search');
    const closeBtn = document.querySelector('.navbar-search__close');
    const navbar = document.querySelector('.navbar');
    console.log(navbar);

    searchBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        if (searchLine.style.opacity == "" || searchLine.style.opacity == 0 ||searchLine.style.opacity == "0") {
            document.querySelector('.navbar-search__form-input').placeholder='Search ...';
            searchLine.style.opacity = "1";
            searchLine.style.right = "0";
            if (window.innerWidth <= 768) {
                navbar.style.height ="131px";
            }
        } else if (searchLine.style.opacity == "1") {
            //searchLine.style.opacity = "0";
            //searchLine.style.right = "-150%"; 
            document.querySelector('.navbar-search__form-input').placeholder='NOT YET REALIZED';
            //window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';  
        }
    });
    closeBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        searchLine.style.opacity = "0";
        searchLine.style.right = "-250%";  
        if (window.innerWidth <= 768) {
            setTimeout(()=>{
                navbar.style.height ="71px";
            }, 300);
        } else {
            navbar.style.height ="";    
        }
    });
    window.addEventListener('resize', ()=> {
        if (window.innerWidth >= 769) {
            navbar.style.height ="";     
        } else if(window.innerWidth <= 768) {
            if (searchLine.style.opacity == "1"){
                navbar.style.height ="131px";        
            }
        }
    });
};

export default searchBtn;