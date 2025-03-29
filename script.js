function slide() {
    let button = document.getElementById("no");
    let maxWidth = window.innerWidth - button.clientWidth;
    let maxHeight = window.innerHeight - button.clientHeight;

    let randomX = Math.floor(Math.random() * maxWidth);
    let randomY = Math.floor(Math.random() * maxHeight);

    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}
