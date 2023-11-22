let slid_2 = document.getElementById("slide_2");
let slid_1 = document.getElementById("slide_2");
let cir_1 = document.getElementById("cir_1");
let cir_2 = document.getElementById("cir_2");
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