document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.querySelector("[data-backtotop]");
    var scrollTopValue = parseInt(backToTopButton.getAttribute("data-scrolltop"));
    var circleCss = backToTopButton.querySelector(".circle-css");

    function handleScroll() {
        if (window.scrollY > scrollTopValue) {
            backToTopButton.classList.add("is--show");
        } else {
            backToTopButton.classList.remove("is--show");
        }

        if (circleCss) {
            var scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            var degrees = 360 * scrollPercentage;
            circleCss.style.setProperty("--cricle-degrees", degrees + "deg");
        }
    }

    window.addEventListener("scroll", handleScroll);

    backToTopButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    handleScroll();
});