(function(){
  const scene=document.getElementById('scene1');
  if(!scene||scene.querySelector('.landing-snowfall')) return;
  const snow=document.createElement('div'); snow.className='landing-snowfall'; snow.setAttribute('aria-hidden','true');
  for(let i=0;i<105;i++){
    const flake=document.createElement('span'); flake.className='snowflake';
    flake.style.left=(Math.random()*100)+'%';
    flake.style.setProperty('--flake-size',(1.5+Math.random()*4.2)+'px');
    flake.style.setProperty('--fall-time',(8+Math.random()*15)+'s');
    flake.style.setProperty('--fall-delay',(-Math.random()*22)+'s');
    flake.style.setProperty('--drift',(-55+Math.random()*110)+'px');
    flake.style.setProperty('--flake-opacity',(0.32+Math.random()*0.62).toFixed(2));
    flake.style.setProperty('--twinkle',(2.5+Math.random()*5)+'s');
    snow.appendChild(flake);
  }
  scene.appendChild(snow);
})();
