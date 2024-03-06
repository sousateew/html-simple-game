function onButtonClick(element){
    var mainElement = document.getElementsByTagName("main")[0];
    mainElement.style.transition = "all 1s";
    mainElement.style.opacity = 0;

    element.innerHTML = `<div class="custom-loader"></div>`

    setTimeout(() => {
        window.location.href = "levels/1.html";
    }, 1000);
}