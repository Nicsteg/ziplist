const letterList = ['a', 'b', 'c'];
const numList = [1, 2, 3];
function zipList(list, list2) {
  const tempArr = [];
  for (let i = 0; i < list.length; i++) {
    tempArr.push(list[i]);
    tempArr.push(list2[i]);
  } return tempArr;
}

console.log(zipList(numList, letterList));

function zipListTheSimpleWay(list, list2) {
  return _.flatten(_.zip(list, list2));
}

console.log(zipListTheSimpleWay(numList, letterList));
