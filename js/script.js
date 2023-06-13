// Функция для переключения активного слайда
function changeSlide() {
  const carouselItems = document.getElementsByClassName("carousel-item");
  const activeItem = document.querySelector(".carousel-item.active");

  // Находим индекс активного слайда
  let activeIndex = Array.from(carouselItems).indexOf(activeItem);

  // Удаляем класс 'active' у текущего слайда
  activeItem.classList.remove("active");

  // Вычисляем индекс следующего слайда
  let nextIndex = (activeIndex + 1) % carouselItems.length;

  // Добавляем класс 'active' к следующему слайду
  carouselItems[nextIndex].classList.add("active");
}

// Запускаем функцию changeSlide каждые 7 секунд
setInterval(changeSlide, 7000);
