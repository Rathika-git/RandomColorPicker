//Live class task for Generating a Random Color Picker

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function greet() {
    alert("Thank you for using the Random Color Picker!");
}

alert("Welcome to Random Color Picker");

let userOption = confirm("Generate a Random Color?");
if (userOption) {
    const randomColor = getRandomColor();
    alert(`Your selected Random Color is: ${randomColor}`);
    greet();
} else {
    greet();
}



/*Live class task for Generating a Random Color Picker used DOM concepts

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    alert(`Hey Your selected Random Color is: ${color}`);
    return color;
}

function acceptColor() {
    const randomColor = getRandomColor();
    const textColor = document.getElementById("textColor");
    textColor.style.color = randomColor;
}

function greet() 
{
    alert("Thank you for using the Random Color Picker!");
}
alert("Welcome to Random Color Picker");

let userOption = confirm("Generate a Random Color?");
userOption?acceptColor():greet();*/



