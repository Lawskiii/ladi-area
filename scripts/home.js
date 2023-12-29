//Verify
const verifyArray = [];
const unVerifiedArray = [9];
let verifyContainer = document.querySelector('.verifyContainer');

//REMOVE
let destryObj;

//TEXT
const texts = [];



function verify(selectedVerify){
  let verifyNumber = document.getElementById(selectedVerify);
  
  if(verifyNumber.classList.contains('verifyButton-fade')){

  }else{
    verifyNumber.classList.add('verifyButton-fade');
    verifyArray.push(selectedVerify);
    console.log(verifyArray);
  }
  
}

function finishVerify(){
  let hasIntersection = checkIntersection(verifyArray, unVerifiedArray);
  let verifyAmount = 9-unVerifiedArray.length;
  
  
  if(verifyArray.length != verifyAmount){
    //WRONG
    falseVerify();
  } 
  else{
    if (hasIntersection){
      //WRONG
      falseVerify();
    }else{
      //RIGHT
      trueVerify();
    }
  }

}

function trueVerify(){
  console.log(verifyContainer)
  verifyContainer.classList.add('slideUp');
  
  // Get the body element
  var body = document.body;

  // Set the CSS styles using the style property
  body.style.width = '100%';
  body.style.height = '100%';
  body.style.backgroundImage = 'linear-gradient(#ffffff 1.1rem, #ccc 1.2rem)';
  body.style.backgroundSize = '100% 1.2rem';
  
  generateText(['HALO, HOLA, KONNICHIWA, ANNYEONGHASEO, NI HAO.', 'MY <u>LOVE</u> AND ONLY <u>LOVE</u> &#x2764;', 'engga kerasaaa udahhh <u>2 bulan</u> kitaaa bersamaaaaa!!!', 'akuu (waku &#x1F60E;) sangatt sangatt sangattt <u>enjoyyyy</u> setiap detikk kitaa', 'kitaa <u>ngobroll</u> barengg,', '<u>ngocehhh</u> barenggg,', '<u>makan</u> barenggg,', '<u>belajar</u> barenggg,', 'dan lain lain.', 'setiapp <b>memorii</b> kitaa <u>bersamaaaa</u> udahh aku simpann dalam website yang udah ku bikin ini!!! (pro bngt gw)', 'AYO KITA <b>REWIND</b> SEMUA <b>MEMORI</b> YANG SUDAH KITA LALUI BERSAMA, KENCANGKAN SABUKMU!!!']);

  //DESTROY
  destryObj = 'verificationCont';
  setTimeout(destroy, 3000);

  
}

function falseVerify(){
  verifyContainer.classList.add('shake');
  setTimeout(reload, 300);
}

function checkIntersection(array1, array2) {
  if(array1 != null){
    return array1.some(function (elem) {
      return array2.indexOf(elem) !== -1;
  });
  }
}

function destroy(){

  if(destryObj!=null){
    let objToDestroy = document.getElementById(destryObj);
    objToDestroy.innerHTML = '';
  }
}

function reload(){
  location.reload(true);
}


function generateText(text1){
  
  for (let i = 1; i <= 11; i++) {
  
    texts.push(document.body.querySelector(`.text-messages-${i}`));    
    
    setTimeout(function() {
      addMessage(i, text1);
  },i*3000 );
  
  }  

  setTimeout(function() {
    removeMessage()
},40000);
}

let anim = [];
function addMessage(i, text1){
  
  texts[i-1].innerHTML = text1[i-1];
  
  texts[i-1].classList.add(`text-message-${i}`);
  anim.push(document.body.querySelector(`.text-message-${i}`));
}

function removeMessage(){
  document.body.querySelector('.text').classList.add('opacity');
  setTimeout(changeWeb, 4000);
}

function changeWeb(){
  location.replace('https://lawskiii.github.io/lawskii-property/memories.html')
}


