document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");

    let scrollPosition = 0;

    window.addEventListener("scroll", () => {
        let offset = window.scrollY;

        items.forEach((item, index) => {
            const itemOffset = item.offsetTop;
            const itemHeight = item.offsetHeight;

            // Calculate the scroll progress
            const progress = (offset - itemOffset + window.innerHeight) / (itemHeight + window.innerHeight);

            // Adjust the transform for smooth scroll effect
            if (progress > 0 && progress < 1) {
                item.style.transform = `translateY(${(progress - 1) * 30}px)`;
            }
        });
    });
});
