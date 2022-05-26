const UserForm = document.querySelector('#form')
const Userlabel = document.querySelector('#label')
const UserFullName = document.querySelector('#FullName')
const UserEmail = document.querySelector('#Email')
const UserProduct = document.querySelector('#Product')

function logEvent(event) {
    event.preventDefault()
    if( UserFullName.value.trim() && UserProduct.value.trim()) {
        const list = document.querySelector('.wrapper__list')
        const ListItem = document.createElement('li')
        ListItem.className = 'List__item'
        ItemName = document.createElement('h3')
        ItemName.className = 'List__fullName'
        ItemName.textContent = UserFullName.value
        ItemEmail = document.createElement('a')
        ItemEmail.className = 'List__email'
        ItemEmail.textContent = UserEmail.value
        Itemprod = document.createElement('h3')
        Itemprod.className = 'List__prod'
        Itemprod.textContent = UserProduct.value
        Iteminput = document.createElement('input')
        Iteminput.className = 'List__input'
        Iteminput.type = 'checkbox'
        Iteminput.checked = true
        ListItem.append(ItemName, ItemEmail, Itemprod, Iteminput)
        list.append(ListItem)
    }
    event.target.reset()
}
UserForm.addEventListener('submit', logEvent)


