const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-priv');
const nxt_btn = document.querySelector('.control-next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeSlide();

prev_btn.addEventListener('click', (e) =>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide();
})
nxt_btn.addEventListener('click', (e) =>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide();
})

////////////////////////////////////////////////////////

const scroolContainer = document.querySelectorAll('.products');
for (const item of scroolContainer){
    item.addEventListener('wheel', (evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    })
}