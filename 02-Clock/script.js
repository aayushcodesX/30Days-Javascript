const secondHand = document.querySelector(".sec-hand")
const minsHand = document.querySelector(".mins-hand")
const hourHand = document.querySelector(".hour-hand")
function setDate(){
   const now = new Date()
   const seconds = now.getSeconds()
   
    const secondsDeg =  ((seconds / 60) * 360) + 90   
    secondHand.style.transform = `rotate(${secondsDeg}deg)`
    // mins
    const mins = now.getMinutes()
    const minsDeg =  ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDeg}deg)`
    // houts 
    const hours = now.getHours()
    console.log(hours)
    const hoursDeg = ((hours / 12) * 360) + ((mins/60)*30) + 90;
    console.log(hoursDeg)
     hourHand.style.transform = `rotate(${hoursDeg}deg)`
}
setInterval( setDate ,1000);
