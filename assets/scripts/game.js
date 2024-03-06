const avatar = {
    position: [0, 0],

    moveRight: function(steps){
        var steps = (steps || 1) * 25
        var avatarElement = document.getElementById("avatar");

        this.position[0] = this.position[0] + steps;

        avatarElement.style.transition = "all 1s";
        avatarElement.style.left = this.position[0] + "px";
        return true;
    }
}

function compileCode() {
    var jsCode = document.getElementById("jsCode");

    // console.clear();
    console.log("Compilando código fornecido...");
    
    try {
        var result = eval(jsCode.value);
        $("#button").notify("Resultado: " + result, "success");
    } catch(error) {
        $("#button").notify(error, "error");
    }
};

function checkAvatarInPosition(x){
    var avatarElement = document.getElementById("avatar");
    var avatarPosition = (avatarElement.style.left).split("px")[0];
    
    var distance = (avatarPosition - x);
    
    return (distance < 50 && distance > -50);
}

// let count = 0;
// while (count < 5){
//     console.log(count);
//     avatar.moveRight()

//     count = count + 1;
// }

avatar.moveRight(0.01);

function moveRight(steps){
    return avatar.moveRight(steps);
}