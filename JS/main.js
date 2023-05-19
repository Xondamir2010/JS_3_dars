/*let matn = "JavaScript";                                    /!* string *!/
let raqam = 45;                                             /!* number *!/
let soz;                                                    /!* undefined *!/
let rost = true;                                            /!* boolean *!/
/!*let rost = 45==45?true:false;*!/                           /!* boolean *!/
let arraayObject = [45,12,"text","matn",true,false];        /!* object *!/
let oddiyObject = {ismi:"Natasha",familiyasi:"Koroleva",yoshi:17}

console.log(oddiyObject.ismi,oddiyObject.familiyasi)*/


/*function savatchaniTekshir(uzatilganMalumot=[12,45]){

    if (uzatilganMalumot.length == 0){
        document.write(" Savatchaning ichida " + uzatilganMalumot.length + " ta ma'lumot bor ");
    }
    else{
        document.write(" Savatchaning ichida " + uzatilganMalumot.length + " dona ma'lumot bor ")
    }
}
let container = [12,45]
savatchaniTekshir();*/

/* Date in JS */

let sana = new Date();
let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftaKuni = sana.getDay()
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
let kunlar  = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]

document.write("Bugun " + yil + "-yil " + kun + "-" + oylar[oy] + ", haftaning " + kunlar[haftaKuni] + " kuni.");





