document.addEventListener("DOMContentLoaded", () => {
  const flowerCount = 40;
  for (let i = 0; i < flowerCount; i++) {
    const flower = document.createElement("div");
    flower.className = "petal";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";
    flower.style.opacity = Math.random();
    document.body.appendChild(flower);
  }
});