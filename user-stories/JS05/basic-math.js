// code from the Active learning: sizing a canvas box on from
// Basic math in JavaScript — numbers and operators in Modillia JS tutorial
// obviously, one would need to comment out the later solutions
//to see an earlier solution renered on the canvas.

var x = 50; var y = 50;

// Edit the two lines below here ONLY
//1) Change the line that calculates x so the box is still 50px wide, but the 50 is calculated using the numbers 43 and 7 and an arithmetic operator.

x = 43 + 7;
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

//2) Change the line that calculates y so the box is 75px high, but the 75 is calculated using the numbers 25 and 3 and an arithmetic operator.

y = 25 * 3;
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);


//3) Change the line that calculates x so the box is 250px wide, but the 250 is calculated using two numbers and the remainder (modulo) operator.

x=501%251;
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);


//4) Change the line that calculates y so the box is 150px high, but the 150 is calculated using three numbers and the subtraction and division operators.

y=450 - 600 /2;
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);


//5) Change the line that calculates x so the box is 200px wide, but the 200 is calculated using the number 4 and an assignment operator.
// fill box with backgroud color first because the x is smaller..
ctx.fillStyle = 'white';
ctx.fillRect(10, 10, x, y);

x=50
x *=4;
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);

//6) Change the line that calculates y so the box is 200px high, but the 200 is calculated using the numbers 50 and 3, the multiplication operator, and the addition assignment operator.

y = 50 * 3 + 50;
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, x, y);
