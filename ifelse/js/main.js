class App {
    runApplication() {
        const canvas = document.getElementById("js--canvas")
        let g = canvas.getContext("2d");
        let x = Math.floor(Math.random() * 900 + 1);
        let y = Math.floor(Math.random() * 500 + 1);
        this.drawHouse(g, x, y);

    }
    drawHouse(g, x, y){
        g.beginPath()
        g.moveTo(x + 37.5, y + 12.5);
        g.lineTo(x + 87.5, y + 25);
        g.lineTo(x + 75, y + 50);
        g.lineTo(x + 25, y + 37.5);
        g.lineTo(x + 37.5, y + 12.5);
        g.fill();
        g.moveTo(x + 87.5, y + 25);
        g.lineTo(x + 100, y + 37.5);
        g.lineTo(x + 100, y + 62.5);
        g.lineTo(x + 75, y + 75);
        g.lineTo(x + 25, y + 62.5);
        g.lineTo(x + 25, y + 37.5);
        g.moveTo(x + 75, y + 50);
        g.lineTo(x + 100, y + 37.5);
        g.moveTo(x + 75, y + 50);
        g.lineTo(x + 75, y + 75);
        g.moveTo(x + 37.5, y + 56.25);
        g.lineTo(x + 37.5, y + 43.75);
        g.lineTo(x + 50, y + 46.875);
        g.lineTo(x + 50, y + 59.375);
        g.lineTo(x + 37.5, y + 56.25);
        g.stroke();
        let number = Math.floor(Math.random() * 2);
        if (number === 0) {
            let g = canvas.getContext("2d");

            g.strokestyle = "#FF0000";
            g.fillstyle = "#FF0000";
            g.beginPath()
            g.moveTo(37.5, 56.25);
            g.lineTo(37.5, 43.75);
            g.lineTo(50, 46.875);
            g.lineTo(50, 59.375);
            g.lineTo(37.5, 56.25);
            g.stroke()
            g.fill()
            console.log("hello")
        }
        else {
        };
    }
    
}
let app = new App();
app.runApplication();




