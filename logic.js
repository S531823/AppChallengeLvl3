function buttonClicked() {
    let firstInput = document.getElementById("firstInput").value;
    let secondInput = document.getElementById("secondInput").value;
    let thirdInput = document.getElementById("thirdInput").value;
    
    let result = firstInput * secondInput * thirdInput;
    
    document.getElementById("result1").innerHTML = firstInput;
    document.getElementById("result2").innerHTML = secondInput;
    document.getElementById("result3").innerHTML = thirdInput;
    
    document.getElementById("volume").innerHTML = "Volume: " + result;
}