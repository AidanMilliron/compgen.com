document.getElementById("button").onclick = function(){
    inpOne = document.getElementById("inp1").value;
    inpTwo = document.getElementById("inp2").value;
    let perc = Math.floor(Math.random() * 100);
    document.getElementById("inp1").value = ""
    document.getElementById("inp2").value = ""
    if (inpOne.toUpperCase() === "ALLURA" && inpTwo.toUpperCase() === "DAVID"){
        document.getElementById("result").innerHTML = "Allura and David are 0% compatible";
    }
    else if (inpTwo.toUpperCase() === "ALLURA" && inpOne.toUpperCase() === "DAVID"){
        document.getElementById("result").innerHTML = "David and Allura are 0% compatible";
    }
    else if (inpTwo.toUpperCase() === "JUSTIN" && inpOne.toUpperCase() === "CAMILLA"){
        document.getElementById("result").innerHTML = "Justin and Camilla are 100% compatible";
    }
    else if (inpTwo.toUpperCase() === "CAMILLA" && inpOne.toUpperCase() === "JUSTIN"){
        document.getElementById("result").innerHTML = "Camilla and Justin are 100% compatible";
    }
    else if (inpOne === "" || inpTwo === ""){
        document.getElementById("result").innerHTML = "Names must be entered";
    }
    else{
    document.getElementById("result").innerHTML = `${inpOne} and ${inpTwo} are ${perc}% compatible`;
    }
}