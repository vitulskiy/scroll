window.onkeydown = function(event){
  if (event.keyCode == 40 || event.keyCode == 32){
    let wheelObj = {deltaY: 1};
    wheel(wheelObj);
  }else if (event.keyCode == 38){
    let wheelObj = {deltaY: -1};
    wheel(wheelObj);
  }
};
window.onwheel = function(event){
  if (event.deltaY > 0){
    let wheelObj = {deltaY: 1};
    wheel(wheelObj);
  }else if (event.deltaY < 0){
    let wheelObj = {deltaY: -1};
    wheel(wheelObj);
  }
};
function wheel(event){
  let delta = event.deltaY;
  let blocks = document.getElementById('all').children;
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  let bleng = blocks.length;
  for (let a=0; a<bleng; a++) {
    if (blocks[a].getBoundingClientRect().top == 0){
      if (delta > 0 && a+1 < bleng || delta < 0 && a != 0){
        let timer = setInterval(function(){
          window.scrollBy(0, document.documentElement.clientHeight*delta / 100);
          let scroll = blocks[a+delta].getBoundingClientRect().top;
          if (scroll < 10*delta && delta > 0 || scroll > 10*delta && delta < 0) {
            window.scrollBy(0, scroll);
  					clearInterval(timer);
  					return;
  				}else if (scroll == 0) {
  					clearInterval(timer);
  					return;
          }
        }, 3);
    	}
    }
  }
}
