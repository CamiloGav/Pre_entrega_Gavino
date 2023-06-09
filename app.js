/// PRE ENTREGA 

/// PEDIR USUARIO

alert('Buenas tardes, gracias por usar E-reposteria!')

let usuario = prompt('Ingresa tu usuario por favor: ');

alert(`Bienvenido ${usuario}!`);

/// "CANASTO" 

let total = 0;

function sumaIngrediente (total, valor, cantidad) {
    return total = total + (valor*cantidad);
}

/// PEDIR TIPO DE PRODUCTO 

let opcion = parseInt(prompt('Bienvenido a su carrito!' + '\n' + '\n' + '                 ¿Qué producto desea agregar? :' + '\n' + '\n' +
'"1": Porción bizcochuelo' + '\n' +
'"2": Base Tarta Gelatina' + '\n' +
'"3": Cupcake ' + '\n' +
'"0": Salir' + '\n' + '                 Ingresa tu opción :'));

switch(opcion) {

    case 1: 
        newTotal = sumaIngrediente(total, 2000, 1);
        aditivo = ' un relleno'
        console.log(`Agregaste con exito un bizcochuelo`);            
        break;
    case 2:
        newTotal = sumaIngrediente(total, 1500, 1);
        aditivo = ' una cobertura'
        console.log(`Agregaste con exito una Base de Tarta de Gelatina`);             
        break;
    case 3:
        newTotal = sumaIngrediente(total, 250, 1);
        aditivo = ' un frosting a su Cupcake'
        console.log(`Agregaste con exito un Cupcake`);             
        break;
    default:
        alert('No es una opción valida');
}

let continuar = prompt(`Su total es de ${newTotal}$, desea agregar ${aditivo}? si/no`);

/// PEDIR EL RELLENO

if (continuar == 'si') {
    if (opcion == 1) {
        relleno = parseInt(prompt('¿Qué relleno vas a usar' + '\n' + '\n' + '\n' +
            '"1": Frutilla con crema' + '\n' +
            '"2": Dulce de Leche con Banana' + '\n' +
            '"3": Dulce de Leche con Merengue' + '\n' + '\n' +'                 Ingresa tu opción :'));
        
            switch(relleno) {

                case 1: 
                    newTotal = sumaIngrediente(newTotal, 500, 1);
                    console.log(`Agregaste un relleno con exito.`);            
                    break;
                case 2:
                    newTotal = sumaIngrediente(newTotal, 400, 1);
                    console.log(`Agregaste un relleno con exito.`);            
                    break;
                case 3:
                    newTotal = sumaIngrediente(newTotal, 350, 1);
                    console.log(`Agregaste un relleno con exito.`);            
                    break;
                default:
                    alert('No es una opción valida');
            }
    } else {
        if (opcion == 2) {
            cobertura = parseInt(prompt('¿Qué cobertura vas a usar' + '\n' + '\n' + '\n' +
            '"1": Frutilla con crema' + '\n' +
            '"2": Durazno con crema' + '\n' +'                 Ingresa tu opción :'));
        
            switch(cobertura) {

                case 1: 
                    newTotal = sumaIngrediente(newTotal, 1200, 1);
                    console.log(`Agregaste una cobertura con exito.`);            
                    break;
                case 2:
                    newTotal = sumaIngrediente(newTotal, 1100, 1);
                    console.log(`Agregaste una cobertura con exito.`);            
                    break;
                
                default:
                    alert('No es una opción valida');
            }
        } else {
            frosting = parseInt(prompt('¿Qué frosting vas a usar' + '\n' + '\n' + '\n' +
            '"1": Mousse de chocolate' + '\n' +
            '"2": Crema Chantilly' + '\n' + '\n' +'                 Ingresa tu opción :'));
        
            switch(frosting) {

                case 1: 
                    newTotal = sumaIngrediente(newTotal, 230, 1);
                    console.log(`Agregaste un frosting con exito.`);            
                    break;
                case 2:
                    newTotal = sumaIngrediente(newTotal, 200, 1);
                    console.log(`Agregaste un frosting con exito.`);            
                    break;
                
                default:
                    alert('No es una opción valida');
            }
        }
    }
} else { 
    console.log('A Pagar o abandonar el carrito')
}

/// PEDIR COBERTURA
let pago = '';
if (opcion == 1 || opcion == 3) {
    continuar = prompt(`Su total es de ${newTotal}$, desea agregar una cobertura? si/no`);
    if (continuar == 'si') {
        console.log('Agregamos una cobertura');
        newTotal = newTotal + 700; /// Por el momento tiene una sola cobertura
    }
    

    pago = prompt('¿Cómo desea pagarlo?' + '\n' + '\n' + '\n' +
            '"TD": Tarjeta de debito' + '\n' +
            '"TC": Tarjeta de credito' + '\n' + '\n' +'                 Ingresa tu opción :');
} else {
    console.log('No tiene cobertura las Tartas de gelatina');
    pago = prompt('¿Cómo desea pagarlo?' + '\n' + '\n' + '\n' +
            '"TD": Tarjeta de debito' + '\n' +
            '"TC": Tarjeta de credito' + '\n' + '\n' +'                 Ingresa tu opción :');
}

/// COMO PAGAR

if (pago == 'TD'){
    console.log(`El total a pagar es de ${newTotal}$`);
    console.log('Gracias por su compra!');
} else {
    if (pago == 'TC') {
        cuotas = parseInt(prompt('En cuantas cuotas lo pagas? '));
        interesCuotas(cuotas);
    } else {
        console.log('No es una opcion válida');
    }
}

function interesCuotas(cuotas) {
    if (cuotas == 1) {
        console.log(`El total a pagar es de ${newTotal*1,1}$ en una cuota.`);
        console.log('Gracias por su compra!');
    } else {
        console.log(`El total a pagar es de ${newTotal*(1+((10*cuotas)/100))}$ en ${cuotas} cuotas iguales de ${(newTotal*(1+((10*cuotas)/100))/cuotas)}`);
        console.log('Gracias por su compra!');
    }
    
}