var shapes;
var ctx;

function house() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    ctx.fillRect(230, 220, 160, 160);
    ctx.strokeRect(230, 220, 160, 160);
    ctx.beginPath();
    ctx.moveTo(150, 300);
    ctx.lineTo(230, 220);
    ctx.lineTo(390, 380);
    ctx.lineTo(310, 460);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(150, 300);
    ctx.lineTo(230, 220);
    ctx.moveTo(390, 380);
    ctx.lineTo(310, 460);
    ctx.moveTo(390, 220);
    ctx.lineTo(310, 300);
    ctx.closePath();
    ctx.stroke();
    ctx.fillRect(150, 300, 160, 160);
    ctx.strokeRect(150, 300, 160, 160);
}