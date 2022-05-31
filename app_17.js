// app_17

function backgroundCOLOR(value){
    const rgb0 = Math.floor(Math.random() * 256);
    const rgb1 = Math.floor(Math.random() * 256);
    const rgb2 = Math.floor(Math.random() * 256);
    const valueBGcolor = `rgb(${rgb0},${rgb1},${rgb2})`;
    if(value){
        document.body.style.setProperty('background-color',valueBGcolor);
        sessionStorage.setItem('background-color',valueBGcolor);  // add item to sessionStorage
    }
    else if(value == false){    
        document.body.style.setProperty('background-color',sessionStorage.getItem('background-color'));
    }
}
const BGcolor = document.querySelector('body input.BGcolor');
BGcolor.addEventListener('click',function(){
    backgroundCOLOR(true);
});
window.onload = function(){
    backgroundCOLOR(false);
};
