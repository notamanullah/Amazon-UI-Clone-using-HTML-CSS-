const imgs = document.querySelectorAll('#img-slider ul img');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

let n = 0;

function changeSlide(){
    for (let i = 0 ; i < imgs.length ;  i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

left.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide()
});

right.addEventListener('click',(e)=>{
    if(n < imgs.length -1){
        n++;
    }else{
        n = 0;
    }
    changeSlide()
});

const products = document.querySelectorAll('.products');

for (const item of products) {
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    })
}