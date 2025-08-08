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
// opacity section
      window.addEventListener("DOMContentLoaded", () => {
        document.body.classList.add("fade-in");
    });

    // Fade out before navigating to another page
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");

            // Skip for external links or # anchors
            if (href && !href.startsWith("http") && !href.startsWith("#")) {
                e.preventDefault();
                document.body.classList.remove("fade-in");
                setTimeout(() => {
                    window.location.href = href;
                }, 500); // matches CSS transition time
            }
        });
    });
    // end opacity section
});
