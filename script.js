const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question"); // tambahkan tanda "=" setelah "question"
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn"); // tambahkan tanda "=" setelah "yesBtn"
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Aaaaa, I like you too";
    gif.src = "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gif.webp";
});

noBtn.addEventListener("mouseover", () => {
    const noBtnRect = noBtn.getBoundingClientRect(); // tambahkan tanda "=" setelah "noBtnRect"
    const maxX = window.innerWidth - noBtnRect.width; // tambahkan tanda "-" antara "innerWidth" dan "noBtnRect.width"
    const maxY = window.innerHeight - noBtnRect.height; // tambahkan tanda "-" antara "innerHeight" dan "noBtnRect.height"

    const randomX = Math.floor(Math.random() * maxX); // ubah "maxx" menjadi "maxX"
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
