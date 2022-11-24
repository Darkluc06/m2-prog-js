class App
{
    runApplication()
    {
        let appNaam = ("string");
        let verison = 0.9;
        let versiedatum = ("22/11/2022");
        let auteur = ("carl");
        let copyright = ("go fuck yourself");
        let distribiteur = ("steam");
        let darkmode = true;
        console.log(appNaam, verison, versiedatum, auteur, copyright, distribiteur, darkmode)
    }
}
let app = new App();
app.runApplication();


const canvas = document.getElementById("js--canvas")
console.log(canvas)
let g = canvas.getContext("2d");
g.beginPath()
g.moveTo(300,100);
g.lineTo(700,200);
g.lineTo(600,400);
g.lineTo(200,300);
g.lineTo(300,100);
g.fill();
g.moveTo(700,200);
g.lineTo(800,300);
g.lineTo(800,500);
g.lineTo(600,600);
g.lineTo(200,500);
g.lineTo(200,300);
g.moveTo(600,400);
g.lineTo(800,300);
g.moveTo(600,400);
g.lineTo(600,600);
g.moveTo(300,450);
g.lineTo(300,350);

g.lineTo(400,375);
g.lineTo(400,475);

g.closePath();
g.stroke();