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
  for (let i=0; i<bleng; i++) {
    if (blocks[i].getBoundingClientRect().top == 0){
      let a = i;
      if (delta > 0 && a+1 < bleng){

        let timer = setInterval(function(){
          window.scrollBy(0, document.documentElement.clientHeight / 100);
          if (blocks[a+1].getBoundingClientRect().top < 10) {
            window.scrollBy(0, blocks[a+1].getBoundingClientRect().top);
  					clearInterval(timer);
  					return;
  				}
        }, 3);
    	}else if (delta < 0 && a != 0) {

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
