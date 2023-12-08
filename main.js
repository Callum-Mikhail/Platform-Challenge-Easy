// Platform Challenge Easy

// Canvas
let cnv = document.getElementById("draw");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;
// Variables
let p1 = {
  x: 380,
  y: 560,
  w: 40,
  h: 40,
  dx: 5,
  dy: 0,
  a: 0.5,
  jumpSpeed: -15,
  color: "red",
};

let leftPressed = false;
let rightPressed = false;

// Loop
requestAnimationFrame(loop);
function loop() {
  // Horizontal Movement
  if (leftPressed) {
    p1.x += -p1.dx;
  } else if (rightPressed) {
    p1.x += p1.dx;
  }

  // Vertical Movement
  p1.dy += p1.a;
  p1.y += p1.dy;

  // Wall boundaries
  if (p1.y + p1.h > 400 && p1.y < 440 && p1.x > 235 && p1.x < 525) {
    p1.y = 360;
    p1.a = 0;
    p1.dy = 0;
  } else {
    p1.a = 0.5;
  }
  // for some reason you can use any unbound key to jump when you are on the platform

  // boudaries
  if (p1.x < -40) {
    p1.x = 800;
  } else if (p1.x > 800) {
    p1.x = -40;
  }

  if (p1.y + p1.h > cnv.height) {
    p1.y = cnv.height - p1.h;
    p1.dy = 0;
  }

  // Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 800, 600);
  // Square
  ctx.fillStyle = p1.color;
  ctx.fillRect(p1.x, p1.y, p1.w, p1.h);

  // Gray Rect
  ctx.fillStyle = "gray";
  ctx.fillRect(275, 400, 250, 40);

  // Gray Rect Border (looks cool)
  ctx.strokeStyle = "slate gray";
  ctx.strokeRect(275, 400, 250, 40);

  console.log(p1.y);
  requestAnimationFrame(loop);
}

document.addEventListener("keydown", keydownHandler);

function keydownHandler(e) {
  if (e.code === "KeyA") {
    leftPressed = true;
  } else if (e.code === "KeyD") {
    rightPressed = true;
  } else if (
    (e.code === "KeyW" && p1.y === 560) ||
    (p1.y === 360 && p1.x > 235 && p1.x < 565)
  ) {
    p1.dy = p1.jumpSpeed;
  }
}

document.addEventListener("keyup", keyupHandler);

function keyupHandler(e) {
  if (e.code === "KeyA") {
    leftPressed = false;
  } else if (e.code === "KeyD") {
    rightPressed = false;
  }
}
