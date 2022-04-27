let stars = document.getElementById('stars');
let moon2 = document.getElementById('moon2');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let BOO000000000000 = document.querySelector('.BOO000000000000');
window.onscrollY = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon2.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';
    BOO000000000000.style.fontSize = value + 'px';
    if(scrollY >= 67){
        BOO000000000000.style.fontSize = 67 + 'px';
        BOO000000000000.style.position = 'fixed';
        if(scrollY >= 478){
             BOO000000000000.style.display = 'none';
        }else{
            BOO000000000000.style.display =s'block';
        }
        if(scrollY >= 127){
            document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)'
        }else{
            document.querySelector('.main').style.background = ' linear-gradient(#200016,#10001f)'

        }

    }
}