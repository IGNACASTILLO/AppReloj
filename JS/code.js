let d = document;

const mostrarReloj = ()=>{

let fecha= new Date();
let hora= arregloDigito(fecha.getHours());
let minutos= arregloDigito(fecha.getMinutes());
let segundos= arregloDigito(fecha.getSeconds());

d.getElementById("hora").innerHTML= `${hora}:${minutos}:${segundos}`;

const meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
const dias = ['Dom','Lun','Mar','Mie','Jue','Vie','Sab'];
let diaSemana = dias[fecha.getDay()];
let dia = '0' + fecha.getDay();
let mes = meses[fecha.getMonth()];
let fechaTexto=`${diaSemana}, ${dia} ${mes}`;

d.getElementById("dia").innerHTML=fechaTexto;

d.getElementById("contenedor").classList.toggle("estilo");
}



const arregloDigito = (hora) => {
 if(hora<10)
     hora = '0' + hora;
     return hora
}

setInterval(mostrarReloj,1000);