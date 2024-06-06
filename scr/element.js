function buildElementToPage(id, elem) {
  const element = document.createElement('div');
  element.classList.add('element');
  element.insertAdjacentHTML(
    'afterbegin',
    `
    <div class="element-data">
        <img src="img/${elem.pictname}" class="element-img">
        <div class="element-name">${elem.name}</div>
        <p class="element-text">Бренд: <span class="element-brand">${elem.brand}</span></p> 
        <p class="element-text">Розмір: <span class="element-size">${elem.size}</span> мм</p> 
        <p class="element-text">Вага: <span class="element-weight">${elem.weight}</span> гр</p> 
        <p class="element-text">Матеріал: <span class="element-mat">${elem.mat}</span></p>
        <p class="element-text">Ціна: <span class="element-price">${elem.price}</span> грн</p> 
    </div>
    <div class="element-footer">
        <button class="blue-button" onclick="modifyModalToEdit(${id})">Редагувати</button><span> </span> 
        <button class="red-button" onclick="removeElementFromStorage(${id})">Видалити</button>
    </div>
    <p></p>
    `
  );
  document.getElementsByClassName('displayzone')[0].appendChild(element);
}

function modifyModalToCreate() {
  document.getElementsByClassName('modal-title')[0].innerText =
    'Додати новий товар';
  document
    .getElementById('submitbtn')
    .setAttribute('onclick', `addElementToLocalStorage()`);
  document.getElementById('submitbtn').innerText = 'Створити';
  document
    .getElementById('img-prev-section')
    .setAttribute('style', 'display: none');
  document.getElementById('label-select-img').innerText = 'Вибрати зображення:';
  modal.open();
}

function modifyModalToEdit(id) {
  document.getElementsByClassName('modal-title')[0].innerText = 'Редагувати';
  document.getElementById('submitbtn').innerText = 'Оновити';
  document
    .getElementById('submitbtn')
    .setAttribute('onclick', `editElementInLocalStorage(${id})`);
  let edElem = JSON.parse(localStorage.getItem(id));
  document.getElementById('name').value = edElem.name;
  document.getElementById('brand').value = edElem.brand;
  document.getElementById('size').value = edElem.size;
  document.getElementById('weight').value = edElem.weight;
  document.getElementById('mat').value = edElem.mat;
  document.getElementById('price').value = edElem.price;
  document
    .getElementById('imgprev')
    .setAttribute('src', `img/${edElem.pictname}`);
  document.getElementById('label-select-img').innerText =
    'Обрати інше зображення:';
  document
    .getElementById('img-prev-section')
    .setAttribute('style', 'display: block');
  modal.open();
}

function showPrewImg() {
  let filename = document
    .getElementById('imgfile')
    .value.replace(/C:\\fakepath\\/, '');
  document.getElementById('imgprev').setAttribute('src', `img/${filename}`);
  document.getElementById('label-select-img').innerText =
    'Обрати інше зображення:';
  document
    .getElementById('img-prev-section')
    .setAttribute('style', 'display: block');
}
document.getElementById('imgfile').addEventListener('change', showPrewImg);


function validName() {
  let valid = true;
  let showMsg = '';
  let formName = document.getElementById('name').value.trim();

  if (!formName) {
    showMsg = 'Назву не введено. ';
    valid = false;
  }
  if (valid) {
    return valid;
  } else {
    alert(showMsg);
  }
}

function validImg() {
  if (document.getElementById('imgfile').value) {
    return true;
  } else {
    alert('Зобрження не обрано. ');
    return false;
  }
}

function addElementToLocalStorage() {
  if (validName() && validImg()) {
    let keyArr = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = Number(localStorage.key(i));
      keyArr[i] = key;
    }
    const freeKey = Math.max(...keyArr) + 1;
    let filename = document
      .getElementById('imgfile')
      .value.replace(/C:\\fakepath\\/, '');
    const newElement = {};
    newElement.name = document.getElementById('name').value;
    newElement.brand = document.getElementById('brand').value;
    newElement.size = document.getElementById('size').value;
    newElement.weight = document.getElementById('weight').value;
    newElement.mat = document.getElementById('mat').value;
    newElement.price = document.getElementById('price').value;
    newElement.pictname = filename;
    let rowSt = JSON.stringify(newElement);
    localStorage.setItem(`${freeKey}`, rowSt);
    modal.close();
    setTimeout(location.reload(), 1000);
  }
}

function editElementInLocalStorage(id) {
  if (validNameAndVolume()) {
    let edElem = JSON.parse(localStorage.getItem(id));
    edElem.name = document.getElementById('name').value;
    edElem.brand = document.getElementById('brand').value;
    edElem.size = document.getElementById('size').value;
    edElem.weight = document.getElementById('weight').value;
    edElem.mat = document.getElementById('mat').value;
    edElem.price = document.getElementById('price').value;
    if (document.getElementById('imgfile').value) {
      let filename = document
        .getElementById('imgfile')
        .value.replace(/C:\\fakepath\\/, '');
      edElem.pictname = filename;
    }
    let rowSt = JSON.stringify(edElem);
    localStorage.setItem(`${id}`, rowSt);
    modal.close();
    setTimeout(location.reload(), 1000);
  }
}

function removeElementFromStorage(id) {
  if (confirm('Видалити товар?')) {
    localStorage.removeItem(id);
    location.reload();
  }
}

let keyNumbers = Object.keys(localStorage).length;
for (let k = 0; k < keyNumbers; k++) {
  let keyName = localStorage.key(k);
  let row = JSON.parse(localStorage.getItem(keyName));
  buildElementToPage(keyName, row);
}
