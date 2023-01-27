import { drawHouse, drawTree, road } from '/js/functions.js';

class App {
    runApplication() {
        const canvas = document.getElementById("canvas");
        var g = canvas.getContext("2d");
        g.fillStyle = "black";
        g.fillRect(0, 0, canvas.width, canvas.height);
        road(g);
        this.drawHouses(g);
        this.drawTrees(g);
        this.drawTitle(g);
    }
    drawHouses(g) {
        drawHouse(g, 90, 100);
        drawHouse(g, 300, 120);
        drawHouse(g, 410, 100);
        drawHouse(g, 110, 320);
        drawHouse(g, 0, 310);
        drawHouse(g, 650, 100);
        drawHouse(g, 550, 295)
        drawHouse(g, 700, 310)
    }
    drawTrees(g) {
        drawTree(g, 400, 310);
        drawTree(g, 210, 105);
        drawTree(g, 550, 95);
        drawTree(g, 800, 90);
        drawTree(g, 880, 290);
        drawTree(g, 10, 520)
        drawTree(g, 130, 490)
        drawTree(g, 900, 510)
        drawTree(g, 780, 480)
    }
    drawTitle(g) {
        g.font = "72px Arial";
        g.fillStyle = "#ffffff";
        g.fillText("Christmas Card", 250, 570);
    }
}

let app = new App();
app.runApplication();