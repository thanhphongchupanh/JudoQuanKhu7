// footer.js
document.addEventListener("DOMContentLoaded", function() {
    const footerPlaceholder = document.getElementById("footer-placeholder");
    const footerRequest = new XMLHttpRequest();
    footerRequest.open("GET", "footer.html", true);
    footerRequest.onload = function() {
        if (footerRequest.status >= 200 && footerRequest.status < 400) {
            footerPlaceholder.innerHTML = footerRequest.responseText;
        } else {
            console.error("Failed to load footer");
        }
    };
    footerRequest.onerror = function() {
        console.error("Failed to load footer");
    };
    footerRequest.send();
});

