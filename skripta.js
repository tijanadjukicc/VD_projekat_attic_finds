document.addEventListener('DOMContentLoaded', function() {

    //dohvatanje slika iz galerije da bi im dodali eventListener
    var slikeIndex = document.querySelectorAll('.AutoPort');
    var slikeIndex2 = document.querySelectorAll('.Bicikl');
    var slikeIndex3 = document.querySelectorAll('.Secanje');
    var slikeIndex4 = document.querySelectorAll('.Djakomet');
    var slikeIndex5 = document.querySelectorAll('.Sjemena');
    var slikeIndex6 = document.querySelectorAll('.Teraca');
    var slikeIndex7 = document.querySelectorAll('.Noc');
    var slikeIndex8 = document.querySelectorAll('.Vaza');
    var slikeIndex9 = document.querySelectorAll('.Kljucevi');
    var slikeIndex10 = document.querySelectorAll('.Kreve');


    //dovhatanje divova sa adresama slika za model
    var slikeDiv = document.querySelector('.slike');
    var slikeDiv2 = document.querySelector('.slike2');
    var slikeDiv3 = document.querySelector('.slike3');
    var slikeDiv4 = document.querySelector('.slike4');
    var slikeDiv5 = document.querySelector('.slike5');
    var slikeDiv6 = document.querySelector('.slike6');
    var slikeDiv7 = document.querySelector('.slike7');
    var slikeDiv8 = document.querySelector('.slike8');
    var slikeDiv9 = document.querySelector('.slike9');
    var slikeDiv10 = document.querySelector('.slike10');



    //dohvatanje unutrasnosti divova iz prethodnog koraka
    var slikeHTML = slikeDiv.innerHTML;
    var slikeHTML2 = slikeDiv2.innerHTML;
    var slikeHTML3 = slikeDiv3.innerHTML;
    var slikeHTML4 = slikeDiv4.innerHTML;
    var slikeHTML5 = slikeDiv5.innerHTML;
    var slikeHTML6 = slikeDiv6.innerHTML;
    var slikeHTML7 = slikeDiv7.innerHTML;
    var slikeHTML8 = slikeDiv8.innerHTML;
    var slikeHTML9 = slikeDiv9.innerHTML;
    var slikeHTML10 = slikeDiv10.innerHTML;


    //pravljenje niza od prethodno dohvacenih unutrasnjosti
    var slikeImena= slikeHTML.split(',');
    var slikeImena2= slikeHTML2.split(',');
    var slikeImena3= slikeHTML3.split(',');
    var slikeImena4= slikeHTML4.split(',');
    var slikeImena5= slikeHTML5.split(',');
    var slikeImena6= slikeHTML6.split(',');
    var slikeImena7= slikeHTML7.split(',');
    var slikeImena8= slikeHTML8.split(',');
    var slikeImena9= slikeHTML9.split(',');
    var slikeImena10= slikeHTML10.split(',');
    
    
    
    
    var slike = [];

    //formiranje nizova slika 
    var slike1 = [];
    var slike2 = [];
    var slike3 = [];
    var slike4 = [];
    var slike5 = [];
    var slike6 = [];
    var slike7 = [];
    var slike8 = [];
    var slike9 = [];
    var slike10 = [];




    //punjenje svakog od nizova
    slikeImena.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike1.push(imag); 
    });
    slikeImena2.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike2.push(imag); 
    });
    slikeImena3.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike3.push(imag); 
    });
    slikeImena4.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike4.push(imag); 
    });
    slikeImena5.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike5.push(imag); 
    });
    slikeImena6.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike6.push(imag); 
    });
    slikeImena7.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike7.push(imag); 
    });
    slikeImena8.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike8.push(imag); 
    });
    slikeImena9.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike9.push(imag); 
    });
    slikeImena10.forEach(element => {
        var imag = document.createElement('img');
        imag.src = element;
        slike10.push(imag); 
    });









    var modal = document.querySelector('.modal');
    var modalSlika = document.querySelector('.modal-slika');
    var prethodnaStrelica = document.querySelector('.strelica.prethodna');
    var sledecaStrelica = document.querySelector('.strelica.sledeca');
    var zatvori = document.querySelector('.zatvori');
    var trenutnaSlikaIndex;


    //dodavanje eventListenera za pojedine slike
    slikeIndex.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike1;
        prikaziModal(index);
    })});
    slikeIndex2.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike2;
        prikaziModal(index);
    })});
    slikeIndex3.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike3;
        prikaziModal(index);
    })});
    slikeIndex4.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike4;
        prikaziModal(index);
    })});
    slikeIndex5.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike5;
        prikaziModal(index);
    })});
    slikeIndex6.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike6;
        prikaziModal(index);
    })});
    slikeIndex7.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike7;
        prikaziModal(index);
    })});
    slikeIndex8.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike8;
        prikaziModal(index);
    })});
    slikeIndex9.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike9;
        prikaziModal(index);
    })});
    slikeIndex10.forEach(function(slika, index) {
    slika.addEventListener('click', function() {
        slike = slike10;
        prikaziModal(index);
    })});











    prethodnaStrelica.addEventListener('click', function() {
    prikaziPrethodnuSliku();
    });

    sledecaStrelica.addEventListener('click', function() {
    prikaziSledecuSliku();
    });

    zatvori.addEventListener('click', zatvoriModal);

    function prikaziModal(index) {
    modal.style.display = 'block';
    prikaziSliku(index);
    trenutnaSlikaIndex = index;
    }

    function prikaziSliku(index) {
    modalSlika.src = slike[index].src;
    }

    function prikaziPrethodnuSliku() {
    trenutnaSlikaIndex--;
    if (trenutnaSlikaIndex < 0) {
        trenutnaSlikaIndex = slike.length - 1;
    }
    prikaziSliku(trenutnaSlikaIndex);
    }

    function prikaziSledecuSliku() {
    trenutnaSlikaIndex++;
    if (trenutnaSlikaIndex >= slike.length) {
        trenutnaSlikaIndex = 0;
    }
    prikaziSliku(trenutnaSlikaIndex);
    }

    function zatvoriModal() {
    modal.style.display = 'none';
    }
});