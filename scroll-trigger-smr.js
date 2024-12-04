document.addEventListener("DOMContentLoaded", function() {
    function isElementInViewport(el, percentage = 0.30) {
        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const windowWidth = window.innerWidth || document.documentElement.clientWidth;

        const vertInView = (rect.top <= windowHeight * (1 - percentage)) && ((rect.top + rect.height) >= windowHeight * percentage);
        const horInView = (rect.left <= windowWidth * (1 - percentage)) && ((rect.left + rect.width) >= windowWidth * percentage);

        return (vertInView && horInView);
    }

    function onScroll() {
        document.querySelectorAll('[gsap-text-animation="small-trigger"]').forEach(function(triggerElement) {
            if (isElementInViewport(triggerElement, 0.30)) {
                triggerElement.querySelectorAll('[gsap-text-animation="small-animate"]').forEach(function(animateElement) {
                    if (!animateElement.classList.contains('slideup')) {
                        animateElement.classList.add('slideup');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger scroll event on page load to reveal elements already in view
});
