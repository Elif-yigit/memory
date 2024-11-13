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


const d = new Date();  güncel tarihi almak için kullanılır.
toLocaleTimeString() fonksiyonu, bilgisayarın yerel saat dilimine göre saati döndürür.


 */
 
 
 let oyunlar = [1,2,3,4,5,6,7,8];

 oyunlar = oyunlar.concat(oyunlar);
//  console.log(oyunlar);

//  console.log(oyun);

let secilenKart=[];

oyunlar.sort(() => Math.random() - 0.5);

let skor =0;
let hamle =0;
const moves = document.querySelector('.moves');
const score = document.querySelector('.skor');
const menu = document.querySelector('.menu');
const dialog = document.querySelector('.dialog');
const btn = document.querySelector('.close');
// console.log(oyunlar);
 
 for (const oyun of oyunlar) {

  document.querySelector('.game').innerHTML += `<div class='gameActive'>${oyun}</div>`;
 }

const items = document.querySelectorAll('.gameActive');

 function aktifButonEkle () {
 
  if(this.classList.contains('gameActiveButon')) return;


   
   
  this.classList.add('gameActiveButon');
  secilenKart.push(this.innerText);
  console.log(secilenKart);
  moves.innerText ="Moves : " + hamle ;
  hamle++;
  
  if(secilenKart.length === 2) {

    if(secilenKart[0] == secilenKart[1]) {
     
      console.log('esit');

      const activeButonlar = document.querySelectorAll('.gameActiveButon');

      
      for(const sayi of activeButonlar) {

        sayi.classList.add('matched');
        
      }
     
      console.log(activeButonlar);
      skor++;
      score.innerText ="Skor : " + skor;
    } else {

      console.log('değil');
    }

    secilenKart = [];
   
  }

  const activeButonlar = document.querySelectorAll('.gameActive');

  setTimeout(() => {

    for(const sayi of activeButonlar) {
   
   sayi.classList.remove('gameActiveButon');
   sayi.classList.remove('matched');
  
  }
  } ,2000);

 
  
 }


 secilenKart = [];



function eslestir () {
  
 
  for (const item of items) {

    item.addEventListener('click', aktifButonEkle);
   
    // item.classList.add('eslesti');
   
    
  }
  
 
  
  

 if(skor === 8) {

   console.log('oyun bitti');
  
 }

}

eslestir ();

const demoElement = document.querySelector(".demo");
const d = new Date(); 
console.log(demoElement);  
if (demoElement) {
   demoElement.innerHTML = d.toLocaleTimeString();
} else {
   console.error('Element bulunamadı!');
}


function openMenu () {

  if (dialog.open) {
    console.log("Dialog open");
  } else {
    console.log("Dialog closed");
  }
}

menu.addEventListener('click' , () => {

  dialog.showModal();
  openMenu (dialog);
});

btn.addEventListener('click' , () => {

  dialog.close();
  // openMenu ();
});