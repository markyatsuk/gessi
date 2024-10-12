function changeSlide() {
  const carouselItems = document.getElementsByClassName("carousel-item");
  const activeItem = document.querySelector(".carousel-item.active");

  let activeIndex = Array.from(carouselItems).indexOf(activeItem);

  window.requestAnimationFrame(() => {
    activeItem.classList.remove("active");

    let nextIndex = (activeIndex + 1) % carouselItems.length;

    carouselItems[nextIndex].classList.add("active");
  });
}
setInterval(changeSlide, 5000);
