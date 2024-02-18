let slid_2 = document.getElementById("slide_2");
let slid_1 = document.getElementById("slide_2");
let cir_1 = document.getElementById("cir_1");
let cir_2 = document.getElementById("cir_2");

let menubtn = document.querySelector('.menu_phone')
let closescreen = document.querySelector('.menu_phone_close')
let menuphonescreen = document.querySelector('.menu_phone_screen')


const Next = () => {
  slide_2.style.opacity = "1";
  slide_1.style.opacity = "0";
  cir_1.style.backgroundColor = " rgba(0, 0, 0, 0.386)";
  cir_2.style.backgroundColor = "#0499DD";
};
const Prew = () => {
  slide_2.style.opacity = "0";
  slide_1.style.opacity = "1";
  cir_2.style.backgroundColor = " rgba(0, 0, 0, 0.386)";
  cir_1.style.backgroundColor = "#0499DD";
};
const  Scroll = () => {
		const element = document.getElementById('form')
		element.scrollIntoView({ behavior: 'smooth', block: 'end' })
 }

menubtn.addEventListener('click', () =>{
  menuphonescreen.style.opacity = 1;
  menuphonescreen.style.zindex = 1
  menuphonescreen.style.display = 'inherit'
  closescreen.style.zindex = 2
  closescreen.style.opacity = 1
  closescreen.style.display = 'inherit'
  menubtn.style.opacity = 0
  menubtn.style.display = 'none'
})
closescreen.addEventListener('click', () =>{
  menuphonescreen.style.opacity = 0
	menuphonescreen.style.zindex = -1
  menuphonescreen.style.display = 'none'
	closescreen.style.zindex = 0
	closescreen.style.opacity = -1
  closescreen.style.display = 'none'
	menubtn.style.opacity = 1
	menubtn.style.display = 'inherit'
})

