var nomeFiguras
	= ["Rectangulo", "Piramide", "Circulo", "Triangulo",
		"Paralelepido", "Quadrado", "Cilindro", "cubo", "Nenhum"];
var vector_label = [
	document.getElementById("label1"),
	document.getElementById("label2"),
	document.getElementById("label3"),
	document.getElementById("label4")
];
var cubo = {
	function( cubo ) {
		cubo.clearRect(0, 0, 350, 280);

		cubo.beginPath();
		cubo.fillStyle = "red";
		cubo.fillRect(60, 80, 180, 180);
		cubo.fillStyle = "pink";
		cubo.moveTo(60, 80);
		cubo.lineTo(140, 0);
		cubo.lineTo(320, 0);
		cubo.lineTo(240, 80);
		cubo.lineTo(60, 80);
		cubo.moveTo(240, 80);
		cubo.fillStyle = "brown";
		cubo.lineTo(320, 0);
		cubo.lineTo(320, 180);
		cubo.lineTo(240, 260);
		cubo.lineTo(240, 80);
		cubo.closePath();
		cubo.stroke();
		
		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[7];
	}
};
var piramide = {
	function(ctx6) {
		ctx6.clearRect(0, 0, 350, 280);
		
		//Canvas para "Piramide"
		ctx6.beginPath();
		ctx6.moveTo(180, 40);	// ponto a - b
		ctx6.lineTo(60, 260);
		ctx6.lineTo(120, 180);
		ctx6.lineTo(180, 40);
		ctx6.lineTo(260, 260);
		ctx6.lineTo(60, 260);
		ctx6.moveTo(120, 180);
		ctx6.lineTo(320, 180);
		ctx6.lineTo(260, 260);
		ctx6.moveTo(180, 40);
		ctx6.lineTo(320, 180);
		ctx6.closePath();
		ctx6.stroke();

		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[1];
	}
};
var quadrado = {
	function(ctx5) {
		ctx5.clearRect(0, 0, 350, 280);
		
		//Canvas para "Quadrado"
		ctx5.strokeRect(80, 20, 200, 200);

		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[5];
	}
};
var cilindro = {
	function(ctxcil) {
		ctxcil.clearRect(0, 0, 350, 280);   // Limpa canvas
		
		//Canvas para "Cilindro"
		ctxcil.beginPath();
		ctxcil.ellipse(120, 30, 50, 10, 0, 0, 2 * Math.PI);
		ctxcil.fillStyle = "red";
        ctxcil.fill();
        ctxcil.ellipse(120, 120, 50, 10, 0, 0, Math.PI);
		ctxcil.moveTo(70, 30);
        ctxcil.lineTo(70, 120);
		ctxcil.closePath();
		ctxcil.stroke();
		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[6];
	}
};
var paralelopipido = {
	function(ctx71) {
		ctx71.clearRect(0, 0, 350, 280);
		
		//Canvas para "Paralelepido"
		ctx71.strokeRect(20, 60, 120, 60);
		ctx71.strokeRect(60, 40, 120, 60);
		ctx71.beginPath();
		ctx71.moveTo(20, 60);
		ctx71.lineTo(60, 40);
		ctx71.moveTo(140, 60);
		ctx71.lineTo(180, 40);
		ctx71.moveTo(20, 120);
		ctx71.lineTo(60, 100);
		ctx71.moveTo(140, 120);
		ctx71.lineTo(180, 100);
		ctx71.stroke();
		ctx71.closePath();

		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[4];
	}
};
var triangulo = {
	function(ctx3) {
		ctx3.clearRect(0, 0, 350, 280);
		
		//Canvas para "Triangulo"
		ctx3.beginPath();
		ctx3.moveTo(150, 10);
		ctx3.lineTo(40, 250);
		ctx3.lineTo(250, 250);
		ctx3.closePath();
		ctx3.stroke();

		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[3];
	}
};
var circulo = {
	op_certa:"circulo",
	function(ctx2) {
		ctx2.clearRect(0, 0, 350, 280);
		 
		//Canvas para "Circulo"
		ctx2.beginPath();
		ctx2.arc(180, 130, 100, 0, 2 * Math.PI);
		ctx2.stroke();
		
		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[2];
	}
};
var rectangulo = {
	op_certa:"rectangulo",
	function(ctx) {
		//Canvas para Rectangulo
		ctx.clearRect(0, 0, 350, 280);

		ctx.fillStyle = "#000000";
		ctx.strokeRect(50, 50, 240, 140);

		var teste = vector_label[0];
		teste.innerHTML = nomeFiguras[0];
	}
};

var vector_figuras = [rectangulo, circulo,
	triangulo, piramide,
	quadrado, cilindro,
	paralelopipido, cubo];

var next = document.getElementById("button1");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var left = document.getElementById("restantes");
var count = vector_figuras.length - 1;
var rad = document.getElementById("radio-button");
var certa = document.getElementById("certo");
var errado = document.getElementById("errado");
var radio = document.getElementsByName("radio");
var countCertas = 0, countErradas = 0;

var span1 = document.getElementById("span1");
var span2 = document.getElementById("span2");
var span3 = document.getElementById("span3");
var span4 = document.getElementById("span4");

var cont_radio = document.getElementById( "radio-button" );
var pontos = 0;

span1.onclick = function(){
    
	var body = document.getElementById( "container" );
	body.hidden;
	
    var radio = span1.childNodes[0];
    var label = span1.childNodes[1];
    radio.checked = true;
    label.style.color = "green";
  	
   	countCertas++;
	
};

span2.onclick = function(){
    
    var radio = span2.childNodes[0];
    var label = span2.childNodes[1];
    radio.checked = true;
    label.style.color = "red";
	
	countErradas++;
	
};

span3.onclick = function(){
    
    var radio = span3.childNodes[0];
    var label = span3.childNodes[1];
    radio.checked = true;
    label.style.color = "red";
	
	countErradas++;
};

span4.onclick = function(){
    
    var radio = span4.childNodes[0];
    var label = span4.childNodes[1];
    radio.checked = true;
    label.style.color = "red";
	
	countErradas++;
};

var k = 1;

function run(k, canvas) {
	var teste,
		i, limite;

	vector_figuras[k].function(canvas);

	for (i = 1; i < vector_label.length; i++) {
		
		limite = Math.floor((Math.random() * vector_label.length));
		teste = vector_label[i];
		teste.innerHTML = nomeFiguras[limite];
	}
};

function shuffle( formQualquer){
    for(var i = formQualquer.children.length; i >= 0; i--) {
		if( i % 3 == 0 )
        formQualquer.appendChild(formQualquer.children[Math.random() * i | 0]);
    }
}

next.onclick = function() {
    
    certa.innerHTML = countCertas;
    errado.innerHTML = countErradas;
	k = Math.floor((Math.random() * vector_figuras.length));
	count--;
	left.innerHTML = (count).toString();
	shuffle(rad);
	if( count == 0 ){
		
		next.innerHTML = "Resultado Final";
		next.style.backgroundColor = "red";
		count = vector_figuras.length;
	
		k = 0;
	}
	else if(count == 7){
		
		alert( "Parabens voce teve: " + countCertas * 10 + " Pontos" );
		
		countCertas = 0;
		countErradas = 0;
		certa.innerHTML = countCertas;
    	errado.innerHTML = countErradas;
		next.innerHTML = "Proximo";
		next.style.backgroundColor = "green";
	}		
	run(k, context);
	
	var teste = vector_label[0];
	teste.style.color = "";
	
	teste = vector_label[1];
	teste.style.color = "";
	
	teste = vector_label[2];
	teste.style.color = "";
	
	teste = vector_label[3];
	teste.style.color = "";
	
	var radio = span1.childNodes[0];
    radio.checked = false;
	
	radio = span2.childNodes[0];
    radio.checked = false;
    
    radio = span3.childNodes[0];
    radio.checked = false;
    
    radio = span4.childNodes[0];
    radio.checked = false;
};

window.onload = function () {
	shuffle(rad);
	left.innerHTML = (count).toString();
	run(0, context);
};
