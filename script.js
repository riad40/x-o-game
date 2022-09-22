// grab dom elements
const boxes1 = document.querySelectorAll('.box')
const winner = document.querySelector('#winner')
const result = document.querySelector('#result')
const reset = document.querySelector('#rst-btn')
const xScore = document.querySelector('#x-score')
const oScore = document.querySelector('#o-score')
// variables
let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
let boxes = [...boxes1]
let counter = 0
let xo = ''
let xscore = +localStorage.getItem("x-score") || 0
let oscore = +localStorage.getItem("o-score") || 0
// make the app logic
boxes.forEach((box) => {
    box.classList.add('xo')
    if(localStorage.getItem('game') !== null) {
        if(box.textContent == '') {
            let dataGame = localStorage.getItem('game').split(',')
            box.textContent = dataGame[boxes.indexOf(box)]
            if(box.textContent != 'x' && box.textContent != 'o') {
                box.textContent = ''
            }
        }
    } else if(localStorage.getItem('x-score') !== null || localStorage.getItem('o-score')) {
        xScore.textContent = localStorage.getItem('x-score')
        oScore.textContent = localStorage.getItem('o-score')
    }
    box.addEventListener('click', e => {
        counter++
        if(counter%2 == 0) {
            box.textContent = 'o'
            xo = boxes.indexOf(box)
            data[xo] = box.textContent
            // localStorage.setItem('game', data)
        } else {
            box.textContent = 'x'
            xo = boxes.indexOf(box)
            data[xo] = box.textContent
            // localStorage.setItem('game', data)
        }
        win()
    }, {once : true})     
})
// get the winner
const win = () => {
    let f = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    f.forEach((w) => {
        if(data[w[0]] == data[w[1]] && data[w[0]] == data[w[2]]){
            winner.textContent = 'player ' + data[w[0]]
            result.classList.remove('d-none')
            console.log(data[w[0]])
            if(data[w[0]] == 'x') {
                localStorage.setItem('x-score', xscore+1)
                localStorage.setItem('o-score', oscore)
            } else {
                localStorage.setItem('o-score', oscore+1)
                localStorage.setItem('x-score', xscore)
            }
        }
    })
}
// Reset game
reset.addEventListener('click', () => {
    data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    dataGame = []
    localStorage.clear()
    location.reload()
})