alert("Plus kalkulyatori")
let calc = +prompt("Birinchi sonni kiriting")
let calc2 = +prompt("Ikkinchi sonni kiriting")
alert(calc + calc2) 
alert("Minus kalkulyatori")
let ayruv = +prompt("Birinchi sonni kiriting")
let ayruv2 = +prompt("Ikkinchi sonni kiriting")
alert(ayruv - ayruv2)
let calc3 = +prompt("Agar kopaytirish kalkulyatoriga o'tishni xoxlasangiz 'calc' sozini qoldiring")
if(`${calc3} == calc`){
    let kopaytirish = +prompt("Birinchi sonni kiriting")
    let kopaytirish2 = +prompt("Ikkinchi sonni kiriting")
    alert(kopaytirish * kopaytirish2)
} else {
    alert("Son kiriting")
}
let calc4 = +prompt("Agar ayruv kalkulyatoriga o'tishni xoxlasangiz 'calc' sozini qoldiring")
if(`${calc3} == calc`){
    let kopaytirish = +prompt("Birinchi sonni kiriting")
    let kopaytirish2 = +prompt("Ikkinchi sonni kiriting")
    alert(kopaytirish / kopaytirish2)
} 