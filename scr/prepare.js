function prepare() {
  let startArray = [
    {
      name: 'М\'яч баскетбольний',
      brand: 'Wilson NBA ALL TEAM',
      size: 350,
      weight: 600,
      mat: 'Гума',
      price: 799,
      pictname: '1.webp',
    },
    {
      name: 'Бадмінтон',
      brand: 'Talbot Torro',
      size: 500,
      weight: 140,
      mat: 'Алюміній',
      price: 1899,
      pictname: '2.webp',
    },
    {
      name: 'Ракетки',
      brand: 'Newt Cima ',
      size: 300,
      weight: 200,
      mat: 'Гума',
      price: 557,
      pictname: '3.webp',
    },
    {
      name: 'Конуси-фішки',
      brand: 'Easyfit EF-1680',
      size: 400,
      weight: 200,
      mat: 'Пластик',
      price: 555,
      pictname: '4.webp',
    },
    {
      name: 'Дартс',
      brand: 'Bambi MS 0097',
      size: 500,
      weight: 350,
      mat: 'Пластик',
      price: 267,
      pictname: '5.webp',
    },
    {
      name: 'М\'яч бейсбольний',
      brand: 'Newt Legioners Baseball',
      size: 100,
      weight: 150,
      mat: 'Шкіра',
      price: 135,
      pictname:'6.webp',
    }
  ];

  localStorage.clear();

  for (let i = 0; i < startArray.length; i++) {
    let row = startArray[i];
    let rowSt = JSON.stringify(row);
    localStorage.setItem(`${i}`, rowSt);
  }

  location.reload();
}
