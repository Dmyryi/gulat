var elemLeft, elemTop, maxElemLeft, maxElemTop, elem;

elem = document.getElementById("slavik");

maxElemLeft = document.documentElement.clientWidth - elem.offsetWidth;
maxElemTop = document.documentElement.clientHeight - elem.offsetHeight;

elem.onmousemove = handler;

function handler() {
  elemLeft = Math.random() * maxElemLeft;
  elem.style.left = elemLeft + "px";
  elemTop = Math.random() * maxElemTop;
  elem.style.top = elemTop + "px";
}
