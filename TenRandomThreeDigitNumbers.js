function randomNumber(){
    let array = [];
    for(let i=1;i<11;i++){
        let min = 100;
        let max = 999;
        let number1 = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push(number1);
    }
    return array;
    }
    let array = randomNumber();
    console.log("The ten random three digit numbers are : ")
    console.log(array);