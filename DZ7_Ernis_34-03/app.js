const all_text = document.querySelectorAll('.text')
all_text.forEach(button=> {
    const buntton = button.querySelector('.show')
    const openAnswer = button.querySelector('.answer')
    buntton.onclick = () => {
        openAnswer.classList.toggle('show_answer')
        const examination = openAnswer.classList.contains('show_answer')
        buntton.innerHTML = examination?'скрыть ответь': 'показать ответь'
    }
})