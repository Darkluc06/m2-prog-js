class App {
    runApplication() {
        this.mario();
        console.log(this.bowser());
        let x = 1;
        let y = 1;
        console.log(this.add(x, y));
    }
    mario() {
        console.log("MARIO!!!!")
    }
    bowser() {
        return "BWAHAHAHA";
    }
    add(x, y) {
        return x + y;
    }
}

let app = new App();
app.runApplication();