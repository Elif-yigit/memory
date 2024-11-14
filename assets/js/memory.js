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
 let secilenKart=[];
//  console.log(oyunlar);

//  console.log(oyun);





let skor =0;
let hamle =0;
const moves = document.querySelector('.moves');
const score = document.querySelector('.skor');
const menu = document.querySelector('.menu');
const dialog = document.querySelector('.dialog');

// console.log(oyunlar);



function init() {


  skor =0;
  hamle=0;
  moves.innerHTML = `Moves: ${hamle}`;
  score.innerHTML = `Skor: ${skor}`;

  const karistirilmisSayilar = oyunlar.sort(() => Math.random() - 0.5);
  const gameContainer = document.querySelector('.game');
  gameContainer.innerHTML = "";

  for (const oyun of oyunlar) {

    document.querySelector('.game').innerHTML += `<div class='gameActive'>${oyun}</div>`;
   }

   const items = document.querySelectorAll('.gameActive');
   
  for (const item of items) {

    item.addEventListener('click', aktifButonEkle);
   
  }
}
 
init();



 function aktifButonEkle () {
 
  if(this.classList.contains('gameActiveButon') || secilenKart.length == 2) return;

  this.classList.add('gameActiveButon');
  secilenKart.push(this.innerText);
  console.log(secilenKart);
  hamle++;
  moves.innerText ="Moves : " + hamle ;
  
  
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
      if(skor === 8) {

        console.log('oyun bitti');
       
      }
    } 

    setTimeout(() => {
      secilenKart = [];
      for(const sayi of activeButonlar) {
     
     sayi.classList.remove('gameActiveButon');
   
      }
    } ,1000);
  
  }

  const activeButonlar = document.querySelectorAll('.gameActive');

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

newGameBtn.addEventListener('click',init);