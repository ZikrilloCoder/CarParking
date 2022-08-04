let sliders = document.querySelectorAll('.slider')
for (let slider of sliders) {
    slider.addEventListener('click', () => {
        delclass()
        slider.classList.add('active')
    })
}
function delclass() {
    for (let slider of sliders) {
        slider.classList.remove('active')
    }
}