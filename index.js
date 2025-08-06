document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.querySelector(".sidebar");
    const hamburger = document.querySelector(".hamburger");
    const barsIcon = document.querySelector(".fa-bars");
    const crossIcon = document.querySelector(".fa-times"); // not fa-remove


    // Hide cross icon initially
    crossIcon.style.display = "none";

    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("sidebarGo");

        // Toggle icons
        if (sidebar.classList.contains("sidebarGo")) {
            barsIcon.style.display = "inline";
            crossIcon.style.display = "none";
        } else {
            barsIcon.style.display = "none";
            crossIcon.style.display = "inline";
        }
    });
});
