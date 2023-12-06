const snowContainer = document.querySelector('.containerSnow')

snowContainer.innerHTML = '';

function randomNumber(start, end){
    return Math.floor(Math.random() * ( end - start + 1 ) + start)
}

function snowGenerator(){
    Array.from({length: 50}).forEach((_, i) =>{
        const num = randomNumber(11,26);
        snowContainer.innerHTML += `<span style='--i:${num}' ></span>`
    })
}

snowGenerator()


const countDown = document.getElementsByClassName('timer')
countDown[0].innerHTML = '55'


function validate(char){
    return char < 10 ? '0' + char.toString() : char.toString()
}

function calcCountDown(){
    setInterval(()=>{
        const timeNow = new Date();
        const finalTime = new Date('2023-12-25')
        console.log(finalTime);
        const difference = finalTime - timeNow

        const seconds = (difference / 1000) % 60
        const minutes = (difference / 1000 / 60) % 60
        const hours = (difference / 1000 / 60 / 60 ) % 24 
        const days = (difference / 1000 / 60 / 60 / 24)
 
        countDown[3].innerHTML = validate(Math.floor(seconds))
        countDown[2].innerHTML = validate(Math.floor(minutes))
        countDown[1].innerHTML = validate(Math.floor(hours))
        countDown[0].innerHTML = validate(Math.floor(days))
    },500)
}

calcCountDown()
