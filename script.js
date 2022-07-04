const getAnswer = (index) => {
    const answers = ['1', '2', '3', '4', '5']
    return answers[index]
}
const cards = [
    {
        input: document.querySelector('#input1'),
        btn: document.querySelector('.btn1')
    },
    {
        input: document.querySelector('#input2'),
        btn: document.querySelector('.btn2')
    },
    {
        input: document.querySelector('#input3'),
        btn: document.querySelector('.btn3')
    },
    {
        input: document.querySelector('#input4'),
        btn: document.querySelector('.btn4')
    }
    ,
    {
        input: document.querySelector('#input5'),
        btn: document.querySelector('.btn5')
    },
]

let counter = 0

cards
    .sort(() => Math.random() - 0.5)
    .forEach((card, index) => {
        card.btn.addEventListener('click', handlerCheckAnswer.bind(card, index))
    })

function handlerCheckAnswer(index) {
    if (this.input.value === getAnswer(index)) {
        this.input.disabled = true
        this.btn.disabled = true
        counter++
        if (counter === 5) {
            alert('вы ответили всё правильно')
            window.location.href = ''
        }
    } else {
        this.input.value = ''
        alert('ответ неверныйб попробуй ещё')
    }
}
