function paragrafDegistir(){
        var yeniParagraf = document.createElement("p");
        var yeniParagrafMetni = document.createTextNode("Hedeflerimiz");

        yeniParagraf.appendChild(yeniParagrafMetni);

        var hakkimizda = document.getElementById("hakkimizda");
        var vizyon = document.getElementById("vizyon");

        hakkimizda.replaceChild(yeniParagraf,vizyon);
        //vizyon.parentElement.replaceChild(yeniParagraf,vizyon);
    }

