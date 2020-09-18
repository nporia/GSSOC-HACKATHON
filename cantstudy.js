const panels = document.querySelectorAll('.panel');
function toggleOpen() {
  this.classList.toggle('open');
}
panels.forEach(function(panel) {
  panel.addEventListener('click', toggleOpen);
})

// function toggleActive(e) {
//   if(e.propertyName.includes('flex')) { //can be every property of this element that had changed(transisioned)
//     this.classList.toggle('open-active');
//   }
// }
function toggleActive() {
  this.classList.toggle('open-active');
}
panels.forEach(function(panel) {
  panel.addEventListener('transitionend', toggleActive);
})
