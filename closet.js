

//DROPDOWNS
function toggleDropdown(dropdownID) {
    var dropdownContent = document.getElementById(dropdownID);
    dropdownContent.classList.toggle("show");
  }




  //DRAGGABLE

  // Get the drop zone and images elements
  const stagecontainer = document.querySelector("#stagecontainer");
  const images = document.querySelectorAll(".clotheitem");

  // Variables to keep track of the dragged image and its offset
  let draggedImage = null;
  let offsetX = 0;
  let offsetY = 0;

  // Function to handle the start of dragging
  function handleDragStart(event) {
    draggedImage = event.target; // The image being dragged
    console.log(event.target.closest("#stagecontainer"));

    // Get the rectangle of the dragged image to calculate the offset
    const draggedImageRect = draggedImage.getBoundingClientRect();

    // Calculate offsets between the mouse and the image corners
    offsetX = event.clientX - draggedImageRect.left;
    offsetY = event.clientY - draggedImageRect.top;
  }

  // Function to handle dragging over the drop zone (necessary to allow dropping)
  function handleDragOver(event) {
    
    event.preventDefault(); // Prevents the default behavior to allow dropping
  }

  // Function to handle the drop action
  function handleDrop(event) {
    event.preventDefault(); // Prevents the default behavior
    if (draggedImage) {
      let img;
      if(draggedImage.closest("#stagecontainer")){
        console.log("is same image");
        img = draggedImage;
      }
      else{
        console.log("Is cloning");
        img = document.createElement("img");
        img.draggable = true;
        img.src = draggedImage.src;
        img.classList.add(...draggedImage.classList);
        img.ondragstart = handleDragStart;
      }

      // Get the drop zone rectangle to calculate the position
      const dropZoneRect = stagecontainer.getBoundingClientRect();

      // Calculate the new position of the image within the drop zone
      const x = event.clientX - dropZoneRect.left - offsetX;
      const y = event.clientY - dropZoneRect.top - offsetY;
      
      
      
      // Set the image's new position
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      stagecontainer.append(img); // Append the dragged image to the drop zone
    }
  }

  // Assign the handleDrop function to the drop event on the drop zone
  stagecontainer.ondrop = handleDrop;
  // Assign the handleDragOver function to the dragover event on the drop zone
  stagecontainer.ondragover = handleDragOver;

  // Assign the handleDragStart function to the dragstart event for each draggable image
  for (let image of images) {
    image.ondragstart = handleDragStart;
  }



//CLEAR BUTTON
clearbutton.onclick = function(){
stagecontainer.replaceChildren();
}








