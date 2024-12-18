const defultImg = document.querySelector('.container .gallary .defualt');
const firstImg = document.querySelector('.container .gallary .mult-gall .one');
const seconttImg = document.querySelector('.container .gallary .mult-gall .two');
const thirdImg = document.querySelector('.container .gallary .mult-gall .three');
const forthImg = document.querySelector('.container .gallary .mult-gall .four');

const firstImgPath = "url('../img/product1/img-1.png')";
const seconttImgPath = "url('../img/product1/img-2.png')";
const thirdImgPath = "url(../img/product1/img-3.png)";
const forthImgPath = "url('../img/product1/img-4.png')";

firstImg.addEventListener("click", () => {
    defultImg.style.background = firstImgPath;

})
seconttImg.addEventListener("click", () => {
    defultImg.style.background = seconttImgPath;


})
thirdImg.addEventListener("click", () => {
    defultImg.style.background = thirdImgPath;

})
forthImg.addEventListener("click", () => {
    defultImg.style.background = firstImgPath;


})




