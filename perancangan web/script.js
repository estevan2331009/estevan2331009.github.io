let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill = document.getElementById('hill');
let hill2 = document.getElementById('hill2');
let ryu = document.getElementById('ryu');
let grass2 = document.getElementById('grass2');
let grass = document.getElementById('grass');
let bio = document.getElementById('bio');
let abtme= document.getElementById('abt me');

window.addEventListener('scroll',()=>{
    let value= window.scrollY

    text.style.marginTop = value*2.5+'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 +'px';
    hill.style.top = value *1.5+'px';
    

    grass2.style.right=value*1.5+'px';
    
    ryu.style.left= value*1.5+'px';
    
})