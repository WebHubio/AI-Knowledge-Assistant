// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Demo button popup
document.querySelectorAll(".btn-primary").forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        alert(
            "AI Knowledge Assistant\n\nThis is a proof-of-concept prototype developed for the Elchai Group AI Research Assessment."
        );
    });
});