function saludar() {
let nombre = prompt("Hola, Cual es tu nombre?")
    alert('Hola '+nombre+', Bienvenid@ Kinergia Fisioterapia y Rehabilitacion!')
} 
saludar();


let total = 0;
let bandera = true;
const servicios = ["1. Consulta", "2. Sesion Fisioterapia", "3. Puncion Seca", "4. Kinesiotape", "5. Masaje Descontracturante", "6. Masaje Relajante",
     "7. Descarga Muscular", "8. Radiofrecuencia", "9.Entrenamiento Terapeutico", "10. Entrenamiento Propioceptivo"];
const precios = [350, 400, 700, 300, 500, 400, 450, 300, 250, 250];


function calcularTotalCompra(precio){
    total += precio
}


while(bandera){
let menu = alert("Te presentamos los servicios que manejamos: \n" + servicios.join("\n"))

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



function agendarServicios() {

    const confirmar = confirm("¿Deseas agendar tus servicios?");
 
    if (!confirmar) {
        alert("No se agendaron tus servicios");
        return;
    }
 
    const diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
    let continuar = true;
 
    while (continuar) {
 
        let opcion = prompt("¿Qué día deseas agendar tus servicios?\n" + diasDeLaSemana.join("\n"));
        if (opcion === null) {
         alert("No se agendaron tus servicios");
        continuar = false;
        break;
        }
 
    switch(opcion.toLowerCase()) {
    case "lunes":
    case "Lunes":
    if (confirm("El Lunes tenemos disponible el horario de 11:00 am, ¿deseas agendar?")) {
    alert("Tu servicio será el lunes a las 11:00 am, te esperamos");
    continuar = false;
    } else {
    if (!confirm("No se agendó tu servicio. ¿Deseas agendar otro día?")) {
    continuar = false;
    }
    }
    break;
 
    case "martes":
    case "Martes":
    if (confirm("El Martes tenemos disponible a las 4:30 pm, ¿deseas agendar?")) {
    alert("Tu servicio será el martes a las 4:30 pm, te esperamos");
    continuar = false;
    } else {
    if (!confirm("No se agendó tu servicio. ¿Deseas agendar otro día?")) {
    continuar = false;
    }
    }
    break;

    case "miércoles":
    case "miercoles": 
    case "Miercoles":
    if (confirm("El Miércoles tenemos disponible a las 10:30 am, ¿deseas agendar?")) {
    alert("Tu servicio será el miércoles a las 10:30 am, te esperamos");
    continuar = false;
    } else {
    if (!confirm("No se agendó tu servicio. ¿Deseas agendar otro día?")) {
    continuar = false;
    }
    }
    break;
    
    case "jueves":
    case "Jueves":
    if (confirm("El Jueves tenemos disponible a las 6:30 pm, ¿deseas agendar?")) {
    alert("Tu servicio será el jueves a las 6:30 pm, te esperamos");
    continuar = false;
    } else {
    if (!confirm("No se agendó tu servicio. ¿Deseas agendar otro día?")) {
    continuar = false;
    }
    }
    break;
 
    case "viernes":
    case "Viernes":
    if (confirm("El Viernes tenemos disponible a las 12:30 pm, ¿deseas agendar?")) {
    alert("Tu servicio será el viernes a las 12:30 pm, te esperamos");
    continuar = false;
    } else {
    if (!confirm("No se agendó tu servicio. ¿Deseas agendar otro día?")) {
    continuar = false;
    }
    }
    break;
 
    default:
    alert("No tenemos el horario que estás buscando. Comunícate al 99966512 para ayudarte.");
    if (!confirm("¿Deseas agendar otro día?")) {
    continuar = false;
    }
    break;
        }
    }
}

agendarServicios();


