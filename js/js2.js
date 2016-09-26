function addHandler(object, event, handler) {
    object.addEventListener(event, handler, false);
}

addHandler(window, 'mousewheel', wheel);
window.onwheel = function(event){
  console.log(event.deltaY);
}

function wheel(event) {
  var delta;
  event = event || window.event;
  if (event.wheelDelta) {
    delta = event.wheelDelta;
    if (window.opera) delta = -delta;
  }else if (event.detail) {
    delta = -event.detail;
  }
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
  let blocks = document.getElementById('all').children;
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let bleng = blocks.length;
  for (let i=0; i<bleng; i++) {
    if (blocks[i].getBoundingClientRect().top == 0){
      let a = i;
      if (delta < 0 && a+1 < bleng){
        let timer = setInterval(function(){
          window.scrollBy(0, document.documentElement.clientHeight / 100);
          if (blocks[a+1].getBoundingClientRect().top < 10) {
            window.scrollBy(0, blocks[a+1].getBoundingClientRect().top);
  					clearInterval(timer);
  					return;
  				}
        }, 3);
    	}else if (delta > 0 && a != 0) {
        let timer = setInterval(function(){
          window.scrollBy(0, -document.documentElement.clientHeight / 100);
          if (blocks[a-1].getBoundingClientRect().top > 10) {
            window.scrollBy(0, blocks[a-1].getBoundingClientRect().top);
  					clearInterval(timer);
  					return;
  				}else if (blocks[a-1].getBoundingClientRect().top == 0) {
  					clearInterval(timer);
  					return;
          }
        }, 3);
    	}
    }
  }
}
