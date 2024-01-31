// var courseGeeks = {
//     name: 'Geeks',
//     foundingDate: 2017,
//     address: {
//         street: 'Ibraimova 103',
//         number: null,
//     },
//     branches: undefined,
//     showInfo() {
//         console.log(`курсы geeks - ${courseGeeks.name}`)
//     },
//     showInfo2() {
//         function info() {
//             console.log(`курсы - ${this.name}`)
//         }
//     }
//
// }
// courseGeeks.showInfo()
// courseGeeks.showInfo2()


const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')


const createTodo = () => {
    if (input.value.trim() === '') {
        return alert('Введите данные!')
    }

    const div = document.createElement('div')
    div.setAttribute('class', 'block_text')

    const divButtons = document.createElement('button')
    divButtons.setAttribute('class', 'div_buttons')

    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'delete_button')

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit_button')

    editButton.innerHTML = 'edit'
    deleteButton.innerHTML = 'delete'

    text.innerHTML = input.value
    divButtons.append(editButton, deleteButton)
    div.append(text, divButtons)

    deleteButton.onclick = () => div.remove()
    text.addEventListener('click', () => text.classList.toggle('toggle'))

    todoList.prepend(div)
    input.value = ''

    const modal = document.getElementById("myModal");
    const modalOk = document.getElementById('modal-ok')

    modalOk.addEventListener('click', () => {
        const inputTwo = document.getElementById('input_newTodo').value
        if (!inputTwo.trim()) return alert('введите данные!')
        text.textContent = inputTwo
        modal.style.display = 'none'
    })
    editButton.onclick = function () {
        modal.style.display = "block";
    }

    const cancellation = document.getElementById("modal-cancellation");

    cancellation.onclick = function () {
        modal.style.display = "none";
    }


// если клик за пределами мд окна то она закроеться
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

createButton.onclick = () => createTodo()
window.onkeydown = (event) => {
    if (event.code === 'Enter') {
        createTodo()
    }
}

const plus = document.querySelector('#plus')
const numbers = document.querySelector('#numbers')
const minus = document.querySelector('#minus')

const counter = () => {
    const value = numbers.value
    if (value< 0){
        numbers.style.color = 'red'
    }else if (value > 0){
        numbers.style.color = 'green'
    }else{
        numbers.style.color = 'grey'
    }
}
plus.onclick =() => {
    numbers.value++
    counter()
}

minus.onclick =() => {
    numbers.value--
    counter()
}