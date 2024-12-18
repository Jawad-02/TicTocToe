// images url path
const X_image_url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png'; 
const O_image_url = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

// function that  is working after clicking at any div
function changeToX(event){ // the function change the image inside the dive to be the X shape
    const ClickedDiv = event.currentTarget;
    let image = document.createElement('img');
    image.src = X_image_url;
    ClickedDiv.appendChild(image);
    ClickedDiv.removeEventListener('click', changeToX);

    const indexOfBox = freeBoxes.indexOf(ClickedDiv);
    freeBoxes.splice(indexOfBox , 1);

    ChangeToO(); // calling the O function where the computer will play and put O shape at one of the divs  

}

function ChangeToO(){

    // fill this part to make the games puts O in the divs 


}


const freeBoxes = [];

const boxes = document.querySelectorAll('.grid div');
// console.log(boxes);
for(let box of boxes){
    box.addEventListener('click' , changeToX);
    freeBoxes.push(box);
}
