function getArrayFromStorage() {
  let keyNumbers = Object.keys(localStorage).length;
  let elm = {};
  let incomingArr = [];
  for (let i = 0; i < keyNumbers; i++) {
    let keyName = localStorage.key(i);
    let row = JSON.parse(localStorage.getItem(keyName));
    elm = {};
    elm.id = keyName;
    elm.name = row.name;
    elm.brand = row.brand;
    elm.size = row.size;
    elm.weight = row.weight;
    elm.mat = row.mat;
    elm.price = row.price;
    elm.pictname = row.pictname;
    incomingArr.push(elm);
  }
  return incomingArr;
}

function sortElements() {
  let checkBox = document.getElementById('sortcheckbox');
  if (checkBox.checked == true) {
    let sortArr = getArrayFromStorage();
    function byField(field) {
      return (a, b) => (+a[field] > +b[field] ? 1 : -1);
    }
    sortArr.sort(byField('price'));
    document.getElementsByClassName('displayzone')[0].innerHTML = '';
    for (let n = 0; n < sortArr.length; n++) {
      let tempEl = sortArr[n];
      buildElementToPage(tempEl.id, tempEl);
    }
  } else {
    setTimeout(location.reload(), 1000);
  }
}

function searchElements() {
  document.getElementsByClassName('displayzone')[0].innerHTML = '';
  let searchtArr = getArrayFromStorage();
  let str = document.querySelector('#csearch').value;
  let serchStr = str.toLowerCase();
  let regExp = new RegExp(`${serchStr}`, 'gi');
  let isFounded = false;
  for (let i = 0; i < searchtArr.length; i++) {
    let row = searchtArr[i];
    let strN = row.name.toLowerCase();
    let strB = row.brand.toLowerCase();
    let strS = row.size;
    let strW = row.weight;
    let strM = row.mat.toLowerCase();
    let strP = row.price;
    if (
      regExp.test(strN) ||
      regExp.test(strB) ||
      regExp.test(strS) ||
      regExp.test(strW) ||
      regExp.test(strM) ||
      regExp.test(strP)
    ) {
      buildElementToPage(row.id, row);
      isFounded = true;
    }
  }
  if (!isFounded) {
    document.getElementsByClassName('displayzone')[0].innerHTML =
      '<h1 style="color:red; width:100%; text-align: center;" >Немає збігів</h1>';
  }
}

refresh = () => location.reload();

sortcheckbox.addEventListener('click', sortElements);
searchbtn.addEventListener('click', searchElements);
cancelbtn.addEventListener('click', refresh);
