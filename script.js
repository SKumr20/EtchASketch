var slider = document.getElementById("myRange");
var output = document.getElementById("sliderOutput");
output.innerHTML = slider.value; // Display the default slider value
var sliderValue = slider.value;


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  sliderValue = this.value;
  output.innerHTML = sliderValue;

}


gridContainer.style.height = "600px"
gridContainer.style.width = "600px"
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";


// Create a grid inside gridContainer div

const gridSize = 20;

for (let i=0; i < gridSize*gridSize; i++) {
  let boxes = document.createElement("div");
  boxes.classList.add("squares");
  boxes.style.width = "30px";
  boxes.style.height = "30px"
  gridContainer.appendChild(boxes);
}



