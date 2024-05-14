function scrollToDiv(divClass) {
    const element = document.querySelector(divClass);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}