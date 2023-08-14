function animate(obj ,constraint,callback){
   obj.timer = setInterval(function(){
var step =(constraint - obj.offsetLeft) / 10;
step = step > 0 ? Math.ceil(step) : Math.floor(step)
if(obj.offsetLeft == constraint){
  clearInterval(obj.timer);

if(callback){
  //调用函数
  callback();
}
}
  obj.style.left =obj.offsetLeft + step +'px';

 
},10);
}