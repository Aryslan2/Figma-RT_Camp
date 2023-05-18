function switchMode() {
    let theme = document.getElementById("theme");
    let mode = document.getElementById("mode");
    let logodark = document.getElementById("logo-img");
    let viplogo = document.getElementById("vip-logo");
    let face = document.getElementById("facebook");
    let git = document.getElementById("github");
    let linkedin = document.getElementById("linkedin");
    let fly = document.getElementById("fly");
    let amaz = document.getElementById("amazon");
    let dis = document.getElementById("disney");

    if(theme.getAttribute("href") == "css/style.css") {
        theme.href = "css/dark-style.css";
        mode.innerHTML = "Light Mode";
        logodark.src="images/Header_logo/dark-logo_.svg";
        viplogo.src="images/VIP-Logo-1-dark.png";
        fly.src="images/footer-button-dark.png";
        face.src="images/facebook-dark.png";
        git.src="images/github-dark.png";
        linkedin.src="images/linkedin-dark.png"
        amaz.src = "images/amazon-dark.png";
        dis.src = "images/disneypngdark.png";
    } else {
        theme.href = "css/style.css";
        mode.innerHTML = "Dark Mode";
        logodark.src="images/Header_logo/def-logo.svg"
        viplogo.src="images/VIP-Logo 1.png"
        fly.src="images/footer-button.png";
        face.src="images/facebook.png";
        git.src="images/github.png";
        linkedin.src="images/linkedin.png"
        amaz.src = "images/amazon.png";
        dis.src = "images/disneypng.png";
    } 
}

