export function drawTree(g, x, y) {
    g.fillStyle = "green";
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + 50, y - 50);
    g.lineTo(x + 100, y);
    g.fill();
    g.beginPath();
    g.moveTo(x, y + 30);
    g.lineTo(x + 50, y - 20);
    g.lineTo(x + 100, y + 30);
    g.fill();
    g.beginPath();
    g.moveTo(x, y + 60);
    g.lineTo(x + 50, y + 10);
    g.lineTo(x + 100, y + 60);
    g.fill();
    g.fillStyle = "brown";
    g.beginPath();
    g.moveTo(x + 45, y + 60);
    g.lineTo(x + 45, y + 75);
    g.lineTo(x + 55, y + 75);
    g.lineTo(x + 55, y + 60);
    g.closePath()
    g.fill();
}


export function drawHouse(g, x, y) {
    g.beginPath();
    g.fillStyle = "#E84545"
    g.moveTo(x + 37.5, y + 12.5);
    g.lineTo(x + 87.5, y + 25);
    g.lineTo(x + 75, y + 50);
    g.lineTo(x + 25, y + 37.5);
    g.lineTo(x + 37.5, y + 12.5);
    g.fill();
    g.closePath()
    g.beginPath()
    g.fillStyle = "White"
    g.moveTo(x + 87.5, y + 25);
    g.lineTo(x + 100, y + 37.5);
    g.lineTo(x + 100, y + 62.5);
    g.lineTo(x + 75, y + 75);
    g.lineTo(x + 25, y + 62.5);
    g.lineTo(x + 25, y + 37.5);
    g.lineTo(x + 75, y + 50);
    g.lineTo(x + 75, y + 75);
    g.lineTo(x + 75, y + 50)
    g.lineTo(x + 100, y + 37.5)
    g.lineTo(x + 87.5,y + 25)
    g.lineTo(x + 75, y + 50)
    g.lineTo(x + 100, y + 37.5)
    g.fill()
    g.moveTo(x + 37.5, y + 56.25);
    g.lineTo(x + 37.5, y + 43.75);
    g.lineTo(x + 50, y + 46.875);
    g.lineTo(x + 50, y + 59.375);
    g.lineTo(x + 37.5, y + 56.25);
    g.fill();
    g.stroke();
    let number = Math.floor(Math.random() * 2);
    if (number === 0) {
        g.fillStyle = "#FFEA20";
        g.beginPath()
        g.moveTo(x + 37.5, y + 56.25);
        g.lineTo(x + 37.5, y + 43.75);
        g.lineTo(x + 50, y + 46.875);
        g.lineTo(x + 50, y + 59.375);
        g.lineTo(x + 37.5, y + 56.25);
        g.stroke();
        g.fill();
    }
    else {
    };
}

export function road(g){
    g.beginPath();
    g.strokeStyle = "#393E46";
    g.fillStyle = "#393E46";
    g.moveTo(0, 200);
    g.lineTo(1000,200);
    g.lineTo(1000, 300);
    g.lineTo(350, 300);
    g.lineTo(350, 400);
    g.lineTo(1000, 400);
    g.lineTo(1000, 500);
    g.lineTo(0, 500);
    g.lineTo(0, 400);
    g.lineTo(250, 400);
    g.lineTo(250,300);
    g.lineTo(0,300);
    g.lineTo(0,200);
    g.fill();
    g.stroke();
}