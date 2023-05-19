/*let sana = new Date();
let yil = sana.getFullYear()
let oy = sana.getMonth()
let kun = sana.getDate()
let haftaKuni = sana.getDay()
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
let kunlar  = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]

document.write("Bugun " + yil + "-yil " + kun + "-" + oylar[oy] + ", haftaning " + kunlar[haftaKuni] + " kuni.");*/



let sana = new Date();
let yil = sana.getFullYear()
let oy = sana.getMonth()
let haftaKuni = sana.getDay()
let kun = sana.getDate()
let soat = sana.getHours()
let minutes = sana.getMinutes()
let second = sana.getSeconds()
let milisicund = sana.getMilliseconds()
let UTSDate = sana.getUTCDate()
let UTSDay = sana.getUTCDay()
let UTSYear = sana.getUTCFullYear()
let UTSHour = sana.getUTCHours()
let UTSMillisicund = sana.getUTCMilliseconds()
let UTSMinut = sana.getUTCMinutes()
let UTSOy = sana.getUTCMonth()
let UTSSicund = sana.getUTCSeconds()
let oylar = ["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"];
let kunlar  = ["yakshanba","dushanba","seshanba","chorshanba","payshanba","juma","shanba"]

document.write(yil + "-yil " + kun + "-" + oylar[oy] + " haftaning " + kunlar[haftaKuni] + " kuni " + " soat-" + soat + " minut-" + minutes + " sicund-" + second + " millisicund-" + milisicund + " UTSDate-"
 + UTSDate + " UTSDay-" + UTSDay + " UTSYear-" + UTSYear + " UTSHour-" + UTSHour + " UTSMillisicund-" + UTSMillisicund + " UTSMinut-" + UTSMinut + " UTSMonth-" + UTSOy + " UTSSicund-" + UTSSicund);
















