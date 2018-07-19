let square1 = document.getElementById('Square1');
let square3 = document.getElementById('Square3');
let square2 = document.getElementById('Square2');
let text2 = document.getElementById('Text2');
let text1 = document.getElementById('Text1');
let squareImg2 = document.getElementById('SquareImg2');
let squareImg1 = document.getElementById('SquareImg1');
square3.addEventListener('click', (e)=> {
    if(square3.style.display === 'block'){
        square3.style.display = 'none'
        text2.style.opacity = 1;
        squareImg2.style.opacity = 1;

    }else{
        square3.style.display = 'block'
    }

})

square2.addEventListener('click', (e)=> {
    if(square2.style.display === 'block'){
        square2.style.display = 'none'
        text1.style.opacity = 1;
        squareImg1.style.opacity = 1;
    }else{
        square2.style.display = 'block'
    }

})

square1.addEventListener('click', (e)=> {
    if(square1.style.display === 'block'){
        square1.style.display = 'none'
    }else{
        square1.style.display = 'block'
    }

})

let ball = document.getElementById('ball')
ball.addEventListener('click', () =>{
    window.location.reload()
})
