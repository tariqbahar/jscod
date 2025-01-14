let score = 0;
let box = document.getElementById("box");
let scoreDisplay = document.getElementById("score");

box.addEventListener("click", function() {
    // د سکور زیاتول
    score++;
    scoreDisplay.innerHTML = `سکورس: ${score}`;
    
    // د باکس موقعیت بدلول
    let newX = Math.random() * (window.innerWidth - 100); // د پردې پراخه
    let newY = Math.random() * (window.innerHeight - 100); // د پردې لوړوالی
    
    // نوي موقعیت ته باکس حرکتول
    box.style.left = newX + "px";
    box.style.top = newY + "px";
});

// لومړی موقعیت ورکول
box.style.position = "absolute";
