 /*

 dizi oluştur.
 dizi'yi iki katına çıkar.
 diziyi karıştır.
 elemanları console yazdır kontrol et sonra 
 elemanları div  içine  innerHtml ile yazdır
 bütüm elemanları yakalamak için for döngüsü kullanmak gerekiyor
 her ögeye tıkladığında çalışmasını istediğim için önce fonksiyon oluşturmak gerekiyor
 ve bu her öge için gerekli olduğu için burda for döngüsü kullanmalıyım.
 html'e yazdırdıktan sonra bu kutuların kapanıp açılmasını istiyorum 
 bunun için önce buton olarak değişken atamalıyım sonra bu butonların 
 hepsini for ile yakalamalıyım
 sonra event atayım yeni bir fonksiyon oluşşturmam gerek
 bu fonksiyonda bu kutuların aktif olduğunu anlamam için 
 toggle ile class atamam gerekiyor.


settime out ile açılan sayıların süresini belirle
esleşme fonksiyonu oluştur 
for ile bütün elemanları yakalayıp if koşulu belirle
eşleşen sayıları belirt
html skoru innerhtml ile bağla
 skor başlangıç için 0 ile başla 
 sonra birer arttır





 */
 
 
 let oyunlar = [1,2,3,4,5,6,7,8];

 oyunlar = oyunlar.concat(oyunlar);
//  console.log(oyunlar);

//  console.log(oyun);

let secilenKart=[];

oyunlar.sort(() => Math.random() - 0.5);

let skor =0;

const score = document.querySelector('.skor');
// console.log(oyunlar);
 
 for (const oyun of oyunlar) {

  document.querySelector('.game').innerHTML += `<div class='gameActive'>${oyun}</div>`;
 }

const items = document.querySelectorAll('.gameActive');

 function aktifButonEkle () {

  this.classList.add('gameActiveButon');
  setTimeout(() => {
   this.classList.remove('gameActiveButon');

  } ,2000);

 
  
 }

 secilenKart = [];



function eslestir () {

  for (const item of items) {

    item.addEventListener('click', aktifButonEkle);
    skor++;
    item.classList.add('eslesti');
    secilenKart.push(oyunlar);
  }

  score.innerHTML =`<div>Skor : ${skor}</div>` 
  

 if(skor === 16) {

   console.log('oyun bitti');
  
 }

}

eslestir ();

const demoElement = document.querySelector(".demo");
const d = new Date(); 
console.log(demoElement);  // Öğeyi kontrol et
if (demoElement) {
   demoElement.innerHTML = d.toLocaleTimeString();
} else {
   console.error('Element bulunamadı!');
}
