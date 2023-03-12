let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+375 (99) 999-99-99")
im.mask(phone);

const validator = new JustValidate('#form__order');

validator

  .addField('#input__phone', [

    {
      rule: 'required',
      errorMessage: 'Введите данные',
      errorFieldCssClass: ['invalid'],
    },
  ])
  .addField('#input__name', [
    {
      rule: 'required',
      errorMessage: 'Введите данные',

    },
  ])

  document.querySelectorAll(".clear")
  .forEach(function (elem) {
    elem.onclick = function (e) {
      let selector = this.dataset.clearSelector;
      document.querySelectorAll(selector)
      .forEach(function (item) {
        item.value = "";
      });
    };
  });

