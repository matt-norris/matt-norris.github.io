const skills = [
   
    "JavaScript",
    "Python",
    "Git",
    "CPP",
    // Add more skills here
  ];
  
  let starWarsFont;

function preload() {
  starWarsFont = loadFont('/Assets/Starjedi.ttf'); // Replace with the name and file extension of your Star Wars font
}

  let crawlY = 0;
  
  function setup() {
    textFont(starWarsFont); 
    const container = document.getElementById('skills-container');
    const canvas = createCanvas(container.offsetWidth, container.offsetHeight);
    canvas.parent('skills-container');
    textAlign(CENTER, CENTER);
    textSize(24);
    
  }
  
  function draw() {
    background(0);
    let yOffset = 0;
    let zOffset = 0;
  
    for (const skill of skills) {
      yOffset += 60;
      zOffset += 15;
  
      push();
      translate(width / 2, crawlY - yOffset + height);
   
     
      fill(255, 204, 0);
      text(skill, 0, 0);
      pop();
    }
  
    crawlY += .5;
  
    if (crawlY > 60 * skills.length + height) {
      crawlY = 0;
    }
  }