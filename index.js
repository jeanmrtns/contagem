function contar(){

    var main = document.getElementById('res')
    var txtInicio = document.getElementById('inicio')
    var valorInicio = Number(txtInicio.value)
    var txtFim = document.getElementById('fim')
    var valorFim = Number(txtFim.value)
    var txtIncremento = document.getElementById('incremento')
    var valorIncremento = Number(txtIncremento.value)

    if (valorInicio == 0 || valorFim == 0 || valorIncremento == 0 ){
        main.innerHTML = 'Por favor, preencha todos os campos!'
    } else {
        main.innerHTML = '<p>Contando:</p>'
        for(valorInicio; valorInicio <= valorFim; valorInicio+=valorIncremento){
            main.innerHTML += ` ${valorInicio} &#128073;`
        }
        main.innerHTML += '&#127937;'
    }
}