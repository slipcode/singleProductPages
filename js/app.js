const defultImg = document.querySelector('.container .gallary .defualt img');
const firstImg = document.querySelector('.container .gallary .mult-gall .one img');
const seconttImg = document.querySelector('.container .gallary .mult-gall .two img');
const thirdImg = document.querySelector('.container .gallary .mult-gall .three img');
const forthImg = document.querySelector('.container .gallary .mult-gall .four img');

const firstImgPath = "./img/product1/img-1.png";
const seconttImgPath = "./img/product1/img-2.png";
const thirdImgPath = "./img/product1/img-3.png";
const forthImgPath = "./img/product1/img-4.png";

firstImg.addEventListener("click", () => {
    defultImg.src = firstImgPath;

})
seconttImg.addEventListener("click", () => {
    defultImg.src = seconttImgPath;


})
thirdImg.addEventListener("click", () => {
    defultImg.src = thirdImgPath;

})
forthImg.addEventListener("click", () => {
    defultImg.src = forthImgPath;


})




