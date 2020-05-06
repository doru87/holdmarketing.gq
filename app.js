
const filter = document.querySelector('.mann-filter');
const grid = document.querySelector('.mann-filter-grid').getBoundingClientRect();

const slides = Array.from(filter.children);

const nextButton = document.querySelector('.right');
const prevButton = document.querySelector('.left');

const slideSize = slides[1].getBoundingClientRect();
const slideWidth = slideSize.width;


slides.forEach((slide,index) => {
    slide.style.left = grid.width * index/2 +'px';
})

nextButton.addEventListener('click', e => {

    const currentSlide = filter.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    filter.style.transform = 'translateX(-' + nextSlide.style.left + ')';
    
	  currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
    
})

prevButton.addEventListener('click', e => {

    const currentSlide = filter.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    filter.style.transform = 'translateX(-' + prevSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
})


var taburi = document.querySelectorAll("ul.nav-tab > li");

  function myTabClicks(tabClickEvent) {

    for (var i = 0; i < taburi.length; i++) {
      taburi[i].classList.remove("active");
    }
    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add("active");
    tabClickEvent.preventDefault();

    var tabpanes = document.querySelectorAll(".tab-pane");

    for (i = 0; i < tabpanes.length; i++) {
      tabpanes[i].classList.remove("active");
    }
    
    var target = tabClickEvent.target;
    var ancora = target.getAttribute("href");
    var panouActiv = document.querySelector(ancora);
    panouActiv.classList.add("active");
}

  for (var i = 0; i < taburi.length; i++) {
    taburi[i].addEventListener("click", myTabClicks)
}

var iconita_deschidere = document.querySelector(".icon-container a.iconita-deschidere");
iconita_deschidere.addEventListener("click", afisareMeniu);

var iconita_inchidere = document.querySelector(".icon-container a.iconita-inchidere");
iconita_inchidere.addEventListener("click", inchidereMeniu);

  function inchidereMeniu(){
    iconita_deschidere.style.display="block";
    iconita_inchidere.style.display="none";
    var navigation = document.querySelector(".grid-panou2");
    navigation.style.visibility = "hidden"; 
    const nav = document.querySelector(".navigation");
    nav.style.visibility = "hidden"; 
    nav.setAttribute("inchis","yes")
  }

function afisareMeniu(clickEvent){
  var navigation = document.querySelector(".grid-panou2");
  navigation.style.visibility = "visible";

  const nav = document.querySelector(".navigation");
  nav.style.visibility = "visible"; 

  var menu_items = document.querySelectorAll(".navigation li a");

  for (i = 0; i < menu_items.length; i++) {
    menu_items[i].style.display="block";
    menu_items[i].style.color="white";
    menu_items[i].style.marginLeft= "15%";
    menu_items[i].style.marginTop= "12%";
  }

  var navigation = document.querySelector(".navigation");

  navigation.style.background="black";
  navigation.style.width="97%";
  navigation.style.height="100%";
  navigation.style.position="fixed";
  navigation.style.backgroundImage="url(imagini/brand.png)";
  navigation.style.backgroundRepeat="no-repeat";
  navigation.style.opacity = "0.9"; 



  const vw = Math.max(document.documentElement.clientWidth);

  const ow = document.getElementById("grid-container").offsetWidth;
  const ot = document.getElementById("grid-container").offsetTop;

  const heightdiv = document.querySelector(".img-grid").clientHeight;
  
  navigation.style.left= vw - ow - (vw-ow)/2 + "px";
  navigation.style.top= ot + heightdiv - 8 +"px";
  navigation.setAttribute("inchis","no")
  iconita_deschidere.style.display="none";
  iconita_inchidere.style.display="block";

}
const nav = document.querySelector(".navigation");

window.addEventListener('scroll', function() {
  var mql = this.matchMedia("screen and (max-width: 800px)");
  
  if (mql.matches){

    nav.style.visibility = "hidden"; 
    
    if(this.scrollY==0 && nav.getAttribute("inchis")=="yes"){
      nav.style.visibility = "hidden"; 
    } 
    else if (this.scrollY==0 && nav.getAttribute("inchis")=="no") {
      nav.style.visibility = "visible"; 
    }
  }
})

setTimeout(function() {
  document.querySelector('.preloader').className += 'hide';
}, 2000)

setTimeout(function() {
  document.getElementById('grid-container').classList.remove('hide').className += 'display';
}, 2000)


