document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("zdog-canvas");
  if (!canvas || !window.Zdog) return;

  const { Illustration, Shape, Ellipse } = Zdog;

  const illo = new Illustration({
    element: canvas,
    dragRotate: true,
    resize: true,
    zoom: 3.5
  });

  // DRAGON BALL
  new Shape({
    addTo: illo,
    stroke: 50,
    color: '#ff9500',
  });

  // ETOILE
  const starPoints = [
    { x: 0, y: -12 },    
    { x: 2.5, y: -2.5 },
    { x: 12, y: 0 },     
    { x: 2.5, y: 2.5 },
    { x: 0, y: 12 },     
    { x: -2.5, y: 2.5 },
    { x: -12, y: 0 },    
    { x: -2.5, y: -2.5 }
  ];

  // AVANT DE L'ETOILE
  new Shape({
    addTo: illo,
    path: starPoints,
    closed: true,
    stroke: 0,
    color: '#cc0000',
    fill: true,
    translate: { z: 26 }
  });

  // CONTOUR
  new Shape({
    addTo: illo,
    path: starPoints,
    closed: true,
    stroke: 1.5,
    color: '#990000',
    translate: { z: 25.5 }
  });

  // ARRIÉRE DE L'ETOILE
  new Shape({
    addTo: illo,
    path: starPoints,
    closed: true,
    stroke: 0,
    color: '#cc0000',
    fill: true,
    translate: { z: -26 }
  });

  // CONTOUR
  new Shape({
    addTo: illo,
    path: starPoints,
    closed: true,
    stroke: 1.5,
    color: '#990000',
    translate: { z: -25.5 }
  });

  // ANIMATION
  let time = 0;
  function animate() {
    time += 0.01;
    
    illo.rotate.y += 0.015;
    
    illo.rotate.x = Math.sin(time) * 0.15;
    
    illo.rotate.z = Math.cos(time * 0.7) * 0.05;

    illo.updateRenderGraph();
    requestAnimationFrame(animate);
  }

  animate();

  let isDragging = false;
  
  canvas.addEventListener("mousedown", () => { 
    isDragging = true;
  });
  
  canvas.addEventListener("mouseup", () => { 
    isDragging = false;
  });
});