
//oggetto contenente i vettori per la lista dei docenti
var listaDocenti = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    Z: []
}

//oggetto contentente vettori delle classi scolastiche
var classi = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
}

/* Sistema di funzionamento responsive dello sfondo */

document.addEventListener('DOMContentLoaded', particles)
window.addEventListener("resize", particles)

 function particles() {
  $("#particles").width($(document).width())
  $("#particles").height($(document).height())
}

/* Chiamate ajax dal client verso i file csv per ottenere dati classi e docenti */
$.ajax({
  type: 'get',
  url: 'docenti.csv',
  datatype: 'csv',
  success: function (response) {
    rows = response.split('\n')
    rows.forEach(row => {
      listaDocenti[row[0].toUpperCase()].push(row)
      
});}})

$.ajax({
  type: 'get',
  url: 'classi.csv',
  datatype: 'csv',
  success: function (response) {
    rows = response.split('\n')
    rows.forEach(row => {
      classi[row[0]].push(row[1])
      
});}})
  
/* funzioni che ritornano le opzioni html di tutte le classi presenti nel determinato anno o dei docenti per lettera iniziale */
function genDocenti(lettera) {
  let lista = listaDocenti[lettera.toUpperCase()]
  let str = ``

  if(lista.length == 0)
    return `<option disabled value="NULL">MISSING</option>` 

  lista.forEach(element => {
    str += `<option value="${element}">${element}</option>`
  })
  return str
}

function genClasse(anno) {
  let lista = classi[anno]
  let str = ``

  lista.forEach(element => {
    str += `<option value="${element}">${element}</option>`
  })

  return str
}

/* relink alle pagine del sito */

function vaiClasse() {

    if(document.getElementById("classe").value != "" && document.getElementById("sezione").value != "") 
      location.href = `https://www.itisfermi.edu.it/Orario/19_30%20ott_web/Classi/${document.getElementById("classe").value}${document.getElementById("sezione").value}${document.getElementById("lezione").value == "Presenza" ? ".html" : "-ddi.html"}`
  }

  function vaiDocenti() {
    
    if(document.getElementById("iniziale").value != "" && document.getElementById("docente").value != "") location.href = `https://www.itisfermi.edu.it/Orario/19_30%20ott_web/Docenti/${document.getElementById("docente").value}.html`

  }

  var flagClasse = true
  var vecchiaClasse = ""


setInterval(() => {

  var classe = document.getElementById("classe").value

    if(document.getElementById("classe").value !== "") {
      document.getElementById("sezione").disabled = false;
      
      if (classe != vecchiaClasse) {
        flagClasse = true
      }

      if (flagClasse) {

        document.getElementById("sezione").innerHTML = genClasse(String(classe))
  
        vecchiaClasse = classe
        flagClasse = false
  
      }
}
  
}, 1);

var vecchiaIniziale = ""
var flagDocente = true

setInterval(() => {
  var iniziale = document.getElementById("iniziale").value

  if(document.getElementById("iniziale").value !== "") {
    document.getElementById("docente").disabled = false;
    
    if (iniziale != vecchiaIniziale) {
      flagDocente = true
    }

    if (flagDocente) {
      document.getElementById("docente").innerHTML = genDocenti(iniziale)
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }
}, 1);
