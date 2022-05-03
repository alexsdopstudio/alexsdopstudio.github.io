/**/ var indiceFoto;
/**/ var numeroFoto;
/**/ var nodoAvanti;
/**/ var nodoIndietro;
/**/ var nodoFoto;
     var nodotitolo;
     var nododescrizione;
     var nododimensione;
     var nodotesto_titolo;
     var nodotesto_descrizione;
     var nodotesto_dimensione;
     var nodocontainer;
     var mybutton;

/**/ function gestoreLoad() {
/**/    try {
/**/        nodoAvanti = document.getElementById("avanti");
/**/        nodoIndietro = document.getElementById("indietro");
/**/        nodoFoto = document.getElementById("immagine");
            nodotitolo = document.createElement("h2");
            nodotesto_titolo = document.createTextNode("");
            nodotitolo.appendChild(nodotesto_titolo);
            nododescrizione = document.createElement("p");
            nodotesto_descrizione = document.createTextNode("");
            nododescrizione.appendChild(nodotesto_descrizione);
            nododimensione = document.createElement("p");
            nodotesto_dimensione = document.createTextNode("");
            nododimensione.appendChild(nodotesto_dimensione);
            nodocontainer = document.getElementById("description");
            nodocontainer.appendChild(nodotitolo);
            nodocontainer.appendChild(nododescrizione);
            nodocontainer.appendChild(nododimensione);
/**/        nodoIndietro.onclick = gestoreClickIndietro;
/**/        nodoAvanti.onclick = gestoreClickAvanti;
/**/        numeroFoto = arrayimmagini.length;
/**/        indiceFoto = 0;
/**/        cambiaFoto(0);
            mybutton = document.getElementById("backontop");
/**/    } catch (e) {
/**/        alert("gestoreLoad " + e);
        }
    }
/**/window.onload = gestoreLoad;
    window.onscroll = function () {
        scrollFunction();
    };

//Inizializzazione di un array di array associativi aventi come indice i valori di tipo stringa: img, titolo, descrizione, dimensione
var arrayimmagini = [
    {
        img: "immaginigalleria/fishesandscales.jpg",
        titolo: "Pesci e Squame",
        descrizione:
            "In questa stampa avvengono due mutazioni differenti e contemporanee, sia nell'ambito del colore che della forma. Tale processo si ripete due volte: nella parte superiore del disegno e in quella inferiore.",
        dimensione: "Xilografia, 1959, 38x38cm",
    },
    {
        img: "immaginigalleria/development.jpg",
        titolo: "Sviluppo",
        descrizione:
            "Dei quadrati appena riconoscibili ai bordi del disegno, congiungendosi nel centro, subiscono uno sviluppo di forma e contrasto. Due rettili bianchi e due neri senza libertà di movimento costituiscono l'unico sviluppo completo dei quadrati.",
        dimensione: "Xilografia, 1937, 44x44cm",
    },

    {
        img: "immaginigalleria/squarelimit.jpg",
        titolo: "Limite del Quadrato",
        descrizione:
            "Disegno che mostra un sistema di bisezione dall'interno verso l'esterno. Il limite dell'infinitamente piccolo viene raggiunto ai lati del quadrato.",
        dimensione: "Xilografia, 1959, 34x34cm",
    },
    {
        img: "immaginigalleria/smallerandsmaller.jpg",
        titolo: "Sempre più Piccolo",
        descrizione:
            "In questo disegno la superfice di ogni rettile viene dimezzata sistematicamente in direzione del centro, dove viene raggiunto l'infinitamente piccolo e l'infinitamente numeroso. L'animale più piccolo avente ancora una testa, una coda e quattro zampe, è lungo circa 2mm. ",
        dimensione: "Xilografia, 1956, 38x38cm",
    },
    {
        img: "immaginigalleria/pathoflife.jpg",
        titolo: "Sentieri di Vita 2 ",
        descrizione:
            "Qui, il limite dell'infinitamente piccolo si trova al centro. Da questo escono, a forma di spirale, quattro file di pesci che nuotano con la testa dell'uno accanto alla coda dell'altro. I quattro esemplari più grandi che delimitano la superficie quadrata cambiano la direzione e il colore. ",
        dimensione: "Xilografia, 1958, 37x37cm",
    },

    {
        img: "immaginigalleria/sunandmoon.jpg",
        titolo: "Sole e Luna",
        descrizione:
            "Giorno e Notte sono i temi di questo foglio. I due concetti, benchè divisi tra loro da un cambiamento di pensiero,vengono rappresentati nel medesimo posto.",
        dimensione: "Xilografia, 1948, 25x27.5",
    },

    {
        img: "immaginigalleria/skyandwater.jpg",
        titolo: "Cielo e Luna 1",
        descrizione:
            "Aria e Acqua. Per ogni uccello nero, i quattro pesci che lo circondano costituiscono l'aria nella quale vola. I quattro uccelli neri che circondano un pesce diventano l'acqua nella quale esso nuota.",
        dimensione: "Xilografia, 1938, 44x44cm",
    },
    {
        img: "immaginigalleria/reptiles.jpg",
        titolo: "Rettili",
        descrizione:
            "Storia di un rettile che, stanco di stare immobile e piatto tra i suoi simili, parte alla ricerca della sua esistenza. Arrivatone all'apice, dopo un breve riposo, si inserisce ubbidiente fra i suoi vecchi compagni. ",
        dimensione: "Litografia, 1943, 33.5x38.5cm",
    },
    {
        img: "immaginigalleria/circlelimituno.jpg",
        titolo: "Limite del Cerchio 1",
        descrizione:
            "Tutte le file, sottolineate dagli assi dei corpi, sono costituite da due pesci bianchi i quali volgono le teste gli uni agli altri, e due neri, le cui code si toccano. Viene creato un universo, un'unità continua.",
        dimensione: "Xilografia, 1958, 42x42cm",
    },
    {
        img: "immaginigalleria/circlelimittre.jpg",
        titolo: "Limite del Cerchio 3",
        descrizione:
            "Linee bianche circolari marcano le corsie sulle quali si muovono delle file di pesci dall'infinitamente piccolo, passando alla grandezza massima, all'infinitamente piccolo. Ogni fila ospita pesci di un unico colore.",
        dimensione: "Xilografia, 1959, 41.5x41.5cm",
    },
    {
        img: "immaginigalleria/circlelimitquattro.jpg",
        titolo: "Limite del Cerchio 4",
        descrizione:
            "I componenti diventano più piccoli dall'interno verso l'esterno. I sei più grandi, tre angeli bianchi e tre diavoli neri, sono posti a raggio intorno al centro. Il disco è diviso in due settori nei quali gli angeli prevalgono su uno sfondo nero e i diavoli su uno bianco.",
        dimensione: "Xilografia, 1960, 42x42cm",
    },
    {
        img: "immaginigalleria/doubleplanetoid.jpg",
        titolo: "Planetoide Doppio",
        descrizione:
            "Due tetraedri regolari, che si compenetrano a vicenda, fluttuano nello spazio. Gli umani abitano quello scuro e lo hanno reso un complesso di case, ponti e strade. Il tetraedro bianco è allo stato naturale con rocce, piante e animali preistorici.",
        dimensione: "Xilografia, 1954, 43x43cm",
    },
    {
        img: "immaginigalleria/tetrahedalplanetoid.jpg",
        titolo: "Planetoide Tetraedrico",
        descrizione:
            "Tutte le superfici verticali - i muri delle case, gli spazi e gli esseri umani - sono orientate verso il nucleo dalla forza di gravità. Tutte le superfici orizzontali - i giardini, le strade, il livello dell'acqua - sono frammenti di una crosta sferica.",
        dimensione: "Xilografia, 1954, 43x43cm",
    },
    {
        img: "immaginigalleria/gravitation.jpg",
        titolo: "Gravità",
        descrizione:
            "Ancora una volta un dodecaedro stellare delimitato da dodici stelle piane a cinque punte. Su ognuna delle piattaforme vive, imprigionato in una piramide a cinque lati, un mostro senza coda, con un lungo collo e quattro zampe. Tutte le punte triangolari hanno la doppia funzione di pavimento e parete.",
        dimensione: "Litografia e acquerello, 1952, 30x30cm",
    },
    {
        img: "immaginigalleria/orderandchaos.jpg",
        titolo: "Ordine e Caos",
        descrizione:
            "Nel mezzo è stato posto un dodecaedro stellare rinchiuso in una sfera trasparente come una bolla di sapone. In questo simbolo di ordine e di bellezza si rispecchia il caos: una raccolta di oggetti inutili di ogni tipo, rotti e accartocciati.",
        dimensione: "Litografia, 1950, 28x28cm",
    },
    {
        img: "immaginigalleria/flatworms.jpg",
        titolo: "Platelminti",
        descrizione:
            "La costruzione qui raffigurata è formata da tetraedri e ottaedri opportunamente alternati. L'acqua riempie la costruzione la quale diventa l'habitat ideale per le nuotate dei platelminti.",
        dimensione: "Litografia, 1959, 34x41,5cm",
    },
    {
        img: "immaginigalleria/curlup.jpg",
        titolo: "Capriola",
        descrizione:
            "Definizione di struttura e movimenti di un animale fantastico.",
        dimensione: "Litografia, 1951, 17x23,5cm",
    },
    {
        img: "immaginigalleria/realtivity.jpg",
        titolo: "Relatività",
        descrizione:
            "Qui coagiscono perpendicolarmente tre forze di gravità. Tre superfici terrestri, su ognuna delle quali vivono degli uomini, s'intersecano ad angolo retto. Due abitanti di due mondi diversi non possno vivere sullo stesso pavimento, ciononostante possono usare la stessa scala.",
        dimensione: "Litografia, 1953, 28x29cm",
    },
    {
        img: "immaginigalleria/printgallery.jpg",
        titolo: "Galleria di Stampe",
        descrizione:
            "In questo foglio si ha a che fare con un'estensione intorno al centro vuoto in senso orario. In basso a destra, per prima cosa, incontriamo un visitatore con le mani dietro la schiena; poi, nell'angolo in basso a sinistra un uomo giovane 4 volte più grande; è lui che ci guida nell'osservazione del quadro fino a quando vede se stesso nelle vesti di visitatore.",
        dimensione: "Litografia, 1956, 32x32cm",
    },
    {
        img: "immaginigalleria/puddle.jpg",
        titolo: "Pozzanghera",
        descrizione:
            "Il cielo sereno, di sera, si riflette in una pozzanghera formatasi dopo un acquazzone nel fresco di un sentiero di bosco. Nel terreno paludoso spiccano le tracce di due camion, due biciclette e le impronte di due passanti.",
        dimensione: "Xilografia, 1952, 24x32cm",
    },
    {
        img: "immaginigalleria/stilllifewithreflectingglobe.jpg",
        titolo: "Sfera Riflettente",
        descrizione:
            "Sulla mano del disegnatore c'è una sfera riflettente, vista di lato, come una bottiglia con collo.",
        dimensione: "Litografia, 1934, 28,5x32,5cm",
    },
    {
        img: "immaginigalleria/concentricrinds.jpg",
        titolo: "Cortecce Concentriche",
        descrizione:
            "Quattro cortecce concentriche a forma di sfera vengono illuminate nel centro da una fonte di luce. Ogni corteccia è formata da un intreccio di nove grandi cerchi che suddividono la superficie della sfera in 40 triangoli.",
        dimensione: "Xilografia, 1953, 24x24cm",
    },
    {
        img: "immaginigalleria/spherespirals.jpg",
        titolo: "Spirali Sferiche",
        descrizione:
            "Viene qui rappresentata una sfera attraverso l'intreccio di cerchi meridiani e paralleli. Sulla superficie della sfera ruotano quattro spirali infinitamente sottili ai poli, le quali, all'equatore raggiungono la massima larghezza.",
        dimensione: "Xilografia, 1958, 32x32cm",
    },
    {
        img: "immaginigalleria/spheresurface.jpg",
        titolo: "Superficie Sferica",
        descrizione:
            "Partendo dal polo visibile, otto file di pesci, le bianche alternate alle nere, nuotano a forma di spirale. All'equatore raggiungono la maggiore grandezza, dopodichè i pesci diventano più piccoli e scompaiono nell' altro polo, per noi invisibile.",
        dimensione: "Xilografia, 1958, 32x32cm",
    },
    {
        img: "immaginigalleria/intersectingplanes.jpg",
        titolo: "Tre Piani Intersecanti",
        descrizione:
            "Tre piani s'intersecano ad angolo retto. Dal punto di vista della prospettiva, ogni piano presenta un punto prospettico. I tre punti di fuga sono posti sui vertici di un trangolo equilatero. ",
        dimensione: "Xilografia, 1954, 32,5x37,5cm",
    },
    {
        img: "immaginigalleria/spirals.jpg",
        titolo: "Spirali",
        descrizione:
            "Quattro nastri a forma di spirale circondano insieme un tubo curvo che come un toro sempre più sottile ritorna al punto di partenza e autotraforandosi ricomincia il suo giro.",
        dimensione: "Xilografia, 1953, 27x33.5cm",
    },
    {
        img: "immaginigalleria/palm.jpg",
        titolo: "Palma",
        descrizione:
            "Unico foglio, presente in questa galleria, che raffigura una realtà visibile. Vi è raffigurata una palma, icona del paesaggio dell'italia meridionale, tanto amato dall'artista.",
        dimensione: "Xilografia, 1933, 39,5x39,5",
    },
];

/**/function gestoreClickAvanti() {
/**/    try {
/**/        cambiaFoto(+1);
/**/    } catch (e) {
/**/        alert("gestoreClickAvanti " + e);
/**/    }
/**/}
/**/function gestoreClickIndietro() {
/**/    try {
/**/        cambiaFoto(-1);
/**/    } catch (e) {
/**/        alert("gestoreClickIndietro " + e);
/**/    }
/**/}

/**/function cambiaFoto(x) {
/**/    indiceFoto += x;
/**/    if (indiceFoto == numeroFoto) {
/**/        indiceFoto = 0;
/**/}
/**/    if (indiceFoto < 0) {
/**/        indiceFoto = numeroFoto - 1;
/**/}
/**/    nodoFoto.setAttribute("src", arrayimmagini[indiceFoto].img);
        var titolo = arrayimmagini[indiceFoto].titolo;
        var descrizione = arrayimmagini[indiceFoto].descrizione;
        var dimensione = arrayimmagini[indiceFoto].dimensione;
        var csstitolo = document.createAttribute("id");
        csstitolo.value = "titolo_img";
        nodotitolo.setAttributeNode(csstitolo);
        var cssdescrizione = document.createAttribute("id");
        cssdescrizione.value = "descrizione_img";
        nododescrizione.setAttributeNode(cssdescrizione);
        var cssdimensione = document.createAttribute("id");
        cssdimensione.value = "info_img";
        nododimensione.setAttributeNode(cssdimensione);
        nodotitolo.firstChild.nodeValue = titolo;
        nododescrizione.firstChild.nodeValue = descrizione;
        nododimensione.firstChild.nodeValue = dimensione;
    }
    
 //Funzione che gestisce la visualizzazione del pulsante e la sua animazione quando l'utente effettua uno scroll down pari al 60% dell'altezza dell'intero documento
function scrollFunction() {
    if (document.body.scrollTop > document.documentElement.scrollHeight * 0.6 ||
        document.documentElement.scrollTop > document.documentElement.scrollHeight * 0.6) {
        mybutton.style.display = "block";
        mybutton.style.animation = "sideslide2  0.3s";
    } 
    else {
        mybutton.style.display = "none";
    }
 }

//Funzione genera uno scroll che porta in cima al documento
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
