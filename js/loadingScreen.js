var phrases = ["Скупаем всё золото", "Изучаем местную флору и фауну", "Воруем коров", "Взламываем пентагон", "Майним биткойны", "Ищем сайт NASA", "Звоним Илону Маску", "Обновляемся до Windows 10", "Фотографируем планеты", "Открываем порталы в другие измерения", "Ищем признаки разумной жизни", "Меняем провайдера", "Посылаем сигналы в космос", "Выискиваем баги", "Заключаем сделку с дьяволом", "Береём пробы воды и почвы", "Ходим за покупками", "Устанавливаем Амиго", "Как это теперь удалить"];

var count = 0;

var interval = setInterval(function () {
  $('#phrases').delay(1000).animate({
    opacity: 0
  }, 300, 'linear', function () {
    $(this).text(phrases[count]).animate({
      opacity: 1
    }, 300, 'linear')
  });
  count === 19 ? count = 0 && clearInterval(interval) : count += 1;
}, 5000)