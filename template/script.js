
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


window.onclick = function(event) {

   if(!customSelect1.contains(event.target)) {
      closeDropdown1();
   }
}