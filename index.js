//DOM content event loaded

//Pasted code solutution


document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded")
    let content = document.getElementById('text').textContent = "This is really cool!"
    return content 
  });