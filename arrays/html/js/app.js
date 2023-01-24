class App
{
    runApplication()
    {
        let arr = ["Luc", "Safwan", "Ythsi"];
        console.log(arr);
        let headers = document.getElementsByClassName("Naam");
        for (let i = 0; i < headers.length; i++){
            headers[i].innerHTML = arr[i];
        }
    }
}
let app = new App();
app.runApplication();