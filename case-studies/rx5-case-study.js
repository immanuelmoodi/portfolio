const progress=document.getElementById("readingProgress");
function updateProgress(){const d=document.documentElement;const max=d.scrollHeight-d.clientHeight;progress.style.width=(max>0?(d.scrollTop/max)*100:0)+"%"}
window.addEventListener("scroll",updateProgress,{passive:true});updateProgress();
const menuToggle=document.getElementById("menuToggle"),links=document.getElementById("caseLinks");
menuToggle.addEventListener("click",()=>{const open=links.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.setAttribute("aria-label",open?"Close navigation":"Open navigation")});
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");menuToggle.setAttribute("aria-expanded","false")}));
const lightbox=document.getElementById("lightbox"),lightboxImage=document.getElementById("lightboxImage"),close=document.getElementById("lightboxClose");
document.querySelectorAll("[data-image]").forEach(button=>button.addEventListener("click",()=>{lightboxImage.src=button.dataset.image;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}));
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImage.src="";document.body.style.overflow=""}
close.addEventListener("click",closeLightbox);lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});
