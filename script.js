var progNum = Array.from(document.querySelectorAll(".pro"));

function progress(i) {
    var progWidth = 1;
    setInterval(function() {
        if(progWidth < progNum[i].getAttribute("data-prog")) {
            progWidth += 1
        }
        progNum[i].style.width = progWidth + "%"
        progNum[i].textContent = progWidth + "%"
    },50)
}

window.onload = function() {
    setTimeout(function(){progress(0)},0)
    setTimeout(function(){progress(1)},5000)
    setTimeout(function(){progress(2)},9000)
    setTimeout(function(){progress(3)},13000)
    setTimeout(function(){progress(4)},16000)
    setTimeout(function(){progress(5)},18000)
    setTimeout(function(){progress(6)},20000)
    setTimeout(function(){progress(7)},22000)
    setTimeout(function(){progress(8)},24000)
    setTimeout(function(){progress(9)},26000)
    setTimeout(function(){progress(10)},28000)
    setTimeout(function(){progress(11)},30000)
    setTimeout(function(){progress(12)},32000)
    setTimeout(function(){progress(13)},34000)
    setTimeout(function(){progress(14)},36000)
    setTimeout(function(){progress(15)},38000)
    setTimeout(function(){progress(16)},40000)
    setTimeout(function(){progress(17)},42000)
}

// Rubber Slider












// parallax tilt effect cards
class parallaxTiltEffect {

    constructor({element, tiltEffect}) {
  
      this.element = element;
      this.container = this.element.querySelector(".container");
      this.size = [300, 360];
      [this.w, this.h] = this.size;
  
      this.tiltEffect = tiltEffect;
  
      this.mouseOnComponent = false;
  
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.handleMouseEnter = this.handleMouseEnter.bind(this);
      this.handleMouseLeave = this.handleMouseLeave.bind(this);
      this.defaultStates = this.defaultStates.bind(this);
      this.setProperty = this.setProperty.bind(this);
      this.init = this.init.bind(this);
  
      this.init();
    }
  
    handleMouseMove(event) {
      const {offsetX, offsetY} = event;
  
      let X;
      let Y;
  
      if (this.tiltEffect === "reverse") {
        X = ((offsetX - (this.w/2)) / 3) / 3;
        Y = (-(offsetY - (this.h/2)) / 3) / 3;
      }
  
      else if (this.tiltEffect === "normal") {
        X = (-(offsetX - (this.w/2)) / 3) / 3;
        Y = ((offsetY - (this.h/2)) / 3) / 3;
      }
  
      this.setProperty('--rY', X.toFixed(2));
      this.setProperty('--rX', Y.toFixed(2));
  
      this.setProperty('--bY', (80 - (X/4).toFixed(2)) + '%');
      this.setProperty('--bX', (50 - (Y/4).toFixed(2)) + '%');
    }
  
    handleMouseEnter() {
      this.mouseOnComponent = true;
      this.container.classList.add("container--active");
    }
  
    handleMouseLeave() {
      this.mouseOnComponent = false;
      this.defaultStates();
    }
  
    defaultStates() {
      this.container.classList.remove("container--active");
      this.setProperty('--rY', 0);
      this.setProperty('--rX', 0);
      this.setProperty('--bY', '80%');
      this.setProperty('--bX', '50%');
    }
  
    setProperty(p, v) {
      return this.container.style.setProperty(p, v);
    }
  
    init() {
      this.element.addEventListener('mousemove', this.handleMouseMove);
      this.element.addEventListener('mouseenter', this.handleMouseEnter);
      this.element.addEventListener('mouseleave', this.handleMouseLeave);
    }
  
  }
  
  const $ = e => document.querySelector(e);
  
  const wrap1 = new parallaxTiltEffect({
    element: $('.wrap--1'),
    tiltEffect: 'reverse'
  });
  
  const wrap2 = new parallaxTiltEffect({
    element: $('.wrap--2'),
    tiltEffect: 'normal'
  });
  
  const wrap3 = new parallaxTiltEffect({
    element: $('.wrap--3'),
    tiltEffect: 'reverse'
});















// rating experience-input[type='range']
let range = document.querySelector(".range");
let slider = document.querySelector(".slider");
let gradientStop = document.querySelector("#gradient-stop");
let gradientGrey = document.querySelector("#gradient-grey");

let colorBad = "#ff5722";
let colorOk = "#ff9800";
let colorGood = "#36d896";
let colorGreat = "#3f51b5";

slider.addEventListener("input", function () {
  checkSliderValue(this);
});

function checkSliderValue(slider) {
  gradientGrey.setAttribute("offset", 100 - slider.value + "%");
  
  if (slider.value > 0 && slider.value <= 25) {
    range.closest(".row").classList.add("bad");
    range.closest(".row").classList.remove("ok", "great", "good");
    gradientStop.setAttribute("stop-color", colorBad);
  }
  if (slider.value > 25 && slider.value <= 50) {
    range.closest(".row").classList.add("ok");
    range.closest(".row").classList.remove("bad", "great", "good");
    gradientStop.setAttribute("stop-color", colorOk);
  }
  if (slider.value > 50 && slider.value <= 75) {
    range.closest(".row").classList.add("good");
    range.closest(".row").classList.remove("ok", "great", "bad");
    gradientStop.setAttribute("stop-color", colorGood);
  }
  if (slider.value > 75 && slider.value <= 100) {
    range.closest(".row").classList.add("great");
    range.closest(".row").classList.remove("ok", "bad", "good");
    gradientStop.setAttribute("stop-color", colorGreat);
  }
}

checkSliderValue(slider);






//   morphing submit button
window.addEventListener("DOMContentLoaded",() => {
	const btn = document.querySelector("button");
	var doneTimeout = null,
		resetTimeout = null;

	if (btn) {
		btn.addEventListener("click",function() {
			const runClass = "btn--running";
			const doneClass = "btn--done";
			// `.btn--running .btn__progress-fill` `stroke-dashoffset` duration in ms
			const submitDuration = 2000;
			const resetDuration = 1500;

			// fake the submission
			this.disabled = true;
			this.classList.add(runClass);

			clearTimeout(doneTimeout);
			clearTimeout(resetTimeout);

			doneTimeout = setTimeout(() => {
				this.classList.remove(runClass);
				this.classList.add(doneClass);
				
				// reset the button
				resetTimeout = setTimeout(() => {
					this.disabled = false;
					this.classList.remove(doneClass);
				}, resetDuration);

			}, 600 + submitDuration);
		});
	}
});
