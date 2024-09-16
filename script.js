const customSelect = document.querySelector('.language');
const hn =  document.querySelector(".hn")
const en = document.querySelector(".en")
const movieSelected = document.querySelector('.movie-selected')
const countrySelected = document.querySelector(".country-selected")
const screenWidth = window.innerWidth;



function toggleDropdown(event) {

   event.stopPropagation();
   const dropdown = document.getElementById('dropdown-options');
   customSelect.style.outline = "3px solid #fff"
   customSelect.style.border = "1px solid rgb(109, 109, 109)"
   dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

   en.className += " active"
   hn.className = "hn"

}

function mouseHover(lang){
   if(lang === "hn"){
      en.className = "en"
      hn.className += " active"
   }
   else if(lang === "en"){
      hn.className = "hn"
      en.className += " active"
   }


}

function selectLanguage(language) {
   document.querySelector('.selected').innerText = language;
   closeDropdown(); 
}

function closeDropdown() {
   const dropdown = document.getElementById('dropdown-options');
   dropdown.style.display = 'none';
   customSelect.style.outline = "none"
   
}

// ----------------------------------------------- bottom dropdown ------------------------------------



const customSelect1 = document.querySelector('.language1');
const hn1 =  document.querySelector(".hn1")
const en1 = document.querySelector(".en1")


function toggleDropdown1(event) {

   event.stopPropagation();
   const dropdown1 = document.getElementById('dropdown-options1');
   customSelect1.style.outline = "3px solid #fff"
   customSelect1.style.border = "1px solid rgb(109, 109, 109)"
   dropdown1.style.display = dropdown1.style.display === 'block' ? 'none' : 'block';

   en1.className += " active"
   hn1.className = "hn1"

}

function mouseHover1(lang){
   if(lang === "hn"){
      en1.className = "en1"
      hn1.className += " active"
   }
   else if(lang === "en"){
      hn1.className = "hn1"
      en1.className += " active"
   }


}

function selectLanguage1(language) {
   document.querySelector('.selected1').innerText = language;
   closeDropdown1(); 
}

function closeDropdown1() {
   const dropdown1 = document.getElementById('dropdown-options1');
   dropdown1.style.display = 'none';
   customSelect1.style.outline = "none"
   
}












// ---------------------- country ----------------------------

const customCountry = document.querySelector('.country');
const Gl =  document.querySelector(".Gl")
const In = document.querySelector(".In")

function countryDropdown(event) {

   event.stopPropagation();

  
   const dropdown = document.getElementById('country-dropdown-options');
   customCountry.style.outline = "3px solid #fff"
   customCountry.style.border = "1px solid rgb(109, 109, 109)"
   dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

   In.className += " count-active"
   Gl.className = "Gl"

}

function countryMouseHover(lang){
   if(lang === "Gl"){
      In.className = "In"
      Gl.className += " count-active"
   }
   else if(lang === "In"){
      Gl.className = "Gl"
      In.className += " count-active"
   }


}

function selectCountry(language) {
   countrySelected.innerText = language;
   let movieDropdown = document.querySelector(".movie-dropdown")


   if(language === "Global"){
      movieSelected.innerText = "Movies - English"
      movieDropdown.style.minWidth = "12rem"

   }
   else if(language === "India"){
      movieSelected.innerText = "Movie"
      movieDropdown.style.minWidth = "5.5rem"
   }
   
   movieDropdownValue()
   closeCountryDropdown(); 
}

function closeCountryDropdown() {
   const dropdown = document.getElementById('country-dropdown-options');
   dropdown.style.display = 'none';
   customCountry.style.outline = "none"
   
}



// ------------------------------------------ movies ------------------------------------


const customMovie = document.querySelector('.movie-dropdown');

function movieDropdown(event) {

   event.stopPropagation();

   let dropdown = document.getElementById('movie-dropdown-options');

   if(countrySelected.innerText == "Global"){
      dropdown = document.querySelector('.movie-option2');
   }
   else if(countrySelected.innerText == "India"){
      dropdown = document.getElementById('movie-dropdown-options');      
   }

   customMovie.style.outline = "3px solid #fff"
   customMovie.style.border = "1px solid rgb(109, 109, 109)"
   dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';



}


   let options = document.querySelectorAll(".option")
   let Mv1 = document.querySelector(".Mv1")
   let mvEn = document.querySelector(".mv-en")

   Mv1.className += " movie-active"
   mvEn.className += " movie-active"


   options.forEach((option)=>{
      option.addEventListener('mouseover', ()=>{


         for(let option1 of options){

            if(option1 === option){
              option.className += " movie-active"
            }
            else{
                option1.className = "Mv option"
            }
         }

      })
   })


function selectMovie(language) {
   movieSelected.innerText = language;

   movieDropdownValue()
   closeMovieDropdown(); 
}

function closeMovieDropdown() {

   let dropdown1 = document.querySelector('.movie-option2');
   let dropdown2 = document.getElementById('movie-dropdown-options');  

   dropdown1.style.display = 'none';
   dropdown2.style.display = 'none';
   customMovie.style.outline = "none"
   
}

window.onclick = function(event) {

   if(!customCountry.contains(event.target)) {
       closeCountryDropdown();
   }
   if(!customSelect.contains(event.target)) {
       closeDropdown();
  }
  if(!customMovie.contains(event.target)) {
      closeMovieDropdown();
   }
   if(!customSelect1.contains(event.target)) {
      closeDropdown1();
   }
}

let popupBtn = document.querySelector(".popup-btn")


function handleScroll() {
   let scrollAmount = window.scrollY || window.pageYOffset;

   if ((scrollAmount >= 620 && scrollAmount <= 2000) || scrollAmount >= 3000) {
      popupBtn.style.opacity = "1";
      popupBtn.style.transform = 'translateY(0)';
   } else {
      popupBtn.style.opacity = "0";
      popupBtn.style.transform = 'translateY(100%)';
   }
}


function handleResize() {
   let screenWidth = window.innerWidth;

   if (screenWidth <= 600) {

      window.addEventListener('scroll', handleScroll);
   } else {

      popupBtn.style.opacity = "0";
      window.removeEventListener('scroll', handleScroll);
   }
}

window.addEventListener('resize', handleResize);

handleResize();





const questions = document.querySelectorAll(".faq-btn")

questions.forEach((question)=>{

   question.addEventListener("click", function(){

      let allAns = document.querySelectorAll(".ans1")
      let svges = document.querySelectorAll(".bi-plus-lg")
      let faqSvg = question.lastElementChild
      let answer = question.nextElementSibling


      if(answer.className === "ans1" || faqSvg.classList.value === "bi bi-plus-lg faq-svg-rotate"){
         answer.className += " hide-ans"
         faqSvg.classList.value = "bi bi-plus-lg"
      }
      else{
         for(let ans of allAns){
            if(ans.className === "ans1"){
               ans.className = "ans1 hide-ans"
            }
         }
         for(let svg of svges){
             svg.classList.value = "bi bi-plus-lg"
            
         }
   
   
         if(answer.className === "ans1 hide-ans"){
            answer.className = "ans1"
            faqSvg.classList.value += " faq-svg-rotate"
         }
      }

   })
})



// -----------------------------------------------------------


function getVisibleMovies() {

   if(screenWidth > 1300){

      return 5
   }
   else if(screenWidth <= 1300 && screenWidth > 960){
      return 4
   }

   else if(screenWidth <= 960 && screenWidth > 860){
      return 6
   }

   else if(screenWidth <= 860 && screenWidth >760){
      return 5
   }

   else if(screenWidth <= 760 && screenWidth > 590){
      return 4
   }

    else if(screenWidth <= 590 && screenWidth > 470){
      return 3
   }

   else if(screenWidth <= 470 && screenWidth > 350){
      return 2
   }

   else{
      return 1
   }

}


function scrollToMovie(index, container) {
   const movieWidth = container.querySelector('.movie-item').offsetWidth;


   const scrollPosition = (index - 1) * movieWidth;


   container.scrollTo({ left: scrollPosition, behavior: 'smooth' });


   return scrollPosition;
}


function handleSliderButtonClick(sliderId) {


   const movieSlider2 = document.getElementById('movie-slider2');
   const movieSlider1 = document.getElementById('movie-slider1');
   const container = document.querySelector('.movies-container');
   const totalMovies = container.children.length;
   const visibleMovies = getVisibleMovies();


   let currentFirstVisible = Math.floor(container.scrollLeft / container.querySelector('.movie-item').offsetWidth) + 1;




if (sliderId === 'slider1') {


       if ((currentFirstVisible + 1) - visibleMovies >= 0 || (currentFirstVisible + 1) - visibleMovies <= 0 ) {

        scrollToMovie((currentFirstVisible + 1) - visibleMovies, container);
          
           setTimeout(() => {
            movieSlider2.style.opacity = '1';
            movieSlider2.style.transform = 'translateX(0)';
             }, 50);
          
          
          

           if ((currentFirstVisible + 1) - visibleMovies <= 1) {

            setTimeout(() => {
               movieSlider1.style.opacity = '0';
               movieSlider1.style.transform = 'translateX(-100%)';
               }, 450);

              
           }

         }
       

       

   } else if (sliderId === 'slider2') {

      const nextIndex = currentFirstVisible + visibleMovies;
       

      if (nextIndex <= totalMovies) {  

         const scrollPosition = scrollToMovie(nextIndex, container);


         setTimeout(() => {
            movieSlider1.style.opacity = '1'; 
            movieSlider1.style.transform = 'translateX(0)';
         }, 50);
          


            if(nextIndex >= 9 || (visibleMovies >= 5 && scrollPosition > 600)){

               let movieWidth = container.querySelector('.movie-item').offsetWidth

               let currentScroll = 0

               currentScroll = movieWidth*(nextIndex-1)


               if (currentScroll == scrollPosition) {  

                  setTimeout(() => {
                     movieSlider2.style.opacity = '0';
                     movieSlider2.style.transform = 'translateX(100%)';
                  }, 450);
                  
      
              }
            }

          
       }

   }
}


document.querySelector('.movie-slider1').addEventListener('click', () => handleSliderButtonClick('slider1'));
document.querySelector('.movie-slider2').addEventListener('click', () => handleSliderButtonClick('slider2'));

function resetSliders() {
   const container = document.querySelector('.movies-container');
   const movieSlider1 = document.getElementById('movie-slider1');
   const movieSlider2 = document.getElementById('movie-slider2');
   
   container.scrollTo({ left: 0 }); 
   movieSlider1.style.opacity = '0'; 
   movieSlider1.style.transform = 'translateX(-100%)'; 

   movieSlider2.style.opacity = '1'; 
   movieSlider2.style.transform = 'translateX(0)'; 
}


window.addEventListener('resize', resetSliders);

window.addEventListener('load', resetSliders);




function movieDropdownValue(){

   let imgName = "India-Movies"
   let movieSize = 10


   if(countrySelected.innerText == "India" &&  movieSelected.innerText == "TV Shows"){
      imgName = "India-tvshows"
      movieSize = 9
   }
   else if(countrySelected.innerText == "India" &&  movieSelected.innerText == "Movies"){
      imgName = "India-Movies"
      movieSize = 10
   }
   else if(countrySelected.innerText == "Global" &&  movieSelected.innerText == "Movies - English"){
      imgName = "Global-movies-english"
      movieSize = 7
   }
   else if(countrySelected.innerText == "Global" &&  movieSelected.innerText == "Movies - Other Languages"){
      imgName = "Global-movies-Ol"
      movieSize = 7
   }
   else if(countrySelected.innerText == "Global" &&  movieSelected.innerText == "TV Shows - English"){
      imgName = "Global-tvshow-english"
      movieSize = 8
   }
   else if(countrySelected.innerText == "Global" &&  movieSelected.innerText == "TV Shows - Other Languages"){
      imgName = "Global-tvshow-Ol"
      movieSize = 9
   }

let size = 0

   for(let i = 1; i <= 10; i++){
      let image = document.querySelector(`.movie${i}`)
      let movieItem = document.querySelector(`#movie-item${i}`)

      if(i <= movieSize){
         movieItem.style.display = "block";
         let imgUrl = `./images/${imgName}/${i}.webp`
         image.style.backgroundImage = `url(${imgUrl})`;
         size += 1;
      }
      else{
         movieItem.style.display = "none";
      }
      }
}



