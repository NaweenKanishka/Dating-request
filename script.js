function slide() {
    let button = document.getElementById("no");
    let panel = document.querySelector(".panel");

    // Get panel dimensions
    let panelRect = panel.getBoundingClientRect();
    let buttonRect = button.getBoundingClientRect();

    // Calculate max position within panel
    let maxX = panelRect.width - buttonRect.width;
    let maxY = panelRect.height - buttonRect.height;

    // Generate random position inside panel
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);

    // Set button position relative to panel
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

// Handle touch event for mobile
document.getElementById("no").addEventListener("touchstart", function (event) {
    event.preventDefault(); // Prevent accidental clicks
    slide();
});
