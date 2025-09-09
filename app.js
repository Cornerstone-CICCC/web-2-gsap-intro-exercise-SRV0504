const red = document.querySelector('.red');
const green = document.querySelector('.green');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');

const boxes = [red, green, blue, yellow];

window.addEventListener('load', () => {
  const positions = boxes.map(box => ({
    x: box.offsetLeft,
    y: box.offsetTop
  }));

  const tl = gsap.timeline({ 
    defaults: { duration: 1, ease: "power2.out" },
    repeat: -1,
    repeatDelay: 1,
    onRepeat: () => {
      gsap.set(red,    { x: 0, y: 0, opacity: 1, borderRadius: "0%", backgroundColor: "#ff0000" });
      gsap.set(green,  { x: 0, y: 0, opacity: 1, borderRadius: "0%", backgroundColor: "#00ff00" });
      gsap.set(blue,   { x: 0, y: 0, opacity: 1, borderRadius: "0%", backgroundColor: "#0000ff" });
      gsap.set(yellow, { x: 0, y: 0, opacity: 1, borderRadius: "0%", backgroundColor: "#ffff00" });
    }
  });

  tl.from(red,    { opacity: 0, scale: 0, x: -100, y: -100 }) // 🔴
    .from(green,  { opacity: 0, scale: 0, x: 100,  y: -100 }, "-=0.5") // 🟢
    .from(blue,   { opacity: 0, scale: 0, x: 100,  y: 100 },  "-=0.5") // 🔵
    .from(yellow, { opacity: 0, scale: 0, x: -100, y: 100 },  "-=0.5") // 🟡

    .addLabel("rotate")
    .to(red, {
      x: positions[1].x - positions[0].x,
      y: positions[1].y - positions[0].y,
      borderRadius: "50%",
      backgroundColor: "#00ff00" 
    }, "rotate")
    .to(green, {
      x: positions[2].x - positions[1].x,
      y: positions[2].y - positions[1].y,
      borderRadius: "50%",
      backgroundColor: "#0000ff" 
    }, "rotate")
    .to(blue, {
      x: positions[3].x - positions[2].x,
      y: positions[3].y - positions[2].y,
      borderRadius: "50%",
      backgroundColor: "#ffff00" 
    }, "rotate")
    .to(yellow, {
      x: positions[0].x - positions[3].x,
      y: positions[0].y - positions[3].y,
      borderRadius: "50%",
      backgroundColor: "#ff0000" 
    }, "rotate")

    .to([blue, yellow], {
      x: "-=300",
      opacity: 0,
      duration: 0.8
    }, "+=0.3")
    .to([green, red], {
      x: "+=300",
      opacity: 0,
      duration: 0.8
    }, "-=0.8");
});
