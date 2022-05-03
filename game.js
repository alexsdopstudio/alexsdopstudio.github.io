/**/ const NUMERO_IMMAGINI = 8;
/**/ const NUMERO_CARTE = NUMERO_IMMAGINI * 2;
/**/ const RITARDO = 800;
/**/ const COPERTINA_CARTA = "retrocard.png";
/**/ var carte;
/**/ var primaCarta;
/**/ var secondaCarta;
/**/ var nodoNuovaPartita;

/**/function gestoreLoad() {
/**/    try {
/**/        nodoNuovaPartita = document.getElementById("nuovaPartita");
/**/        nodoNuovaPartita.onclick = gestoreLoad;
/**/        carte = [];
/**/        for (var i = 0; i < NUMERO_CARTE; i++) {
/**/            var idImmagine = "t" + String(i);
/**/            var nodoCarta = document.getElementById(idImmagine);
/**/            nodoCarta.setAttribute("src", COPERTINA_CARTA);
/**/            nodoCarta.setAttribute("carta", "coperta");
/**/            nodoCarta.onclick = gestoreClickCarta;
/**/            carte.push(nodoCarta);
/**/        }
/**/        for (var i = 0; i < NUMERO_IMMAGINI; i++) {
/**/            var fileImmagine = "carta" + i + ".png";
/**/            var i1 = calcolaIndiceCarta();
/**/            carte[i1].setAttribute("src1", fileImmagine);
/**/            carte[i1] = null;
/**/            var i2 = calcolaIndiceCarta();
/**/            carte[i2].setAttribute("src1", fileImmagine);
/**/            carte[i2] = null;
/**/        }
/**/        primaCarta = null;
/**/        secondaCarta = null;
/**/    } catch (e) {
/**/        alert("gestoreLoad " + e);
/**/    } 
/**/}

/**/window.onload = gestoreLoad;

/**/function giraCarte() {
/**/    try {
/**/    primaCarta.setAttribute("src", COPERTINA_CARTA);
/**/    primaCarta = null;
/**/    secondaCarta.setAttribute("src", COPERTINA_CARTA);
/**/    secondaCarta = null;
/**/    } catch (e) {
/**/        alert("giraCarte " + e);  
/**/    } 
/**/}

/**/function gestoreClickCarta() {
/**/    try {
/**/        if (this.getAttribute("carta") == "scoperta") {
/**/        return;   
/**/    }
/**/        if (this == primaCarta) {
/**/        return;
/**/    }
/**/        if (primaCarta == null) {
/**/        primaCarta = this;
/**/        this.setAttribute("src", this.getAttribute("src1"));
/**/        return;  
/**/    }
/**/        if (secondaCarta == null) {
/**/            secondaCarta = this;
/**/            this.setAttribute("src", this.getAttribute("src1"));
/**/            if (primaCarta.getAttribute("src") == 
/**/                secondaCarta.getAttribute("src")) {      
/**/                primaCarta.setAttribute("carta", "scoperta");
/**/                primaCarta = null;
/**/                secondaCarta.setAttribute("carta", "scoperta");
/**/                secondaCarta = null;
/**/            } else {
/**/                setTimeout(giraCarte, RITARDO);      
/**/            }
/**/        }
/**/    } catch (e) {
/**/        alert("gestoreClickCarta " + e);   
/**/    } 
/**/}

/**/function uniformeRandom(k) {
/**/    return Math.trunc(Math.random() * k); 
/**/}

/**/function calcolaIndiceCarta() {
/**/    var i = uniformeRandom(NUMERO_CARTE);
/**/    while (carte[i] == null) {
/**/        i = (i + uniformeRandom(NUMERO_CARTE)) % NUMERO_CARTE;
/**/    }
/**/    return i;
/**/}
