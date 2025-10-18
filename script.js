const numbers = document.querySelector("#numeros");
const numberMid = document.querySelector("#meio");
const numberEnd = document.querySelector("#final")
const button = document.querySelector("button");


numbers.oninput = () =>{

    numbers.value = Number(numbers.value);
  
}

numberMid.oninput = () =>{

    numberMid.value = Number(numberMid.value);


}

numberEnd.oninput = () => {

    numberEnd.value = Number(numberEnd.value);


}


button.addEventListener("click",(event) => {

    
    event.preventDefault();
   
    if(numberMid.value > numberEnd.value){
       return alert("Número inicial de ser menor que número final!");
    }

    drawNumber(numbers.value, numberMid.value, numberEnd.value);
    drawNumber()

})

function drawNumber(quantity, start, end){

    let ListNumbers = [];

    
    for (let draw = 0;  ListNumbers.length < quantity ; draw++){

        let lucky = parseInt(Math.random() * (end - start) + start);
        ListNumbers.push(lucky);
        
    }



}

