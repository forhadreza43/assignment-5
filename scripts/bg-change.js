function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  // set opacity
  // color += "30";
  return color;
}

document.getElementById("theme-btn").addEventListener("click", (event) => {
  let randomColor = getRandomColor();
  // document.body.style.backgroundColor = randomColor;
  document.querySelectorAll(".bg-blueExtraLight").forEach((element) => {
    if (element.tagName === "BODY") {
      element.style.backgroundColor = randomColor.concat("35");
    } else {
      element.style.backgroundColor = randomColor.concat("10");
    }
  });
});
