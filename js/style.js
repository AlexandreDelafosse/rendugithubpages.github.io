var header = document.getElementById('menu');
var bouton = document.getElementById('burgermenu');
var x = 0;
bouton.addEventListener('click', display);
function display(){
    if( x === 0 ){
        header.style.display = 'block';
        x = 1;
    }else if( x === 1){
        header.style.display = 'none';
        x = 0;
    }
}