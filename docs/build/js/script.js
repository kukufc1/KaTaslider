function initSwiper(){new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next"},slidesPerView:1.16,spaceBetween:5})}function checkWindowSize(){window.innerWidth<340&&initSwiper()}window.addEventListener("load",checkWindowSize);const toggleButton=document.getElementById("toggleButton"),links=document.querySelectorAll(".link");let isExpanded=!1;const getMaxVisibleLinks=()=>320<window.innerWidth&&window.innerWidth<768?2:768<=window.innerWidth&&window.innerWidth<1120?6:1120<=window.innerWidth&&window.innerWidth<2e3?8:links.length,updateLinkVisibility=()=>{var e=getMaxVisibleLinks();links.forEach((i,n)=>{isExpanded||n<e?i.classList.remove("hidden"):i.classList.add("hidden")})};toggleButton.addEventListener("click",()=>{isExpanded=!isExpanded,isExpanded?(toggleButton.textContent="Скрыть",toggleButton.style.backgroundImage=' url("src/img/hide.png")'):(toggleButton.textContent="Показать все",toggleButton.style.backgroundImage='url("https://kukufc1.github.io/KaTa//src/img/icon.png")'),updateLinkVisibility()}),updateLinkVisibility(),window.addEventListener("resize",updateLinkVisibility);