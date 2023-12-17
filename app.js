const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnx = document.querySelector('.toggler_btnx')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const toggleBtIcon = document.querySelector('.toggle_btn j')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const IsOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = IsOpen
    ? "fa-solid fa-bars"
    : "fa-solid fa-bars"
    
}

toggleBtnx.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const Isopen = dropDownMenu.classList.contains('open')

    toggleBtIcon.classList = Isopen
    ? "fa-solid fa-square-xmark"
    : "fa-solid fa-square-xmark"
    
}
