const canvas = document.getElementById("js--canvas")
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
        let g = canvas.getContext("2d");
        g.beginPath()
        g.moveTo(37.5,12.5);
        g.lineTo(87.5,25);
        g.lineTo(75,50);
        g.lineTo(25,37.5);
        g.lineTo(37.5,12.5);
        g.fill();
        g.moveTo(87.5,25);
        g.lineTo(100,37.5);
        g.lineTo(100,62.5);
        g.lineTo(75,75);
        g.lineTo(25,62.5);
        g.lineTo(25,37.5);
        g.moveTo(75,50);
        g.lineTo(100,37.5);
        g.moveTo(75,50);
        g.lineTo(75,75);
        g.moveTo(37.5,56.25);
        g.lineTo(37.5,43.75);
        g.lineTo(50,46.875);
        g.lineTo(50,59.375);
        g.lineTo(37.5,56.25);
        g.stroke();
    }
}
let app = new App();
app.runApplication();