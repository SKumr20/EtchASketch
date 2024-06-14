var slider = document.getElementById("myRange");
var output = document.getElementById("sliderOutput");
output.innerHTML = slider.value; // Display the default slider value
var sliderValue = slider.value;


// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() 
{
  var gridSize = this.value;
  output.innerHTML = gridSize;

  // Create a grid inside gridContainer div

  // Clear the previous grid
  gridContainer.innerHTML = '';
  // Number of boxes would be square of this value.
  const boxHeightWidth = 600 / gridSize;

  for (let i=0; i < gridSize*gridSize; i++) 
  {
    let boxes = document.createElement("div");
    boxes.classList.add("squares");
    boxes.style.width = boxHeightWidth + "px";
    boxes.style.height = boxHeightWidth + "px"
    gridContainer.appendChild(boxes);
  } 

}

slider.oninput();


gridContainer.style.height = "600px"
gridContainer.style.width = "600px"
gridContainer.style.display = "flex";
gridContainer.style.flexWrap = "wrap";







