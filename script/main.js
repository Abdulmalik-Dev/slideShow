const img = document.querySelector(".container div img"),
      slideCount = document.querySelector("#slideCount"),
      next = document.querySelector("#next"),
      previous = document.querySelector("#previous"),
      bullits = document.querySelector(".bullits"),

    //   The Sources For Images 
    sources = ["01", "02", "03", "04"];

// The Source Count 
let i = 0;

// To Create The Bullits 
function createBullits(){
    for(let count = 1; count <= sources.length; count++){
        let bullit = document.createElement("span");
        bullit.appendChild(document.createTextNode(count));
        bullit.className = "active";
        bullits.appendChild(bullit);
    }
}
createBullits();

// To Add Class Active On Current Slide Count 
function addClassActive(current){
    for(let i = 0; i < bullits.children.length; i++){
        bullits.children[i].className = "";
    };
    bullits.children[current].className = "active";
}
addClassActive(0);

// To Check That Slide Count Equal To Last Index Of Sources Or Not 
function sildeCountArrive(){
    if(i === 0){
        previous.classList.add('dontClick');
    }else{
        previous.classList.remove('dontClick');
    }
    if(i === sources.length -1){
        next.classList.add('dontClick');
    }else{
        next.classList.remove('dontClick');
    }
}
sildeCountArrive();

// Onclick To Next Button 
next.addEventListener("click", ()=> {
    i++;
    sildeCountArrive();
    addClassActive(i);
    // To Check If Counter Arrived 4 Or Not 
    if(i === 4){
        i = 3;
    }
    // Set Image 
    img.src = `images/${sources[i]}.png`;
    // Set Slide Count 
    slideCount.textContent = `Slide ${i +1}`;
});

// Onclick To Previous Button 
previous.addEventListener("click", ()=> {
    i--;
    sildeCountArrive();
    addClassActive(i);
    // To Check If Counter Arrived -1 Or Not 
    if(i === -1){
        i = 0;
    }
    // Set Image 
    img.src = `images/${sources[i]}.png`;
    // Set Slide Count 
    slideCount.textContent = `Slide ${i +1}`;
});

// To Add Class Active And Go On This Slide On Click On Any Bullit 
document.querySelectorAll(".bullits span").forEach(span => {
    span.addEventListener('click', _ =>{
        // To Add Class Active 
        addClassActive(span.textContent -1);
        // Set Image 
        img.src = `images/${sources[i]}.png`;
        // Reset Counter 
        i = span.textContent -1;
        // Check For Counter 
        sildeCountArrive();
        // Set Slide Count 
        slideCount.textContent = `Slide ${i +1}`;
    });
});

// Set Slide Count 
slideCount.textContent = `Slide ${i +1}`;