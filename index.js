
function getFirstSelector(selector) {
  return document.querySelector(selector);
}


function nestedTarget() {
  return document.querySelector('#nested .target');
}


function deepestChild() {
  const item = document.querySelector('#grand-node div div div div')
  return item;
}


function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = (i + 1).toString();
  }
}
