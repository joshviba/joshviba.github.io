var shapes;
var ctx;
//Variables for the house body
var houseDimensionX = 180;
var houseDimensionY = 120;
var leftFrontFaceHouseBodyX = 100;
var rightFrontFaceHouseBodyX = leftFrontFaceHouseBodyX + houseDimensionX;
var topFrontFaceHouseBodyY = 340;
var bottomFrontFaceHouseBodyY = topFrontFaceHouseBodyY + houseDimensionY;
var leftBackFaceHouseBodyX = 250;
var rightBackFaceHouseBodyX = leftBackFaceHouseBodyX + houseDimensionX;
var topBackFaceHouseBodyY = 300;
var bottomBackFaceHouseBodyY = topBackFaceHouseBodyY + houseDimensionY;
//Variables for the house roof
var leftFrontRoofCornerX = leftFrontFaceHouseBodyX - (houseDimensionX / 4);
var rightFrontRoofCornerX = rightFrontFaceHouseBodyX + (houseDimensionX / 4);
var bottomFrontRoofY = topFrontFaceHouseBodyY;
var pointFrontRoofX = leftFrontFaceHouseBodyX + (houseDimensionX / 2);
var pointFrontRoofY = topFrontFaceHouseBodyY - (houseDimensionY / 1.5);
var leftBackRoofCornerX = leftBackFaceHouseBodyX - (houseDimensionX / 4);
var rightBackRoofCornerX = rightBackFaceHouseBodyX + (houseDimensionX / 4);
var bottomBackRoofY = topBackFaceHouseBodyY;
var pointBackRoofX = leftBackFaceHouseBodyX + (houseDimensionX / 2);
var pointBackRoofY = topBackFaceHouseBodyY - (houseDimensionY / 1.5);

function drawBackground() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "cyan";
    ctx.fillRect(0, 0, shapes.width, shapes.height);
    ctx.fillStyle = "darkOliveGreen";
    ctx.fillRect(0, (bottomBackFaceHouseBodyY - houseDimensionY / 4), shapes.width, shapes.height);
}

function houseBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    //Fills and outlines the "Back Face" of the house body
    ctx.fillRect(leftBackFaceHouseBodyX, topBackFaceHouseBodyY, houseDimensionX, houseDimensionY);
    ctx.strokeRect(leftBackFaceHouseBodyX, topBackFaceHouseBodyY, houseDimensionX, houseDimensionY);
    //Fills the space between the "faces" with colour
    ctx.beginPath();
    ctx.moveTo(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.lineTo(leftBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.lineTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY);
    ctx.closePath();
    ctx.fill();
    //Draws the lines connecting the corners to give appearance of depth
    ctx.beginPath();
    ctx.moveTo(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.lineTo(leftBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.moveTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY);
    ctx.moveTo(rightBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.closePath();
    ctx.stroke();
    //Fills and outlines the "Front Face" of the house body
    ctx.fillRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimensionX, houseDimensionY);
    ctx.strokeRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimensionX, houseDimensionY);
}

function houseRoof() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.lineWidth = 2;
    //Makes the shape, fills it and oulines it
    ctx.beginPath();
    ctx.moveTo(leftFrontRoofCornerX, bottomFrontRoofY);
    //ctx.lineTo(leftBackRoofCornerX, bottomBackRoofY);
    //ctx.lineTo(pointBackRoofX, pointBackRoofY);
    ctx.moveTo(pointBackRoofX, pointBackRoofY);
    ctx.lineTo(rightBackRoofCornerX, bottomBackRoofY);
    ctx.lineTo(rightFrontRoofCornerX, bottomFrontRoofY);
    ctx.lineTo(pointFrontRoofX, pointFrontRoofY);
    ctx.lineTo(leftFrontRoofCornerX, bottomFrontRoofY);
    //ctx.lineTo(pointBackRoofX, pointBackRoofY);
    ctx.moveTo(pointBackRoofX, pointBackRoofY);
    ctx.lineTo(pointFrontRoofX, pointFrontRoofY);
    ctx.lineTo(rightFrontRoofCornerX, bottomFrontRoofY);
    ctx.lineTo(leftFrontRoofCornerX, bottomFrontRoofY);
    //ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawDecorBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "black";
    ctx.lineWidth = 2;
    var doorDimensionX = houseDimensionX / 4;
    var doorDimensionY = houseDimensionY / 2;
    var doptTopX = leftFrontFaceHouseBodyX + (houseDimensionX / 2 - doorDimensionX / 2);
    var doptTopY = topFrontFaceHouseBodyY + (houseDimensionY / 2);
    ctx.fillRect(doptTopX, doptTopY, doorDimensionX, doorDimensionY);
}

function house() {
    "use strict";
    drawBackground();
    houseBody();
    houseRoof();
    drawDecorBody()
}