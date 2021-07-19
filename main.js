/*OBJETO CAMISETA
const producto1 = {
    tipo: "Camiseta",
    valor: 7500,
    iva: 1.21
}

//OBJETO SHORT
const producto2 = {
    tipo: "Short",
    valor: 4500,
    iva: 1.21
}

//OBJETO MEDIAS
const producto3 = {
    tipo: "Medias",
    valor: 2000,
    iva: 1.21
}
*/
 
//CREO LA FUNCIÓN CONSTRUCTORA PARA LOS OBJETOS DE ARRIBA Y EL MÉTODO PERSONALIZADO DE ALERTA
function Producto(tipo, valor, iva) {
    this.tipo = tipo;
    this.valor = valor;
    this.iva = iva;
    this.alerta = function () {alert ("Producto: " +this.tipo+
    "\nValor: $ " +this.valor * this.iva);}
}

//INSTANCIAS
const camiseta = new Producto("Camiseta", 7500, 1.21);
const short = new Producto("Short", 4500, 1.21);
const medias = new Producto("Medias", 2000, 1.21);

//SALIDAS
console.log ("Producto: " +camiseta.tipo);
console.log ("Valor: " +camiseta.valor);
console.log ("IVA: " + camiseta.iva);
camiseta.alerta();

console.log ("Producto: " +short.tipo);
console.log ("Valor: " +short.valor);
console.log ("IVA: " + short.iva)
short.alerta();

console.log ("Producto: " +medias.tipo);
console.log ("Valor: " +medias.valor);
console.log ("IVA: " + medias.iva)
medias.alerta();