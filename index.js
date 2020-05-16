function dice(el){
  el.classList.add("animations");
  setTimeout(function(){
      el.classList.remove("animations");
  },1500);
}
