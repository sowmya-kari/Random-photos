const imagecontainerE1 = document.querySelector(".imagecontainerE1");
const btnE1 = document.querySelector(".btn");
btnE1.addEventListener("click", () => { 
    imageNum = 10; 
    addNewImages()
});
function addNewImages(){
    for(let index =0; index < imageNum;index++)
    {
        const newImaE1 = document.createElement("img")
        newImaE1.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
        imagecontainerE1.appendChild(newImaE1);
    }
    

}
