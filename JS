let nombre = prompt("Hola, Cual es tu nombre?")
console.log(nombre);
 function saludar() {
    return alert('Hola '+nombre+', Bienvenid@ Kinergia Fisioterapia y Rehabilitacion!')
} 
saludar();

let total = 0;
let bandera = true;

const servicios = ["1. Consulta. 2. Sesion Fisioterapia, 3. Puncion Seca, 4. Kinesiotape, 5. Masaje Descontracturante, 6. Masaje Relajante, 7. Descarga Muscular, 8. Radiofrecuencia, 9.Entrenamiento Terapeutico, 10. Entrenamiento Propioceptivo"]
console.log(servicios);
const precios = [350, 400, 700, 300, 500, 400, 450, 300, 250, 250];
console.log(precios);


function calcularTotalCompra(precio){
    total += precio
}


while(bandera){
let menu = alert("Te presentamos los servicios que manejamos: \n" +"1. Consulta. \n 2. Sesion Fisioterapia, \n 3. Puncion Seca,\n 4. Kinesiotape,\n 5. Masaje Descontracturante,\n 6. Masaje Relajante,\n 7. Descarga Muscular,\n 8. Radiofrecuencia,\n 9.Entrenamiento Terapeutico,\n 10. Entrenamiento Propioceptivo")
let seleccionServicio = prompt("Ingresa el numero del Servicio que deseas agregar")
console.log(seleccionServicio)
switch (parseInt(seleccionServicio)) {
    case 1:
        bandera = confirm(" Has agregado una consulta, Deseas agregar otro servicio?")
        calcularTotalCompra(350)
        break;
    case 2:
        bandera = confirm("Has agregado una Sesion de Fisioterapia,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra(400);
        break;
    case 3:
        bandera = confirm("Has agregado una Puncion Sesa,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra(700);
        break;
    case 4:
        bandera = confirm("Has agregado Kinesiotape,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra (300);
        break
    case 5:
        bandera = confirm("Has agregado un Masaje Descontracturante,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra (500);
        break;
    case 6:
         bandera = confirm("Has agregado un Masaje Relajante,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra(400);
        break;
    case 7:
        bandera = confirm("Has agregado una Descarga Muscular,\n Deseas agregar la consulta u otro servicio?")
       calcularTotalCompra(450);
        break;
    case 8:
        bandera = confirm("Has agregado Radiofrecuencia,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra(300);
        break;
    case 9:
        bandera = confirm("Has agregado un Entrenamiento Terapeutico,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra (250);
        break;
    case 10:
        bandera = confirm("Has agregado un Entrenamiento Propioceptivo,\n Deseas agregar la consulta u otro servicio?")
        calcularTotalCompra(250);
        break;
    default:
        "seleccion Invalida, porfavor ingresa un numero del 1 al 10"
        break;
    }
}

alert("El Total de tus servicios es: " + total,);


function agendarServicios(){
confirm ("Deseas agendar tus Servicios?")
}
agendarServicios();

    let agenda = ["Lunes, Martes, Miercoles, Jueves, Viernes"];
    let continuar = true

    while(continuar){
        let opcion = prompt("que dia deseas agendar tus servicios: \n 1. Lunes\n 2. Martes \n 3. Miercoles \n 4 Jueves \n 5. Viernes")
        if(opcion === null){
            alert("No se agendaron tus servicios")
            continuar = false;
        } else if (opcion === "lunes" || opcion ==="Lunes"){
            confirm("El Lunes tenemos disponible el horario de 11:00 am,\n deseas agendar?")
            alert("Tu servicio sera el lunes a las 11:00 am, te esperamos")
            continuar = false;
        } else if (opcion == "martes" || opcion === "Martes") {
            confirm("El Martes, tenemos disponible a las 4:30 pm, \n deseas agendar?")
            alert("Tu servicio sera el Martes a las 4:30 pm, te esperamos")
            continuar = false;
        } else if (opcion === "miercoles" || opcion === "Miercoles") {
            confirm("El Miercoles, tenemos disponible a las 10:30 am, \n deseas agendar?")
            alert("Tu servicio sera el Miercoles a las 10:30 am, te esperamos")
            continuar = false;
        } else if (opcion === "jueves" || opcion === "Jueves") {
            confirm("El Jueves, tenemos disponible a las 6:30 pm, \n deseas agendar?")
            alert("Tu servicio sera el Jueves a las 6:30 pm, te esperamos")
            continuar = false;
        } else if (opcion === "viernes" || opcion === "Viernes") {
            confirm("El Viernes, tenemos disponible a las 12:30 pm, \n deseas agendar?")
            alert("Tu servicio sera el Viernes a las 12:30 pm, te esperamos")
            continuar = false;
        } else  {
            alert("No tenemos el horario que estas buscando, comunicate al 99966512 para ayudarte")
            continuar = false;
        }  
        }
