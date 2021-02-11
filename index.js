
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
  var list = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < list.length; i++) {
    var item = parseInt(list[i], 10);
    console.log(item);
    list[i].toString();
  }
  return list;
}
