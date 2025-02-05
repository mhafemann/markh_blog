var c=Object.defineProperty;var d=(a,t,s)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s;var h=(a,t,s)=>d(a,typeof t!="symbol"?t+"":t,s);import{s as l,n,o as u}from"../chunks/DYjCt7Qj.js";import{S as f,i as m,d as p,a as w,b as o,c as y,n as g,f as v}from"../chunks/B75wjByV.js";class x{constructor(t){h(this,"x");h(this,"y");h(this,"radius",5);h(this,"vx",Math.random()*1-.5);h(this,"vy",Math.random()*1-.5);h(this,"pushX",0);h(this,"pushY",0);h(this,"friction",.8);this.effect=t,this.effect=t,this.x=Math.floor(this.radius+Math.random()*(this.effect.width-this.radius*2)),this.y=Math.floor(this.radius+Math.random()*(this.effect.height-this.radius*2))}draw(t){t.beginPath(),t.arc(this.x,this.y,this.radius,0,Math.PI*2,!1),t.fill()}update(){if(this.effect.mouse.pressed===!0){const t=this.x-this.effect.mouse.x,s=this.y-this.effect.mouse.y,i=Math.hypot(t,s),e=this.effect.mouse.radius/i;if(i<this.effect.mouse.radius){const r=Math.atan2(s,t);this.pushX+=Math.cos(r)*e,this.pushY+=Math.sin(r)*e}}this.x+=(this.pushX*=this.friction)+this.vx,this.y+=(this.pushY*=this.friction)+this.vy,this.x<this.radius?(this.x=this.radius,this.vx*=-1):this.x>this.effect.width-this.radius&&(this.x=this.effect.width-this.radius,this.vx*=-1),this.y<this.radius?(this.y=this.radius,this.vy*=-1):this.y>this.effect.height-this.radius&&(this.y=this.effect.height-this.radius,this.vy*=-1)}reset(){this.x=this.radius+Math.random()*(this.effect.width-this.radius*2),this.y=this.radius+Math.random()*(this.effect.height-this.radius*2)}updateFriction(t){this.friction=t}}class M{constructor(t,s){h(this,"width");h(this,"height");h(this,"particles",[]);h(this,"numberOfParticles",0);h(this,"paused",!1);h(this,"maxParticleDistance",0);h(this,"mouse",{x:0,y:0,pressed:!1,radius:150});this.canvas=t,this.context=s,this.canvas=t,this.context=s,this.width=this.canvas.width,this.height=this.canvas.height,this.numberOfParticles=Math.floor(this.width*this.height/4e3),this.maxParticleDistance=125,this.particles.length===0&&this.createParticles(),console.log(this.particles.length),window.addEventListener("keydown",i=>{i.code==="Space"&&(this.paused=!this.paused)}),window.addEventListener("resize",P(i=>{this.resize(i.target.window.innerWidth,i.target.window.innerHeight)},100)),window.addEventListener("touchstart",i=>{this.mouse.pressed=!0,this.mouse.x=i.touches[0].clientX,this.mouse.y=i.touches[0].clientY}),window.addEventListener("touchmove",i=>{this.mouse.x=i.touches[0].clientX,this.mouse.y=i.touches[0].clientY}),window.addEventListener("touchend",i=>{this.mouse.pressed=!1}),window.addEventListener("mousedown",i=>{this.mouse.pressed=!0,this.mouse.x=i.x,this.mouse.y=i.y}),window.addEventListener("mousemove",i=>{this.mouse.x=i.x,this.mouse.y=i.y}),window.addEventListener("mouseup",i=>{this.mouse.pressed=!1})}createParticles(){for(let t=0;t<this.numberOfParticles;t++)this.particles.push(new x(this))}handleParticles(t){this.connectParticles(t),this.particles.forEach(s=>{s.draw(t),!this.paused&&s.update()})}connectParticles(t){let s;for(let i=0;i<this.particles.length;i++)for(let e=i;e<this.particles.length;e++){const r=Math.sqrt((this.particles[i].x-this.particles[e].x)**2+(this.particles[i].y-this.particles[e].y)**2);r<this.maxParticleDistance&&(s=1-r/this.maxParticleDistance,t.globalAlpha=s,t.lineWidth=1,t.beginPath(),t.moveTo(this.particles[i].x,this.particles[i].y),t.lineTo(this.particles[e].x,this.particles[e].y),t.stroke())}}resize(t,s){this.canvas.width=t,this.canvas.height=s,this.width=t,this.height=s,this.context.fillStyle="white",this.context.clearRect(0,0,this.width,this.height);const i=this.context.createLinearGradient(0,0,this.canvas.width,this.canvas.height);i.addColorStop(0,"white"),i.addColorStop(.5,"magenta"),i.addColorStop(1,"blue"),this.context.fillStyle=i,this.context.strokeStyle="white",this.particles.forEach(e=>{e.reset()})}}const P=(a,t=300)=>{let s;return function(...i){clearTimeout(s),s=setTimeout(()=>a.apply(this,i),t)}};function S(a){let t,s='<canvas class="z-40" id="canvas1"></canvas>';return{c(){t=v("div"),t.innerHTML=s,this.h()},l(i){t=y(i,"DIV",{class:!0,id:!0,"data-svelte-h":!0}),g(t)!=="svelte-1l0m0ce"&&(t.innerHTML=s),this.h()},h(){o(t,"class","z-40"),o(t,"id","container")},m(i,e){w(i,t,e)},p:n,i:n,o:n,d(i){i&&p(t)}}}function E(a){let t,s,i,e;return u(async()=>{t=document.getElementById("canvas1"),s=t.getContext("2d"),t.width=window.innerWidth,t.height=window.innerHeight,s.clearRect(0,0,t.width,t.height),i=s.createLinearGradient(0,0,t.width,t.height),i.addColorStop(0,"lime"),i.addColorStop(.5,"magenta"),i.addColorStop(1,"blue"),s.fillStyle=i,s.fillStyle=i,s.strokeStyle="#4c4d4c",e||(e=new M(t,s));function r(){s.clearRect(0,0,t.width,t.height),e.handleParticles(s),requestAnimationFrame(r)}r()}),[]}class _ extends f{constructor(t){super(),m(this,t,E,S,l,{})}}export{_ as component};
