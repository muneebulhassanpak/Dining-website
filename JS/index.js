const hamIcon=document.querySelector('.hamburgericon');
const cross=document.querySelector('.cross');
const sideBar=document.querySelector('.sidebar');
const overlaydiv=document.querySelector('.overlay');
function overlayopen()
{
  overlaydiv.style.display="block";
  overlaydiv.style.transition="all 1s ease";
  sidebaropen(); 
  function sidebaropen()
 {
     sideBar.style.transform="translate(0%)";
     sideBar.style.transition="all 0.5s ease";
    }   
}
hamIcon.addEventListener('click',overlayopen);

overlaydiv.addEventListener('click',()=>{
    overlaydiv.style.display="none";
    sideBar.style.transform="translate(-100%)";
    // sidebarclose();
});
function overlayclose()
{ 
    overlaydiv.style.display="none";
    overlaydiv.style.transition="all 1s ease";
    sidebarclose();
  function sidebarclose()
 {
     sideBar.style.transform="translate(-100%)";
    }
}
cross.addEventListener('click',overlayclose)