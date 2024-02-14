const slide = document.querySelector('#slide');
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
const close = document.getElementById('close');


// menu function

if(menu){
    menu.addEventListener('click', () => {
        nav.classList.add('active');
        close.style.display  = 'block';
        menu.style.display = 'none';
        
    });
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
        close.style.display = 'none';
        menu.style.display = 'block';
    });
}
// scroll style in javscript
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});
// changing the text of the h1
let interval = 5000;

let currentText = 0;
let texts = [
    " a computer engineer",
    " a web developer",
    " an app developer",
    " a pharmacist",
    " a medical doctor",
    " an electrical engineer",
    " a system engineer",
    " a power engineer",
    " a mathematician",
    " a chemist",
    " a mechanical engineer",
    " a civil engineer",
    " an automobile engineer",
    " a business administrator",
    "an accountant",
    " an architecture",
    " an agriculture engineer",
    "medical lab scientist",
    "cybersecurity engineer",
    "an economist",
    "a lawyer",
    "a president",
    "a governor",
    "a teacher"

];


function changeText(){
   slide.innerHTML = texts[currentText];
   currentText++;
   
   if(currentText >= texts.length){
    currentText = 0;
   }
}

setInterval(changeText,interval);
