import getData from './lib/service.js';

// getData fonksiyonunu çağır ve sonucu logla
getData(1)
  .then(result => console.log(result))
  .catch(error => console.error('Hata:', error));