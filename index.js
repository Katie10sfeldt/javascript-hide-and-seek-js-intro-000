
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
  for (let i = 1; i < list.length; i++) {
    return list[i].innerHTML = (i + n).toString();
  }
}
