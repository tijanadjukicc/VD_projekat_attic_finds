
/*poslednja izmena*/
function poslednjaIzmena(){
    let t = document.lastModified;
    document.getElementById("menjano").innerHTML= t;
    document.getElementById("menjano").style.color="#9b5d00";
}



/*registracija*/
let registrovaniKorisnici=[
    {
        ime:"_",
        mejl:"_",
        telefon:"_",
        lozinka:"_"
    }
]
function registrujSe(){
    resetujGreske();
    let jez = localStorage.getItem("jezik");
    let ime=document.getElementById("korisnickoIme").value;
    let mejl=document.getElementById("mejl").value;
    let telefon=document.getElementById("telefon").value;
    let lozinka=document.getElementById("lozinka").value;
    let potvrda=document.getElementById("potvrdaLozinke").value;
    
    if(proveriFormate(ime, mejl, telefon, lozinka, potvrda)==0) return;

    if(korinsnikVecPostoji(ime)==true){
        if(jez ==1) document.getElementById("greska").innerHTML="Korisnik sa tim imenom vec postoji!";
        else document.getElementById("greska").innerHTML="The username is already taken!";
        return;
    }
    else if(mejlZauzet(mejl)==true){
        if(jez ==1)  document.getElementById("greska").innerHTML="Uneta mejl adresa je vec upotrebljena!";
        else document.getElementById("greska").innerHTML="The mail address is already taken!";
       
        return;
    }
    postaviPonudeKorisnika(ime);
    dodajKorisnika(ime, mejl, telefon, lozinka);
    if(jez ==1)  document.getElementById("greska").innerHTML = "<b>Uspešno ste se registrovali!<br>Prijavite se!</b>"
    else document.getElementById("greska").innerHTML = "<b>Account has been successfully created!<br>Log in!</b>"
    
    return;
}

let pon = [{
    umetnina:"_",
    ponuda:"_"
}]
function postaviPonudeKorisnika(ime){
    localStorage.setItem(ime, JSON.stringify(pon));
}

function proveriFormate(ime, mejl, telefon, lozinka, potvrda){
    let jez = localStorage.getItem("jezik");

    if(ime==""||telefon==""||mejl==""||lozinka==""||potvrda==""){
        if(jez ==1) document.getElementById("greska").innerHTML = "Popunite formular!";
        else document.getElementById("greska").innerHTML = "Fill out the form!";
        return 0;
    }
    else if(/^[a-z]+[a-zA-Z0-9]+$/.test(ime)==false){
        if(jez ==1) document.getElementById("greska").innerHTML = "Nekorektan format korisnickog imena!<br><i>(zapocnite malim slovom, a potom koristite samo brojeve i mala i velika slova)</i>";
        else document.getElementById("greska").innerHTML = "Incorrect format of username!<br><i>(Start with a lowercase letter, and then use only numbers and lowercase and uppercase letters)</i>";
        
        return 0;
    }
    else if(/^[a-z]{1,1}[a-zA-Z0-9]{1,}(\.[a-zA-Z0-9]{1,})?@{1,1}[a-z]+\.{1,1}[a-z]{2,3}$/.test(mejl)==false){//tacka je specijalan karakter zato \. oznacava obicnu tacku
        if(jez ==1) document.getElementById("greska").innerHTML ="Nekorektan format mejla!";
        else document.getElementById("greska").innerHTML = "Incorrect mail format!";
        
        return 0;
    }
    else if(/^((\+381)|(06)){1,1}[0-9]+$/.test(telefon)==false){
        if(jez ==1) document.getElementById("greska").innerHTML ="Nekorektan format broja telefona!<br><i>(broj mora sadrzati samo cifre i poceti sa +381 ili 06)</i>";
        else document.getElementById("greska").innerHTML = "Incorrect format of phone number!<br><i>(The number must contain only digits and start with +381 or 06)</i>";
        
        return 0;
    }
    else if(/ /.test(lozinka)==true){
        if(jez ==1) document.getElementById("greska").innerHTML ="Lozinka ne sme sadrzati razmake!";
        else document.getElementById("greska").innerHTML = "The password mustn't constain any spaces!";
        
        return 0;
    }
    else if(lozinka!=potvrda){
        if(jez ==1) document.getElementById("greska").innerHTML="Lozinka i potvrda lozinke se ne podudaraju!";
        else document.getElementById("greska").innerHTML = "Password and password conformation do not match!";
        
        return 0;
    }
    return 1;
}

function resetujGreske(){
    document.getElementById("greska").innerHTML="";
}

function inicijalizuj(){
    let tempKorisnici = localStorage.getItem("korisnici");
    if(tempKorisnici==null){
       localStorage.setItem("korisnici", JSON.stringify(registrovaniKorisnici));
    }
    else{
        registrovaniKorisnici = JSON.parse(tempKorisnici);
    }
}

function dodajKorisnika(i, m, tel, loz){
    registrovaniKorisnici.push({
        ime:i,
        mejl:m,
        telefon:tel,
        lozinka:loz
    });
    localStorage.setItem("korisnici", JSON.stringify(registrovaniKorisnici));
}

function korinsnikVecPostoji(ime){
    for(let i = 0; i<registrovaniKorisnici.length; i++){
        if(registrovaniKorisnici[i].ime==ime){
            return true;
        }
    }
    return false;
}

function mejlZauzet(mejl){
    for(let i = 0; i<registrovaniKorisnici.length; i++){
        if(registrovaniKorisnici[i].mejl==mejl){
            return true;
        }
    }
    return false;
}

/*prijava*/
function prijaviteSe(){
    resetujGreske();
    let ime = document.getElementById("ime").value;
    let lozinka = document.getElementById("lozinka").value;

    if(ime==""||lozinka==""){
        document.getElementById("greska").innerHTML="Popunite formular!";
        return;
    }
    
    for(let i =0; i<registrovaniKorisnici.length; i++){
        if(registrovaniKorisnici[i].ime==ime){
            if(registrovaniKorisnici[i].lozinka==lozinka){
                localStorage.setItem("ulogovan", true);
                localStorage.setItem("username", ime);
                window.location.href = "Nalog-Profile.html"
                return;
            }
            else{
                document.getElementById("greska").innerHTML="Pogrešna lozinka!";
                return;
            }
        }
    }

    document.getElementById("greska").innerHTML="Morate biti registrovani da biste se prijavili!";
}


function prijaviteSeEng(){
    resetujGreske();
    let ime = document.getElementById("ime").value;
    let lozinka = document.getElementById("lozinka").value;

    if(ime==""||lozinka==""){
        document.getElementById("greska").innerHTML="Fill out the form!";
        return;
    }
    
    for(let i =0; i<registrovaniKorisnici.length; i++){
        if(registrovaniKorisnici[i].ime==ime){
            if(registrovaniKorisnici[i].lozinka==lozinka){
                localStorage.setItem("ulogovan", true);
                localStorage.setItem("username", ime);
                window.location.href = "Nalog-ProfileEng.html"
                return;
            }
            else{
                document.getElementById("greska").innerHTML="Wrong password!";
                return;
            }
        }
    }

    document.getElementById("greska").innerHTML="You must be registered to log in!";
}



function odjaviteSe(){
    localStorage.setItem("ulogovan", false);
    window.location.href = "index.html";
}

/*breadcrumbs*/
let crumbs=[{
    htmlLink:"_",
    tekstLink:"_"
}];

function vecJeNaPutu(cr){
    for(let i = 1; i< crumbs.length;i++){
        if(cr==crumbs[i].tekstLink) return i;
    }
    return -1;
}

function dodajPutanju(){
    let elem=document.getElementById("breadcrumb");
    let itemText = document.getElementById("title").innerText;
    let ind = -1;

    if((ind=vecJeNaPutu(itemText))==-1){
        crumbs.push({htmlLink:window.location.href,tekstLink:itemText});
        localStorage.setItem("crumbs", JSON.stringify(crumbs));
    }
    else{
        crumbs.splice(ind+1);
        localStorage.setItem("crumbs", JSON.stringify(crumbs));
    }

    $(".selected").removeClass("selected");
    for(let i = 1; i<crumbs.length; i++){
        // elem.appendChild(crumbs[i].li);
        let itemLink = document.createElement("a");
        itemLink.href= crumbs[i].htmlLink;
        itemLink.innerText =crumbs[i].tekstLink;

        let itemLi = document.createElement("li");
        itemLi.className= "breadcrumb-item";
        itemLi.appendChild(itemLink);
        if(crumbs[i].tekstLink==itemText)itemLink.classList.add("selected");

        elem.appendChild(itemLi);
    }
}

// function vecJeNaPutu(cr){
//     for(let i = 1; i< crumbs.length;i++){
//         if(cr==crumbs[i].tekstLink) return true;
//     }
//     return false;
// }

function inicijalizujCrumbsove(){
    let tempCrumbs = localStorage.getItem("crumbs");
    if(tempCrumbs==null){
       localStorage.setItem("crumbs", JSON.stringify(crumbs));
    }
    else{
        crumbs = JSON.parse(tempCrumbs);
    }
}

function resetujCrumbsove(){
    crumbs =[{
        htmlLink:"_",
        tekstLink:"_"
    }];
    let itemText ="Početna-Home";

    crumbs.push({htmlLink:window.location.href,tekstLink:itemText});
    localStorage.setItem("crumbs", JSON.stringify(crumbs));
    localStorage.setItem("jezik",null);
}

/*filtriranje umetnina*/
function prikaziFiltere(){
    $("#filteri").toggle(); 
}
function prikaziFiltereAutora(){
    $("#filteriAutori").toggle();
}

function prikaziSortiranje(){
    $("#sort").toggle();
}

function sakrijFiltere(){
    $("#filteri").hide();
}
function sakrijFiltereAutora(){
    $("#filteriAutori").hide();
    $("#sort").hide();
}
function pretraziFilter(filter){
    $("."+filter).each(function(){
        $(this).show();
    })
}

function filtriraj(){
    let flag = 0;
    $(".delo").each(function(){
        $(this).hide();
    });
    if(document.getElementById("slikeC").checked==true){
        pretraziFilter("slika");
        flag = 1;
    }
    if(document.getElementById("skulptureC").checked==true){
        pretraziFilter("skulptura");
        flag = 1;
    }
    if(document.getElementById("ostaloC").checked==true){
        pretraziFilter("ostalo");
        flag = 1;
    }
    if(document.getElementById("gogC").checked==true){
        pretraziFilter("gog");
        flag = 1;
    }
    if(document.getElementById("weiC").checked==true){
        pretraziFilter("weiwei");
        flag = 1;
    }
    if(document.getElementById("daliC").checked==true){
        pretraziFilter("dali");
        flag = 1;
    }
    if(document.getElementById("djakometiC").checked==true){
        pretraziFilter("djakometi");
        flag = 1;
    }
    if(document.getElementById("moneC").checked==true){
        pretraziFilter("mone");
        flag = 1;
    }
    if(document.getElementById("shiotaC").checked==true){
        pretraziFilter("shiota");
        flag = 1;
    }
    if(document.getElementById("eminC").checked==true){
        pretraziFilter("emin");
        flag = 1;
    }
    if(flag==0) {
        pretraziFilter("delo");
        return;
    }
}

/*pretrazi*/
function pretrazi(){
    let unos = document.getElementById("pretraga").value;
    if(unos==""){
        pretraziFilter("delo");
        return;
    }

    let kljucniPojmovi = unos.split(" ");
    unos = unos.toLowerCase();


    $(".delo").each(function(){
        $(this).hide();
    });
    for(let i = 0; i<kljucniPojmovi.length; i++){
        pretraziFilter(kljucniPojmovi[i]);
    }
}

/*ostavljanje ponude*/
function ostavitePonudu(){
    let ul = localStorage.getItem("ulogovan");
    if(ul == "true"){
        resetujGreske();
        let pon = document.getElementById("unosPonude").value;
        if(pon=="") return;
        let um = document.getElementById("title").innerText;
        let korisnik = localStorage.getItem("username");
        let temp = localStorage.getItem(korisnik);/********************************* */
        temp = JSON.parse(temp);
        temp.push({umetnina:um, ponuda:pon});
        localStorage.setItem(korisnik, JSON.stringify(temp));
    }
    else{
        let jez = localStorage.getItem("jezik");
        if(jez==1)document.getElementById("greska").innerText = "Morate biti ulogovani!";
        else document.getElementById("greska").innerText = "Log in first!";
    }
}

/*load dogadjaji za svaki html */

function indexDogadjaji(){
    let temp = localStorage.getItem("ulogovan");
    if(temp == null){
        let ul = false;
        localStorage.setItem("ulogovan", ul);
    }
    resetujCrumbsove();
}

function ukloniPonudu(i){
    let kor = localStorage.getItem('username');
    let pon = localStorage.getItem(kor);
    pon = JSON.parse(pon); // Parse the stored string back to an array
    pon.splice(parseInt(i), 1);
    localStorage.setItem(kor, JSON.stringify(pon)); // Store the modified array as a string again
    $("#r" + i).remove();
}

function popuniPonude(){
    let username = localStorage.getItem("username");
    let mojePonude = localStorage.getItem(username);
    mojePonude = JSON.parse(mojePonude);
    for(let i = 1; i<mojePonude.length; i++){
        $("#mojePonudeTabela").append("<tr id=r"+i+"><td>"+mojePonude[i].umetnina+"</td><td>"+mojePonude[i].ponuda+"</td><td align='center'><i class='fa fa-times' aria-hidden='true' onclick='ukloniPonudu("+i+")'></i></td></tr>");
    }
    $(".fa").css("cursor","pointer");
}
function PrijavaDogadjaji(){
    let ul = localStorage.getItem("ulogovan");
    inicijalizuj();
    inicijalizujCrumbsove();
    dodajPutanju();
    if(ul == 'true'){
        popuniPonude();
        window.location.href = "Nalog-Profile.html"
    }
}


function NalogDogadjaji(){
    inicijalizuj();
    inicijalizujCrumbsove();
    dodajPutanju();
    popuniPonude();
}

function sortiraj()
{
    const svaDela = document.getElementById('svaDela');
    const cards = Array.from(svaDela.getElementsByClassName('kartica'));
    cards.sort((a, b) => {
        const titleA = a.querySelector('.card-title').textContent.trim();
        const titleB = b.querySelector('.card-title').textContent.trim();
        return titleA.localeCompare(titleB);
    });
    cards.forEach(card => svaDela.appendChild(card));
}











// isto kao ovo iznad
function mojNalogRegDogadjaji(){
    inicijalizuj();
    inicijalizujCrumbsove();
    dodajPutanju();
}
//isto kao ovo iznad
function nalogDogadjaji(){
    inicijalizujCrumbsove();
    dodajPutanju();
}

function novostiDogadjaji(){
    poslednjaIzmena();
    inicijalizujCrumbsove();
    dodajPutanju();
}
//isto kao moj nalog
function oNamaDogadjaji(){
    inicijalizujCrumbsove();
    dodajPutanju();
}

function umetniciDogadjaji(){
    // resetujGreske();
    inicijalizujCrumbsove();
    dodajPutanju();
}

function umetnineDogadjaji(){
    inicijalizujCrumbsove();
    dodajPutanju();
    sakrijFiltere();
    sakrijFiltereAutora();
}

//umetnine radjeno 2.6.2023.
function autoportretDogadjaji(){
    inicijalizujCrumbsove();
    dodajPutanju();
}

function prevediSrpski()
{
    let jezik = localStorage.getItem("jezik");
    if(jezik == 1)return;
    localStorage.setItem("jezik",1);
    let stranica = document.getElementById("title").innerText;
    stranica += ".html"
    window.location.href = stranica ;
    return false;
    
}
function prevediEngleski()
{
    let jezik = localStorage.getItem("jezik");
    if(jezik == 2)return;
    localStorage.setItem("jezik",2);
    let stranica = document.getElementById("title").innerText;
    stranica += "Eng.html"
    window.location.href = stranica ;
    return false;
}