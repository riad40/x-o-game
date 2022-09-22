// grab dom elements
const box1 = document.querySelector('#box-1')
const box2 = document.querySelector('#box-2')
const box3 = document.querySelector('#box-3')
const box4 = document.querySelector('#box-4')
const box5 = document.querySelector('#box-5')
const box6 = document.querySelector('#box-6')
const box7 = document.querySelector('#box-7')
const box8 = document.querySelector('#box-8')
const box9 = document.querySelector('#box-9')
const winner = document.querySelector('#winner')
const result = document.querySelector('#result')
// variables
let data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
let counter = 0
let x = ''
let o = ''
// make the app logic
boxes.forEach((box) => {
    box.addEventListener('click', e => {
        box.classList.add('xo')
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
        if((data.includes('x', 3) && data.includes('o', 2)) || data.includes('o', 3) && data.includes('x', 2)) {
            win()
        }
        console.log(data)
    }, {once : true})
})
// get the winner
const win = () => {
    let f = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    f.forEach((w) => {
        if(data[w[0]] == data[w[1]] && data[w[0]] == data[w[2]]){
            winner.textContent = 'player ' + data[0]
            resultShow()            
        }
    })
}
// show the result 
const resultShow = () => {
    result.classList.remove('d-none')
}
// localStorage.clear()