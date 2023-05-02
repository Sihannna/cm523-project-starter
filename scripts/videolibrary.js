const btns = document.querySelectorAll(".buttons button");
const videos = document.querySelectorAll(".video a");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", filterVideo);
}

function setActiveBtn(e) {
  btns.forEach((btn) => {
    btn.classList.remove("btn-clicked");
  });
  e.target.classList.add("btn-clicked");
}

function filterVideo(e) {
  setActiveBtn(e);
  const btnType = parseInt(e.target.dataset.btn);

  videos.forEach((video) => {
    const cardContent = video.closest(".cardcontent");

    if (cardContent) {
      cardContent.classList.remove("cardcontent-shrink");
      cardContent.classList.add("cardcontent-expand");
    }

    const videoTypes = video.dataset.video.split(",").map(Number);

    if (btnType !== 0 && !videoTypes.includes(btnType)) {
      if (cardContent) {
        cardContent.classList.remove("cardcontent-expand");
        cardContent.classList.add("cardcontent-shrink");
      }
    }
  });
}