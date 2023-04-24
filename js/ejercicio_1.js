// Realizar una calculadora simple que incluya suma, resta, multiplicación y división.

function calculadoraComun() {
    let opcion = document.getElementById("opcionesCalculadoraComun").value;
    switch (opcion) {
        case "suma":
            let cantidadNumerosSuma = parseInt(prompt('Ingrese cantidad de numeros a sumar')), suma = 0;
            if (!isNaN(cantidadNumerosSuma) && cantidadNumerosSuma > 0) {
                while (cantidadNumerosSuma > 0) {
                    let numero = parseInt(prompt('Ingrese numero a sumar'));
                    if (!isNaN(numero)) {
                        suma += numero;
                        cantidadNumerosSuma--;
                    } else {
                        alert('ingrese un numero correcto');
                        return;
                    }
                }
                alert(`La suma es: ${suma}`);
            } else {
                alert('ingrese una cantidad correcta');
            }
            break;
        case "resta":
            let cantidadNumerosResta = parseInt(prompt('Ingrese cantidad de numeros a restar')), resta = 0;
            if (!isNaN(cantidadNumerosResta) && cantidadNumerosResta > 0) {
                for (let index = 0; index < cantidadNumerosResta; index++) {
                    let numero = parseInt(prompt('Ingrese numero a restar'));
                    if (!isNaN(numero)) {
                        resta -= numero;
                    } else {
                        alert('ingrese un numero correcto');
                    }
                }
                alert(`La resta es: ${resta}`);
            } else {
                alert('ingrese una cantidad correcta');
            }
            break;
        case "multiplicacion":
            let cantidadNumerosMultiplicacion = parseInt(prompt('Ingrese cantidad de numeros a multiplicar')), multiplicacion = 1;
            if (!isNaN(cantidadNumerosMultiplicacion) && cantidadNumerosMultiplicacion > 0) {
                for (let index = 0; index < cantidadNumerosMultiplicacion; index++) {
                    let numero = parseInt(prompt('Ingrese numero a multiplicar'));
                    if (!isNaN(numero)) {
                        multiplicacion *= numero;
                    } else {
                        alert('ingrese un numero correcto');
                    }
                }
                alert(`La multiplicacion es: ${multiplicacion}`);
            } else {
                alert('ingrese una cantidad correcta');
            }
            break;
        case "division":
            let cantidadNumerosDividir = parseInt(prompt('Ingrese cantidad de numeros a dividir'));

            if (!isNaN(cantidadNumerosDividir) && cantidadNumerosDividir > 0) {
                let division = null;
                for (let index = 0; index < cantidadNumerosDividir; index++) {
                    let numero = parseInt(prompt('Ingrese numero a dividir'));
                    if (!isNaN(numero) && numero !== 0 && (index === 0 || division !== null)) {
                        let numero2 = parseInt(prompt('Ingrese otro numero a dividir'));
                        if (!isNaN(numero2) && numero2 !== 0) {
                            division = (division === null) ? numero / numero2 : division / numero;
                        } else {
                            alert('Ingrese un numero correcto');
                            return;
                        }
                    } else {
                        alert('Ingrese un numero correcto');
                        return;
                    }
                }
                if (division !== null) {
                    alert(`La division es: ${division}`);
                }
            } else {
                alert('Ingrese una cantidad correcta');
            }
            break;
        default:
            let dividendo = parseInt(prompt('Ingrese el dividendo')), resto = 0;
            if (!isNaN(dividendo)) {
                let divisor = parseInt(prompt('Ingrese el divisor'));
                if (!isNaN(divisor) && divisor !== 0) {
                    resto = dividendo % divisor;
                } else {
                    alert('ingrese un numero correcto');
                }
                alert(`El resto  es: ${resto}`);
            } else {
                alert('ingrese un numero correcto');
            }
            break;
    }
}
function calculadoraCientifica() {
    alert('ERROR!. Se encuentra en desarrollo....');
}