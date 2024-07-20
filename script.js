const events=document.querySelector('.events');
async function fetchdata(){
    const res=await fetch('images.json');
    const data=await res.json();
    // console.log(data);
    for (i in data){
        let time=document.createElement('div');
        let imgmain=document.createElement('div');
        imgmain.classList.add('slider');
        for(key in data[i]){
            if(key=='name'){
                let head=document.createElement('h1');
                head.innerHTML=data[i][key];
                time.appendChild(head);
                console.log(data[i][key])
                time.classList.add(data[i][key]);
            }
            else{
                for (k in data[i][key]){
                    let im=document.createElement('div');
                    im.classList.add(k);
                    imgmain.appendChild(im);
                    time.appendChild(imgmain);
                    // console.log(data[i][key][k])
                    let img=document.createElement('img');
                    for(k1 in data[i][key][k]){
                        let det=document.createElement('p');
                        det.style.setProperty('display','none');
                        if(k1=='src'){
                            img.src=data[i][key][k][k1];
                            img.setAttribute('onclick',"display('"+k+i+"')");
                        }
                        else{
                            det.classList.add(k+i);
                            det.innerHTML=data[i][key][k][k1];
                        }
                        im.appendChild(img);
                        im.appendChild(det);
                    }
                }
            }
            events.appendChild(time);
        }
    }
}
fetchdata();
function display(k){
    let k1=document.querySelector('.events');
    let h1=document.querySelectorAll('h1');
    let ele=document.querySelector('.'+k);
    let val=ele.style.getPropertyValue('display');
    console.log(ele);
    if(val=='none'){
        ele.style.display="block"
        ele.style.setProperty('display','block');
    }
    k1.addEventListener('mouseleave',()=>{
        ele.style.display='none';
        ele.style.setProperty('display','none');
    })
    for(var i=0;i<h1.length;i++){
     h1[i].addEventListener('mouseover',()=>{
        ele.style.display='none';
        ele.style.setProperty('display','none');
    })
}
}
