window.addEventListener('load',function(){
    //获取元素
    var parrv = this.document.querySelector('.prrv');
    var next = this.document.querySelector('.next');
    var user = this.document.querySelector('.user');
    //实现箭头显示与消失功能
    user.addEventListener('mouseenter',function(){
        parrv.style.display = 'block';
        next.style.display = 'block';
        clearInterval(timer);
        timer =null;
    })
    user.addEventListener('mouseleave',function(){
        parrv.style.display = 'none';
        next.style.display = 'none';
        timer = setInterval(function(){
         next.click();
        },2000)
    })
    //动态获取小圆圈
    var ul = this.document.querySelector('.s1');
    var ol = this.document.querySelector('ol');
    var focus = this.document.querySelector('.src1');
    var focusWidth = focus.offsetWidth;
    var temp = 0;
    for(var i = 0; i < ul.children.length; i++){ 
      var li = this.document.createElement('li');
      temp++;
        ol.appendChild(li);
        li.setAttribute('index',i);
        li.addEventListener('click',function(){
            for(var i = 0; i < ol.children.length; i++){
                ol.children[i].className = '';
            }
            this.className = 'content';
          var index = this.getAttribute('index')
            console.log(index);
            num = index;
            animate(ul,-index * focusWidth);
            // ul.children[index].style.display = 'block';
            // ul.style.width = 990 + 'px';
        })
       

    } 
    ol.children[0].className = 'content';
    // ul.children[0].style.display = 'block';
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    var num = 0;
    next.addEventListener('click',function(){
        if(num == ul.children.length-1){
            ul.style.left = 0;
            num = -1;
        } 
        num++;
        animate(ul, num * -focusWidth);
       
        console.log(focusWidth);
        console.log(ul.offsetLeft);
        console.log(num);
        for(var i = 0; i < ol.children.length; i++){
            // ul.children[i].style.display = 'none';
            ol.children[i].className = '';
            li.setAttribute('index',i);
        }
        if(num<3){
            ol.children[num].className = 'content';
        }
       
        // ul.children[num].style.display = 'block';
       
    })

    parrv.addEventListener('click',function(){
        if(num == 0){
            ul.style.left = 0;
            num = 3;
        } 
        num--;
        animate(ul, num * -focusWidth);
       
        console.log(focusWidth);
        console.log(ul.offsetLeft);
        console.log(num);
        for(var i = 0; i < ol.children.length; i++){
            // ul.children[i].style.display = 'none';
            ol.children[i].className = '';
            li.setAttribute('index',i);
        }
        if(num<3){
            ol.children[num].className = 'content';
        }
        // ul.children[num].style.display = 'block';
       
    })

//    var timer = setInterval(function(){
//         parrv.click();
//     },2000)
    // next.addEventListener('click',function(){
    //     num = num > 0 ? num-- : num;
    //     for(var i = 0; i < ol.children.length; i++){
    //         ul.children[i].style.display = 'none';
    //         ol.children[i].className = '';
    //         li.setAttribute('index',i);
    //     }
    //     if(num == 0){
    //         num = 2;
    //     }
    //     ol.children[num].className = 'content';
    //     ul.children[num].style.display = 'block';
        
         
    //     animate(ul,250);
    //     console.log(ul.offsetLeft);
    //     console.log(num);
    // })
})
