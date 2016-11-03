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

function drawLogsBody() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    var logs = houseDimensionY / 20;
    var logsInterval = 20;
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY - (i * logsInterval) - logsInterval / 2, logsInterval / 2, 1.5 * Math.PI, 0.5 * Math.PI);
        ctx.fillStyle = "chocolate";
        ctx.fill();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.moveTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY - (i * logsInterval));
        ctx.lineTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY - (i * logsInterval));
        ctx.closePath();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY - (i * logsInterval) - logsInterval / 2, logsInterval / 2, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = "chocolate";
        ctx.fill();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(leftFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY - (i * logsInterval) - logsInterval / 2, logsInterval / 2, 0, 2 * Math.PI);
        ctx.fillStyle = "chocolate";
        ctx.fill();
        ctx.stroke();
    }
}

function drawLogsRoof() {
    var logs = 9;
    var logsInterval = 20;
    ctx.fillStyle = "saddleBrown";
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightBackRoofCornerX - (i * (logsInterval / 1.19)), bottomBackRoofY - (i * (logsInterval / 1.95)), logsInterval / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    ctx.beginPath();
    ctx.moveTo(rightFrontRoofCornerX, bottomFrontRoofY + (logsInterval / 2));
    ctx.lineTo(pointFrontRoofX - (logsInterval / 2), pointFrontRoofY - (logsInterval / 2) + 2);
    ctx.lineTo(pointBackRoofX - 5, pointBackRoofY - (logsInterval / 2));
    ctx.lineTo(rightBackRoofCornerX + (logsInterval / 2) - 2, bottomBackRoofY + (logsInterval / 9));
    ctx.lineTo(rightBackRoofCornerX + (logsInterval / 7), bottomBackRoofY + (logsInterval / 2));
    ctx.closePath();
    ctx.fill();
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(leftFrontRoofCornerX + (i * (logsInterval / 1.2)), bottomFrontRoofY - (i * (logsInterval / 2)), logsInterval / 2, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        if (i == 0) {
            ctx.moveTo(rightFrontRoofCornerX + (logsInterval / 7), bottomFrontRoofY + (logsInterval / 2));
            ctx.lineTo(rightBackRoofCornerX + (logsInterval / 7), bottomBackRoofY + (logsInterval / 2));
            //ctx.lineTo(rightBackRoofCornerX, bottomBackRoofY);
            ctx.fill();
        }
        ctx.moveTo(rightFrontRoofCornerX - (i * (logsInterval / 1.15)), bottomFrontRoofY - (i * logsInterval / 2) - (logsInterval / 2));
        ctx.lineTo(rightBackRoofCornerX - (i * (logsInterval / 1.16)), bottomBackRoofY - (i * logsInterval / 1.97) - (logsInterval / 2));
        ctx.stroke();
    }
    logs = 8;
    for (var i = 0; i < logs; i++) {
        ctx.beginPath();
        ctx.arc(rightFrontRoofCornerX - (i * (logsInterval / 1.19)), bottomFrontRoofY - (i * (logsInterval / 1.95)), logsInterval / 2, 0, 2 * Math.PI);
        ctx.fill();
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
    ctx.fillStyle = "peru";
    ctx.fillRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimensionX, houseDimensionY);
    ctx.strokeRect(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY, houseDimensionX, houseDimensionY);
    drawLogsBody();
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
    drawLogsRoof();
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

function drawChimeny() {
    "use strict";
    shapes = document.getElementById("myShapes");
    ctx = shapes.getContext("2d");
    ctx.fillStyle = "orangeRed";
    ctx.lineWidth = 2;
    var chimenySizeX = 50;
    var chimenySizeY = 120;
    var chimLeftBackX = pointBackRoofX - 20;
    var chimTopBackY = pointBackRoofY - chimenySizeY / 2 + 2;
    var chimRightBackX = chimLeftBackX + chimenySizeX;
    var chimBottomBackY = chimTopBackY + chimenySizeY;
    var chimLeftFrontX = pointBackRoofX - chimenySizeX / 2 - 25;
    var chimTopFrontY = pointBackRoofY - chimenySizeY / 2.5 - 1;
    var chimRightFrontX = chimLeftFrontX + chimenySizeX;
    var chimBottomFrontY = chimTopFrontY + chimenySizeY;
    ctx.fillRect(chimLeftBackX, chimTopBackY, chimenySizeX, chimenySizeY);
    ctx.strokeRect(chimLeftBackX, chimTopBackY, chimenySizeX, chimenySizeY);
    //Fills the space between with colour
    ctx.beginPath();
    ctx.moveTo(chimLeftBackX, chimTopBackY);
    ctx.lineTo(chimLeftFrontX, chimTopFrontY);
    ctx.lineTo(chimRightFrontX, chimBottomFrontY);
    ctx.lineTo(chimRightBackX, chimBottomBackY);
    ctx.lineTo(chimRightBackX, chimTopBackY);
    ctx.moveTo(chimRightFrontX, chimTopFrontY);
    ctx.lineTo(chimRightBackX, chimTopBackY);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    //Draws the fornt face of chimeny
    ctx.fillRect(chimLeftFrontX, chimTopFrontY, chimenySizeX, chimenySizeY);
    ctx.strokeRect(chimLeftFrontX, chimTopFrontY, chimenySizeX, chimenySizeY);
    //Draws the lines connecting the corners to give appearance of depth
    /*ctx.beginPath();
    ctx.moveTo(leftFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.lineTo(leftBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.moveTo(rightBackFaceHouseBodyX, bottomBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, bottomFrontFaceHouseBodyY);
    ctx.moveTo(rightBackFaceHouseBodyX, topBackFaceHouseBodyY);
    ctx.lineTo(rightFrontFaceHouseBodyX, topFrontFaceHouseBodyY);
    ctx.closePath();
    ctx.stroke();*/
}

function house() {
    "use strict";
    drawBackground();
    houseBody();
    houseRoof();
    drawDecorBody();
    drawChimeny();
}