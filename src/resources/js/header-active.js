document.querySelector('.header__menu ul li a').addEventListener('click', function ({ target: t }) {
    if (this !== t) {
        [...this.children].forEach(n => n.classList.toggle('is-active', n === t));
    }
});