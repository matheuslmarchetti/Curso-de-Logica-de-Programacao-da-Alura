var tela = document.querySelector("canvas");
var pincel = tela.getContext('2d');
//Cabeça
pincel.fillStyle = 'darkgreen';
pincel.fillRect(200, 50, 350, 300);
//Olhos
pincel.fillStyle = 'black';
pincel.fillRect(250, 110, 90, 90);
pincel.fillRect(410, 110, 90, 90);
//Nariz
pincel.fillStyle = 'black';
pincel.fillRect(340, 200, 70, 100);
//Boca ou Barba
pincel.fillStyle = 'black';
pincel.fillRect(300, 240, 40, 110);
pincel.fillRect(410, 240, 40, 110);