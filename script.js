// grab dom elements
const boxes1 = document.querySelectorAll('.box')
const winner = document.querySelector('#winner')
const result = document.querySelector('#result')
// variables
let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
let boxes = [...boxes1]
let counter = 0
let x = ''
let o = ''
// make the app logic
boxes.forEach((box) => {
    box.classList.add('xo')
    if(box.textContent == '') {
        if(localStorage.getItem("game") !== null) {
            let dataGame = localStorage.getItem('game').split(',')
            box.textContent = dataGame[boxes.indexOf(box)]
            if(box.textContent != 'x' && box.textContent != 'o') {
                box.textContent = ''
            }
        }
    }
    box.addEventListener('click', e => {
        counter++
        if(counter%2 == 0) {
            box.textContent = 'o'
            o = boxes.indexOf(box)
            data[o] = box.textContent
        } else {
            box.textContent = 'x'
            o = boxes.indexOf(box)
            data[o] = box.textContent
        }
        if((data.includes('x', 3) && data.includes('o', 2)) || (data.includes('o', 3) && data.includes('x', 2))) {
            win()
        }
        localStorage.setItem('game', data)
    }, {once : true})     
})
// get the winner
const win = () => {
    let f = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    f.forEach((w) => {
        if(data[w[0]] == data[w[1]] && data[w[0]] == data[w[2]]){
            winner.textContent = 'player ' + data[w[0]]
            result.classList.remove('d-none')
            localStorage.clear()    
        }
    })
}