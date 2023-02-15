const btn = document.querySelector("#my-button");

btn.style.backgroundImage = 'url(./img/4.png), url(./img/3.gif)';
btn.backgroundPosition = 'left top, right'; 

let position;
btn.addEventListener("mouseover", function (){
btn.style.cursor = 'pointer';


    
  if (document.querySelector("#form_text").value === "" || document.querySelector("#form_email").value === "" || document.querySelector("#form_pas").value === "") {
    btn.style.backgroundImage = 'url(./img/5.png), url(./img/2.gif)';
	  btn.backgroundPosition = 'left top , right'; 
    position ? (position = 0) : (position = 230);
   btn.className = 'transform';
    btn.style.transform =  `translate(${position}px,0px)`;

   
    } else {
      btn.style.backgroundImage = 'url(./img/4.png), url(./img/3.gif)';
      btn.backgroundPosition = 'left top, right'; 
         btn.style.position="sticky";
    }
  })



