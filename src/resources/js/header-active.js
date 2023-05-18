document.querySelectorAll('.header__menu > ul > li > a').forEach((n, i, a) => {
    n.addEventListener('click', () => a.forEach(m => m.classList.toggle('is-active', m === n)));
});