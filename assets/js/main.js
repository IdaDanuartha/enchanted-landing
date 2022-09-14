// Accordion script
const accordionItems = document.querySelectorAll('.accordion-item')

accordionItems.forEach((item, index) => {
    item.onclick = () => {
        document.querySelector(`.accordion-item .accordion-button .arrow-down${index + 1}`).classList.toggle('rotate')
    }
})