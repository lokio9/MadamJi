const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Being with you is a rollercoaster which I will forever love! I love you! ❤️ Now, WILL YOU BE MY VALENTINE BABY EVEN THO IM BROKIE? 👉👈 🙇🌸";
    gif.src = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmRydDQ4dTNpZm1uM2NleW4yNHdzOG02bGcyZnB6NmZ3dzdkbWk2cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fZ8PDNuwzIcKda2Iwo/giphy.gif"; // Cute yes GIF
    noBtn.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});
