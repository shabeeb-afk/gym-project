
let menu =document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')
function show(){
    let nav=document.getElementById('menu');
    nav.setAttribute('class','hide');

    let cros=document.getElementById('cancel');
    cros.setAttribute('class','show');

    let tog=document.getElementById('opt')
    let res= tog.getAttribute('class')
    if(res=='hide'){
        tog.setAttribute('class','show')
    }
   
}

function hide(){
    let cross=document.getElementById('cancel')
    cross.setAttribute('class','hide');

    let nav=document.getElementById('menu');
    nav.setAttribute('class','show');

    let tog=document.getElementById('opt')
    let res= tog.getAttribute('class')
    if(res=='show'){
        tog.setAttribute('class','hide')
    }
    
}


window.onscroll=()=>{
   
    let tog=document.getElementById('opt')
    tog.setAttribute('class','hide');
   
   
    let nav=document.getElementById('menu');
    nav.setAttribute('class','show');

   
    let cross=document.getElementById('cancel')
    cross.setAttribute('class','hide');
    
}

var typed = new Typed('.multiple-text', {
    strings: ['Bodybulding', 'Physical Fitness','Weight Gain','Strength Training','Fat Loss','WeightLifting','Running'],
    typeSpeed: 60,
    backSpeed:60,
    loop:Infinity,
});
