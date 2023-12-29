let photo;
let isZoom= Number();
let animations;
let animation;
let button;
let photoContent = [document.body.querySelector('.photo-content')];

  

function zoomInPhoto(id){
  photo= document.getElementById(id);
  photo.classList.add('photo-zoom');
  photoButton = document.body.querySelectorAll('.photo-button');

  for (let i = 0; i < photoButton.length; i++) {
    photoButton[i].onclick = null; 
  }
  
  photo.innerHTML = `<img id='${id}-img' src="photo/memories-${id}.jpg"><button id="${id}-but"><img src="photo/close-icon.png"></button>` 
  setTimeout(function(){
    enable(id);
  }, 1000);
  let imgs = document.getElementById(`${id}-img`)
  imgs.classList.add('appear');
  document.body.querySelector('.photo-grid').classList.add('blur');

  let a = document.getAnimations();
  for (var i = 0; i < a.length; i++) {
    let anima = a[i];
  

    if(anima.animationName ==='blur'){
      anima.playbackRate = 1;
      anima.play();
      
    }
   }
}



function zoomOutPhoto(id){
  animation = document.getAnimations();
   console.log(animation)
   for (var i = 0; i < animation.length; i++) {
    let anim = animation[i];
    if (anim.animationName === 'appear'){
      anim.playbackRate = -1;
      anim.play();
      setTimeout(function() {
        disableId(`${id}`, 'photo-zoom')
      }, 500);
      console.log('appear')
      
    }

    if(anim.animationName ==='blur'){
      anim.playbackRate = -1;
      anim.play();
      console.log('blur')
      setTimeout(function() {
        disable('.photo-grid', 'blur')
      }, 500);
      
    }
   }
  
  
  
}
function disable(name, animName){
  
  document.body.querySelector(name).classList.remove(animName);
  photo.innerHTML = ``
}

function disableId(id, name){
  document.getElementById(id).classList.remove(name);
  for (let i = 0; i < photoButton.length; i++) {
    photoButton[i].onclick = function() {zoomInPhoto(i+1);};
}}
function enable(id){
   button = document.getElementById(`${id}-but`);
   if(button!=null){
    button.addEventListener('click', function(){
      zoomOutPhoto(id);
      console.log(button)
    })
    
   }
 
}


