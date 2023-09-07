// ? text animation code sart
let text = ["TECH उत्सव 2023", "Apollo Institute of Engineering and Technology", "Register Now!"];
let x = 0;
let array = 0;
let objtext = document.getElementById("text_animation");

function animation() {
    console.log(array);
    if (x < text[array].length) {

        objtext.innerHTML += text[array].charAt(x);
        x++;
        setTimeout(animation, 150);
    }
    else {
        if (array < text.length - 1) { //when array change
            x = 0;
            array++;
            objtext.innerHTML = "";
            setTimeout(animation, 600);
        }
        else { //when array is complete
            x = 0;
            array = 0;
            objtext.innerHTML = "";
            setTimeout(animation, 600);
        }
    }
}
animation();
// ? text animation code end