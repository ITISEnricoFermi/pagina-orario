

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
$(window).resize(particles)

function particles() {
  $("#particles").width($(document).width())
  $("#particles").height($(document).height())
}

/* Chiamate ajax dal client verso i file csv per ottenere dati classi e docenti */
$.ajax({
  type: 'get',
  url: 'docenti.csv?v=' + Math.floor((Math.random() * 100) + 1).toString(),
  datatype: 'csv',
  success: function (response) {
    rows = response.split('\n')
    rows.forEach(row => {
      listaDocenti[row[0].toUpperCase()].push(row)
      
});}})

$.ajax({
  type: 'get',
  url: 'classi.csv?v=' + Math.floor((Math.random() * 100) + 1).toString() ,
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

$("#classe").change(selectClassi)
$("#iniziale").change(selectIniziale)

function selectClassi() {

  if(document.getElementById("classe") !== ""){
    document.getElementById("sezione").disabled = false;
    document.getElementById("sezione").innerHTML = genClasse(String(document.getElementById("classe").value))    
  }
}


function selectIniziale() {

  if(document.getElementById("iniziale") !== ""){
    document.getElementById("docente").disabled = false;
    document.getElementById("docente").innerHTML = genDocenti(String(document.getElementById("iniziale").value))
  }
  
}
