    var superHero;
    var superVillian;
    var isVillianChosen = false;

    function Hero(name, code, health, counterAtk, heroImg) {
        this.name = name;
        this.code = code;
        this.health = health;
        this.counterAtk = counterAtk;
        this.heroImg = function () {
            loadImage("..\\images\\" + this.code + ".jpg");
      };
    }
    debugger;
    var heroLS = new Hero("Luke Skywalker", "heroLS", 100, 12);
    var heroDV = new Hero("Darth Vader", "heroDV", 100, 12);
    var heroDM = new Hero("Darth Maul", "heroDM", 100, 12);
    var heroLS = new Hero("Darth Raven", "heroDR", 100, 12);

    $(".bank").on("click", function () {

    });
    function selectHero() { }

    function selectVillian() {

        isVillianChosen = true
    }

    $(".btn").on("click", function () {
        // Call atk varible and set it to 7
        // atk will be subtracted from villian's health
        // atk will increased by base 7
        // counterAtk will subtract health  

        if (isVillianChosen) {
            for (let atk = 7; ; atk = atk + 7) {
                atk - villianHP;
                break;
            }

        };

    });