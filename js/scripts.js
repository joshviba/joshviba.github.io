var shapes;
var ctx;
//Variables for the house body
var houseDimension = 160;
var leftFrontFaceHouseBodyX = 100;
var rightFrontFaceHouseBodyX = leftFrontFaceHouseBodyX + houseDimension;
var topFrontFaceHouseBodyY = 300;
var bottomFrontFaceHouseBodyY = topFrontFaceHouseBodyY + houseDimension;
var leftBackFaceHouseBodyX = 230;
var rightBackFaceHouseBodyX = leftBackFaceHouseBodyX + houseDimension;
var topBackFaceHouseBodyY = 220;
var bottomBackFaceHouseBodyY = topBackFaceHouseBodyY + houseDimension;
//Variables for the house roof
var leftFrontRoofCornerX = leftFrontFaceHouseBodyX - (houseDimension / 8);
var rightFrontRoofCorner = rightFrontFaceHouseBodyX + (houseDimension / 8);
var bottomFrontRoofY = topFrontFaceHouseBodyY;
var pointFrontRoofX = leftFrontFaceHouseBodyX + (houseDimension / 2);
var pointFrontRoofY = topFrontFaceHouseBodyX + (houseDimension / 3);
var leftBackRoofCornerX = leftBackFaceHouseBodyX - (houseDimension / 8);
var rightBackRoofCorner = rightBackFaceHouseBodyX + (houseDimension / 8);
var bottomBackRoofY = topBackFaceHouseBodyY;
var pointBackRoofX = leftBackFaceHouseBodyX + (houseDimension / 2);
var pointBackRoofY = topBackFaceHouseBodyX + (houseDimension / 3);

function houseBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "red";
    ctx.lineWidth = 2;
    //Fills and outlines the "Back Face" of the house body
    ctx.fillRect(leftBackFaceHouseBodyX, topBackFaceHouseBodyY, houseDimension, houseDimension);
    ctx.strokeRect(leftBackFaceHouseBodyX, topBackFaceHouseBodyY, houseDimension, houseDimension);
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
    ctx.fillRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimension, houseDimension);
    ctx.strokeRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimension, houseDimension);
}

function houseRoof() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "orange";
    ctx.lineWidth = 2;
}

function house() {
    "use strict";
    houseBody();
    houseRoof();
}