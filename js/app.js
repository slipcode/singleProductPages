const defultImg = document.querySelector('.container .gallary .defualt');
const firstImg = document.querySelector('.container .gallary .mult-gall .one');
const seconttImg = document.querySelector('.container .gallary .mult-gall .two');
const thirdImg = document.querySelector('.container .gallary .mult-gall .three');
const forthImg = document.querySelector('.container .gallary .mult-gall .four');

firstImg.addEventListener("click", () => {
    defultImg.style.background = "url('../img/product1/img-1.png')";

})
seconttImg.addEventListener("click", () => {
    defultImg.style.background = "url('../img/product1/img-2.png')";


})
thirdImg.addEventListener("click", () => {
    defultImg.style.background = "url(../img/product1/img-3.png)";

})
forthImg.addEventListener("click", () => {
    defultImg.style.background = "url('../img/product1/img-4.png')";


})




