const modal = $.modal({
  title: 'Спортивне спорядження',
  closable: true,
  content: `
        <div class="modal-form">
            <label for="name">Тип товару:</label><br>
            <input type="text" id="name" name="name" class="modal-form-field" placeholder="Введіть тип товару..."/><br><br>
            <label for="brand">Бренд :</label><br>
            <input type="text" id="brand" name="brand" class="modal-form-field" placeholder="Введіть бренд товару..."/><br><br>
            <label for="size">Розмір:</label><br>
            <input type="number" id="size" name="size" class="modal-form-field" placeholder="Введіть розмір товару..."/><br><br>
            <label for="weight">Вага:</label><br>
            <input type="number" id="weight" name="weight" class="modal-form-field" placeholder="Введіть вагу товару..."/><br><br>
            <label for="mat">Матеріал:</label><br>
            <select id="mat" name="mat" class="modal-form-field">
                <option value="Гума">Гума</option>
                <option value="Шкіра">Шкіра</option>
                <option value="Пластик">Пластик</option>
                <option value="Алюмній">Алюміній</option>
                <option value="Поліестер">Поліестер</option>
                <option value="Дерево">Дерево</option>
            </select><br>
            <label for="price">Ціна:</label><br>
            <input type="number" id="price" name="price" class="modal-form-field" placeholder="Введіть ціну товару..."/><br><br>
            <br>
            <div id= "img-prev-section">
                <img id="imgprev" src="" >
            </div>   
                <label for="file" id="label-select-img">Вибрати зображення:</label><br>
                <input type="file" id="imgfile" name="imgfile"><br><br>
            
            <button id="submitbtn" class="blue-button" onclick="myFunction()">Додати</button>
        </div> 
    `,
  width: '500px',
});

function calculateAverage() {
  let priceElements = document.getElementsByClassName('element-price');
  let totalPrice = 0;
  let count = priceElements.length;
  for (let i = 0; i < count; i++) {
    totalPrice += Number(priceElements[i].outerText);
  }
  let averagePrice = totalPrice / count;
  document.getElementById(
    'countresult'
  ).innerHTML = `Середня ціна: <b>${averagePrice} грн</b>`;
}
countbtn.addEventListener('click', calculateAverage);
