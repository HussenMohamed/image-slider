// Get Slider Items
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// Get Number Of Slides
let slidesCount = sliderImages.length;
console.log(slidesCount);
// current slide
let currentSlide = 1;
// Slide number string Element
let slideNumEle = document.getElementById('slide-number');
//Previous and Next Buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


//Create the Main UL Element
let paginationUL = document.createElement("ul");
//Set ID on Created UL Element
paginationUL.setAttribute('id','pagination-ul');

//Create List Items Based on Slides Count
for(let i = 1; 1 <= slidesCount ; i++){
    // Create the LI
    let paginationLI = document.createElement("li");
    //Set Custom Attribute
    paginationLI.setAttribute('data-index', i); 
    //Set the Content of the LI
    paginationLI.appendChild(document.createTextNode(i));
    // Append LI to the UL
    paginationUL.appendChild(paginationLI);
}
//Append the Created UL Element To The Page
document.getElementById('indicators').appendChild(paginationUL);


//function nextSlide
function nextSlide() {
    console.log("Next");
}
//function Previous Slide
function prevSlide() {
    console.log("Previous");
}