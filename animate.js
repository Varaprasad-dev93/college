// const h1=document.querySelectorAll('h1');
function loading(){
    gsap.from('h1',{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    });
    gsap.from('.Previous-Events h1',{
        delay:1,
        duration:0.7,
    });
    gsap.from('.video video',{
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.5,
    });
    gsap.from('#home img',{
        scale:0.9,
        opacity:0,
        delay:1,
        duration:0.6,
        stagger:0.3
    });
    gsap.from('li a',{
        y:100,
        opacity:0,
        delay:0.9,
        duration:0.9
    })
}
loading();
let cursor =document.querySelector('.cursor');
let links =document.querySelector('.links');
let video=document.querySelector('.video video')
window.addEventListener('mousemove',(e)=>{
    // console.log(e);
    cursor.style.top=e.pageY+"px";
    cursor.style.left=e.pageX+"px";
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
links.addEventListener('mouseover',()=>{
    cursor.style.padding="50px";
    cursor.style.animationDelay="2s";
    gsap.to(cursor,{
        scale:2,
        opacity:0,
        delay:0.9
    })
})
links.addEventListener('mouseleave',()=>{
    cursor.style.padding="10px";
    cursor.style.opacity="1";
})
video.addEventListener('mouseenter',()=>{
    cursor.style.backgroundColor="black";
    cursor.style.color="white";
    cursor.innerText="play";
    cursor.style.fontSize="30px"
    cursor.style.padding="20px"
    gsap.from(cursor,{
        scale:0.9
    })
})
video.addEventListener('mouseout',()=>{
    cursor.style.backgroundColor="transparent";
    cursor.style.color="black";
    cursor.innerText="";
    cursor.style.fontSize="0px"
    cursor.style.padding="10px"
    gsap.from(cursor,{
        scale:0.9
    })
})