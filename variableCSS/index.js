document.querySelectorAll("input").forEach(element => element.addEventListener("change", updation));
document.querySelectorAll("input").forEach(element => element.addEventListener("mousemove", updation));

function updation() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
