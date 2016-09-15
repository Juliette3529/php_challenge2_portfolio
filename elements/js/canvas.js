window.onload = function()
{
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//mon texte en canvas


//mon octogone
ctx.beginPath();
ctx.moveTo(125, 275);//On se déplace au coin inférieur gauche
ctx.lineTo(35,200 );
ctx.lineTo(35, 100);
ctx.lineTo(125, 25);
ctx.lineTo(200, 25);
ctx.lineTo(275, 120);
ctx.lineTo(175, 175);
ctx.lineTo(125, 275);
ctx.stroke();//On trace seulement les lignes.
ctx.closePath();
//debut de mon cercle
ctx.beginPath();
ctx.arc(150,150,150,0,2*Math.PI);
ctx.stroke();
ctx.closePath();
}
//fillRect(x, y, largeur, hauteur);
