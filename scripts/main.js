let myHeading = document.querySelector('h1')
myHeading.textContent = 'hello world!'

// 변수 
// 변수에 자료형을 자유롭게 넣을 수 있다.

// 변수 선언
let myVarible
// 변수 사용할 땐 let 안쓴다
myVarible = 'hello'
// 크롬의 console 창에 출력
console.log(myVarible) 

// 변수 선언
const myVarible2 = 'abc'
// const로 선언한 변수는 저장된 내용을 변경하려 하면 에러가 난다. let 은 변경 가능
// myVarible2 = 'def' : 에러
console.log(myVarible2)

// let myVarible 이런 식으로 위에 선언된 것을 또 선언하려하면 안된다.


// object 
let myObject = {
    name : 'bob',
    age : 10,
}

console.log(myObject)
// console.log(myObject.age) 와 같이 안에 있는 것들에 접근한다.
myObject.age = 20
console.log(myObject.age)

// const 로 만들었지만, 내부에 있는 것들을 수정하는것은 가능하다.
// 클래스 자체를 재 할당하는 것이 아닌 내부의 것을 바꾸는 것이기 때문
const myObject2 = {
    name: 'sam',
    age: 100,
}

console.log(myObject2.age)
myObject2.age = 50
console.log(myObject2.age)


const myObject3 = new Object()
myObject3.age = 10
myObject3.name = 'kim'

console.log(myObject3)


// 조건문
// let iceCream = 'chocolate'
// if (iceCream === 'chocolate'){
//     alert('i love chocolate')
// } else {
//     alert('plz chocolate')
// }

// 반복문
console.log('while')
let i = 0
while (i < 5) {
    console.log(i)
    // i 1씩 증가
    i++
}

// for
console.log('for')
for (let i = 0; i<5 ; i++ ){
    console.log(i)
}


let myArray = [1, 2, 3, 4, 5]
// for in
console.log('for in')
for (const item in myArray){
    console.log(item)
}

// for of : for in과 결과에 차이, for in은 index 값, for of는 값 반환
console.log('for of')
for (const item of myArray){
    console.log(item)
}


// 파이썬과 유사한 반복문
// forEach
// 인자를 받는다(함수)
console.log('forEach')
myArray.forEach( function (item, index, array){
    console.log(item, index, array)
})


// 함수
// function 키워드
function multiply(num1, num2){
    let result = num1 * num2
    return result
}

console.log(multiply(2,5))

// 함수 표현식
let multiply2 = function(num1, num2) {
    let result = num1 * num2
    return result
}

console.log(multiply2(4,5))


// 화살표 함수
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multiply3(6,7))


// 화살표 함수의 생략버전
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(2,4))

// 화살표 함수의 생략버전 2번째
// num1 과 같이 인자를 하나만 받을때 () 생략 가능
let multiply5 = num1 => num1 * 5
console.log(multiply5(3))


// 이벤트 
// document : 우리가 보고 있는 문서
// document.querySelector('html').onclick = () => {
//     alert('click!!!')
// }


// addEventListener() 메소드
let myH1 = document.querySelector('h1')
// 콜백함수 : myH1.addEventListener('click', '콜백함수')
// myH1.addEventListener('click', function(){
//     alert('here is h1 tag')
// })


let myImage = document.querySelector('img')

myImage.addEventListener('click', () => {
    let mySrc = myImage.getAttribute('src')

    if (mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/a.jpg')
    } else {
        myImage.setAttribute('src', 'images/fireforx-icon.png')
    }
})


// javascript의 비동기성
// first -> 1초 후 hello -> last 가 아니라 first, last 출력 -> 1초 후 hello
// 순차적으로 완료후 다음 코드로 넘어가는게 아니라 비동기적으로 진행
// console.log('first')
// setTimeout(function(){
//     console.log('hello')
// }, 1000)
// console.log('last')


const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch : 파이썬에서 res = requests.get(URL) 와 같은 기능이다. 
// fetch를 처리하고 나서 밑에 .json을 처리할거라고 생각하지만 그렇지 않다. 에러가 난다.
// 비동기성으로 인해 일어나는 일이다
// let response = fetch(URL)
// console.log(response)
// let result = response.json()
// console.log(result)

// 첫번째 버전
function fetchAndPrint () {
    fetch(URL)
        // fetch가 완료 되고 진행하라는 의미
        .then(response => response.json())
        .then(json => console.log(json))
}
fetchAndPrint()


// 두번째 버전
async function fetchAndPrint2 () {
    // await : 기다리라는 뜻
    let response = await fetch(URL)
    let result = await response.json()
    console.log(result)
}
fetchAndPrint2()


// DOM 조작
// DOM? document라고 생각하면 된다. 문서를 객체로 보겠다.
const liElements = document.querySelectorAll('li')

// console.log(liElements)

// for li in liElements:
liElements.forEach((li)=>{
    // console.log(li)
    li.style.color = 'red'
    li.style.backgroundColor = 'yellow'
})

liElements.forEach(li => {
    li.addEventListener('click', (event)=>{
        // console.log('hi')
        console.log(event.target)

        if (li.textContent === 'thinkers') {
            event.target.style.color = 'blue'
        }
    })
})