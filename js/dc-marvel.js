}
colorInput.value = "";
}

// var theHulk = document.getElementById("theHulk");
// var hulkState = theHulk.getAttribute("data-state");
// var hulkStrength = theHulk.getAttribute("data-strength");
// var hulkIntelligence = theHulk.getAttribute("data-intelligence");
// alert("The Hulk is currently in " + hulkState + " state. His strength is " + hulkStrength + " and his intelligence is " + hulkIntelligence);

var transformButton = document.getElementById("transformHulk");
transformButton.onclick = function() {
    var hulkState = theHulk.getAttribute("data-state");
    if (hulkState === "The Hulk") {
        theHulk.setAttribute("data-state", "Bruce Banner");
    } else {
        theHulk.setAttribute("data-state", "The Hulk");
    }
    var hulkStrength = theHulk.getAttribute("data-strength");
    if (hulkStrength === "super") {
        theHulk.setAttribute("data-strength", "normal");
    } else {
        theHulk.setAttribute("data-strength", "super");
    }
    var hulkIntelligence = theHulk.getAttribute("data-intelligence");
    if (hulkIntelligence === "low") {
        theHulk.setAttribute("data-intelligence", "exceptional");
    } else {
        theHulk.setAttribute("data-intelligence", "low");
    }
    // var hulkNameElement = document.getElementById("theHulk");
    // var hulkName = hulkNameElement.innerHTML;
    // if (hulkStrength === "normal") {
    //     hulkNameElement.innerHTML = "Bruce Banner"
    // }
    var hulkNameElement = document.getElementById("theHulk");
    var output = hulkState + " is currently in " + hulkState + " state. His strength is " + hulkStrength + " and his intelligence is " + hulkIntelligence;
    if (hulkStrength === "super") {
        hulkNameElement.style.color = "green";
        hulkNameElement.innerHTML = output;
    } else {
        hulkNameElement.style.color = "hotpink";
        hulkNameElement.innerHTML = output;
    }
}