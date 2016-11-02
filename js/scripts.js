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
    ctx.fillStyle = "lightskyBlue";
    ctx.fillRect(0, 0, shapes.width, shapes.height);
    ctx.fillStyle = "green";
    ctx.fillRect(0, (bottomBackFaceHouseBodyY - houseDimensionY / 4), shapes.width, shapes.height);
}

function drawLogs() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var logs = houseDimensionY / 20;
    var logsInterval = 20;
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.moveTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY - (i * logsInterval));
        ctx.lineTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY - (i * logsInterval));
        ctx.closePath();
        ctx.stroke();
    }
}

function houseBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "chocolate";
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
    drawLogs();
    //Fills and outlines the "Front Face" of the house body
    ctx.fillStyle = "red";
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
    ctx.fillStyle = "brown";
    ctx.lineWidth = 1;
    //Variables for door
    var doorDimensionX = houseDimensionX / 4;
    var doorDimensionY = houseDimensionY / 2;
    var doorTopX = leftFrontFaceHouseBodyX + (houseDimensionX / 2 - doorDimensionX / 2);
    var doorTopY = topFrontFaceHouseBodyY + (houseDimensionY / 2);
    //Varaibles for Door Knob
    var knobRadius = 3;
    var knobCenterX = doorTopX + doorDimensionX - knobRadius - 3;
    var knobCenterY = doorTopY + doorDimensionY / 2;
    var knobStartAngle = 0;
    var knobEndAngle = 2 * Math.PI;
    //Variables for windows
    var windowSize = houseDimensionY / 3;
    var windowTopY = topFrontFaceHouseBodyY + windowSize / 3;
    var window1TopX = leftFrontFaceHouseBodyX + windowSize / 2;
    var window2TopX = window1TopX + windowSize * 2.5;
    //Draws the door and oulines
    ctx.fillRect(doorTopX, doorTopY, doorDimensionX, doorDimensionY);
    ctx.strokeRect(doorTopX, doorTopY, doorDimensionX, doorDimensionY);
    //Draws the door knob
    ctx.beginPath();
    ctx.arc(knobCenterX, knobCenterY, knobRadius, knobStartAngle, knobEndAngle);
    ctx.fillStyle = "black";
    ctx.fill();
    //Sets the background for the windows
    ctx.fillStyle = "gray";
    //Draws and outlines the windows
    ctx.fillRect(window1TopX, windowTopY, windowSize, windowSize);
    ctx.strokeRect(window1TopX, windowTopY, windowSize, windowSize);
    ctx.fillRect(window2TopX, windowTopY, windowSize, windowSize);
    ctx.strokeRect(window2TopX, windowTopY, windowSize, windowSize);
    //Draws the frames for the windows
    ctx.beginPath();
    ctx.moveTo(window1TopX + windowSize / 2, windowTopY);
    ctx.lineTo(window1TopX + windowSize / 2, windowTopY + windowSize);
    ctx.moveTo(window1TopX, windowTopY + windowSize / 2);
    ctx.lineTo(window1TopX + windowSize, windowTopY + windowSize / 2);
    ctx.moveTo(window2TopX + windowSize / 2, windowTopY);
    ctx.lineTo(window2TopX + windowSize / 2, windowTopY + windowSize);
    ctx.moveTo(window2TopX, windowTopY + windowSize / 2);
    ctx.lineTo(window2TopX + windowSize, windowTopY + windowSize / 2);
    ctx.closePath();
    ctx.stroke();
}

function house() {
    "use strict";
    drawBackground();
    houseBody();
    houseRoof();
    drawDecorBody();
}