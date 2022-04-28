const altura = document.getElementById('input-altura');

const peso = document.querySelector('#input-peso');

const submitbutton = document.querySelector('#button-analisar');

const resultado = document.getElementById('resultado');

const container = document.getElementById('container');

const buttonresult = document.getElementById('button-resultado');

function verificar_inputs() {
    let alturavalue = altura.value;
    let pesovalue = peso.value;

    if (alturavalue == "" || pesovalue == "") {
        buttonresult.style.display = "flex"
        buttonresult.style.background = "#A52A2A";
        resultado.innerHTML = "Preencha os campos primeiro";
        buttonresult.style.color = "#fff"
        container.style.height = "27em";
        return;
    }

    else {
        var imc = pesovalue / alturavalue * alturavalue;

        if (imc <= 18.5) {
            resultado.innerHTML = 'Magreza';
            buttonresult.style.display = "flex";
            buttonresult.style.background = "red";
            buttonresult.style.color = "#ffff"

        }

        else if (imc >= 18.5 && imc < 25) {
            resultado.style.color = "#fff";
            buttonresult.style.background = "green";
            resultado.innerHTML = "Normal"
            buttonresult.style.display = "flex"
            console.log("Normal")
        }

        else if (imc >= 25 && imc < 30) {
            buttonresult.style.display = "flex";
            buttonresult.style.background = "#FF6347"
            resultado.innerHTML = "Acima do peso";
            buttonresult.style.color = "#ffff"
        }

    }

}


/* submitbutton.addEventListener('click', function(e) {
    e.preventDefault();

    const alturavalue = altura.value;
    const pesovalue = peso.value;

    if (alturavalue === "" || pesovalue === "") {
        resultado.innerHTML = "Calma amigão, preencha os campos primeiro";

    }
}) */
