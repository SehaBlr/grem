let select = document.getElementById('select');
let block = document.querySelectorAll('.activity__item');
let lastIndex = 0; // После каждой смены опции, сохраняем сюда индекс предыдущего блока

select.addEventListener('change', function() {
  block[lastIndex].classList.remove('activity__item_active');
  // Чтобы сразу делать именно его невидимым при следующей смене 

  let index = select.selectedIndex; // Определить индекс выбранной опции
  block[index].classList.add('activity__item_active');
  var selection = select.options[select.selectedIndex].text;
  label = document.querySelector('label[for="select"]');
  label.textContent = selection;
  lastIndex = index; // Обновить сохраненный индекс.
});

