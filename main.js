/* data: 27/02/23 */
// Declarando as constantes
const data = document.getElementById('data');
const hora = document.getElementById('hora');
// Objeto Date(data atual)
let dataAtual = new Date();
/***************************************************************************/
// Data Atual
let dia = zeroEsquerda(dataAtual.getDate());
let mes = zeroEsquerda(dataAtual.getMonth()+1); // janeiro é igual à 0, então devemos adicionar + 1 ao mês
let ano = zeroEsquerda(dataAtual.getFullYear());

data.innerHTML = (dia + "/" + mes + "/" + ano);
/***************************************************************************/
// Hora Atual
setInterval( () => {
    // Objeto Date(data e hora)
    let horaAtual = new Date();

    let horas = zeroEsquerda(horaAtual.getHours());
    let minutos = zeroEsquerda(horaAtual.getMinutes());
    let segundos = zeroEsquerda(horaAtual.getSeconds());
    hora.innerHTML = horas + ":" + minutos + ":" + segundos;
}, 1000)
/***************************************************************************/
function zeroEsquerda(num) 
{
    if (num < 10) {
        num = "0" + num;
        return num;
    } else {
        return num;
    }
}
/***************************************************************************/
