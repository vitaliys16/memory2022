const language = () => {
    const lngBtn = document.querySelector('.navbar-language__link');
    const lngText = document.querySelector('.navbar-language__text');

    lngBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (lngText.textContent == 'En') {
            lngText.textContent = 'Ru';
            console.log('Изменен текст на ' + lngText.textContent);
        } else {
            lngText.textContent = 'En';
            console.log('Изменен текст на ' + lngText.textContent);
        }
    });
};

export default language;