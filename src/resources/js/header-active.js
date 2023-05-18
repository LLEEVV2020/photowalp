document.querySelector('.header__menu').addEventListener('click', function ({ target: t }) {
    if (this !== t) {
        [...this.children].forEach(n => n.classList.toggle('is-active', n === t));
    }
});