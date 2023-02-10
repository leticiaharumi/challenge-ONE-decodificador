const textArea = document.querySelector('.conteudoPrincipalInput')
const display = document.querySelector('.textAreaResultado')
const infoDisplay = document.querySelector('.textoResultado')

function hideInfodisplay() {
    infoDisplay.style.visibility = 'hidden'
}

function clickCript(){
    hideInfodisplay();
    btnCriptografar();
    criptografar();
}

function btnCriptografar() {
  const textoCriptografado = criptografar(textArea.value)
  display.value = textoCriptografado
}

function criptografar(stringCripto) {
    let arrayCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]

    stringCripto = stringCripto.toLowerCase()

    for (let i = 0; i < arrayCodigo.length; i++) {
    
    if (stringCripto.includes(arrayCodigo[i][0])) {
        stringCripto = stringCripto.replaceAll(
        arrayCodigo[i][0],
        arrayCodigo[i][1]
        )
    }
}

return stringCripto
}

function clickDescript() {
  const textoDescript = descriptografar(textArea.value)
  display.value = textoDescript
  textArea.value = ''
}

function descriptografar(stringDescript) {
    let arrayCodigo = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ]

    stringDescript = stringDescript.toLowerCase()

    for (let i = 0; i < arrayCodigo.length; i++) {
        if (stringDescript.includes(arrayCodigo[i][1])) {
            stringDescript = stringDescript.replaceAll(
            arrayCodigo[i][1],
            arrayCodigo[i][0]
            )
        }
    }
    return stringDescript
}

/*ARRUMAR*/
function copiarTexto() {
  let textoCopiado = document.querySelector(".textAreaResultado");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999);
  document.execCommand('copy');
}