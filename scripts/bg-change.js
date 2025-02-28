function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  //   set opacity
  color += "25";
  return color;
}

document.getElementById("theme-btn").addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
});
