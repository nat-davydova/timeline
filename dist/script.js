//DOM STRINGS OBJECT
const DOM = {
  date: document.querySelectorAll('.timeline__date'),
  timelineBar: document.querySelector('.timeline__bar') };


//TIMELINE ELEM DATE STYLES (background)
const __getBGImage = () => {

  const compStyle = getComputedStyle(DOM.timelineBar);

  return compStyle.backgroundImage;

};

const __getBGSize_height = () => {

  const timebarHeight = DOM.timelineBar.offsetHeight;

  return timebarHeight;

};

const __getBGPos_y = dateElem => {

  const timelinebarBox = DOM.timelineBar.getBoundingClientRect();

  const dateBox = dateElem.getBoundingClientRect();

  const pos_y = dateBox.top - timelinebarBox.top;

  return pos_y;

};

const setDateBG = () => {

  const bgImg = __getBGImage();

  const bgHeight = __getBGSize_height();

  DOM.date.forEach(elem => {

    //setting bgImage
    elem.style.backgroundImage = bgImg;

    //setting bgSize
    elem.style.backgroundSize = `100% ${bgHeight}px`;

    //setting bgPosition
    const dateOffset = __getBGPos_y(elem);

    elem.style.backgroundPosition = `0 -${dateOffset}px`;

  });

};

//ONLOAD FUNCTION
window.addEventListener('load', () => {

  //set date background styles
  setDateBG();

});