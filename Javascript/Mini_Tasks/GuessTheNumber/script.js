input = document.getElementById("number");
res = document.getElementById("result");
btn = document.getElementById("button");
btn1 = document.getElementById("start");

randomNumber = Math.floor(Math.random() * 100);

btn.onclick = function () {
        const guessedNumber = Number(input.value); 

        if (guessedNumber === randomNumber) {
            res.innerHTML = "You got it! Congrats 🎉";
        } else if (guessedNumber < randomNumber) {
            res.innerHTML = "Too Low!";
        } else {
            res.innerHTML = "Too High!";
        }
    };

btn1.onclick = function() {
    randomNumber = Math.floor(Math.random() * 100); 
    input.value = "";      
    res.innerHTML = "Start The Game!";    
} 