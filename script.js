//console.log(1)
let zina = document.querySelector('.zina');
let zinas = document.querySelector('.cataZina');
function SutitZinu()
{
    console.log('SutitZinu()darbojas');
    zinas.innerHTML = zinas.innerHTML+ '<br>'+zina.value;
}