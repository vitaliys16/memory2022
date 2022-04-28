const searchBtn = () => {
    console.log('TEST');
    const searchBtn = document.querySelector('.navbar-links__search');
    const searchLine = document.querySelector('.navbar-search');
    console.log(searchBtn);

    searchBtn.addEventListener("click", (e)=> {
        e.preventDefault();
        if (searchLine.style.opacity == "" || searchLine.style.opacity == 0 ||searchLine.style.opacity == "0") {
            searchLine.style.opacity = "1";
            searchLine.style.right = "0";
        } else if (searchLine.style.opacity == "1") {
            searchLine.style.opacity = "0";
            searchLine.style.right = "-150%";   

        }
    });
};

export default searchBtn;