function vaiClasse() {

    // if(lezioni === "presenza") location.href = "https://www.itisfermi.edu.it/Orario/19_30%20ott_web/Classi/" + classe + sezione+ ".html";
    // else location.href = "https://www.itisfermi.edu.it/Orario/19_30%20ott_web/Classi/" + classe + sezione + "-ddi.html";

    if(document.getElementById("classe").value != "" && document.getElementById("sezione").value != "") location.href = `https://www.itisfermi.edu.it/Orario/19_30%20ott_web/Classi/${classe.value}${sezione.value}${lezione.value == "Presenza" ? ".html" : "-ddi.html"}`
  }

  function vaiDocenti() {
    
    if(document.getElementById("iniziale").value != "" && document.getElementById("docente").value != "") location.href = `https://www.itisfermi.edu.it/Orario/19_30%20ott_web/Docenti/${docente.value}.html`

  }

  var flagClasse = true
  var vecchiaClasse = ""


setInterval(() => {
  var classe = document.getElementById("classe").value
  var sezione = document.getElementById("sezione").value
  var lezione = document.getElementById("lezione").value

    if(document.getElementById("classe").value !== "") {
      document.getElementById("sezione").disabled = false;
      
      if (classe != vecchiaClasse) {
        flagClasse = true
      }

      if(document.getElementById("classe").value == 1) {

        if (flagClasse) {
          document.getElementById("sezione").innerHTML = `
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
          ` 

          vecchiaClasse = classe
          flagClasse = false
        }
      }
      else if(document.getElementById("classe").value == 2) {

        if (flagClasse) {

          document.getElementById("sezione").innerHTML =     `
          
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
            <option value="H">H</option>
            <option value="I">I</option>
            <option value="L">L</option>
        
        `

        vecchiaClasse = classe
        flagClasse = false
      
      }
    }
    else if(document.getElementById("classe").value == 3) {

      if (flagClasse) {

        document.getElementById("sezione").innerHTML =     `
        
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="I">I</option>
          <option value="L">L</option>
          <option value="M">M</option>
      
      `

      vecchiaClasse = classe
      flagClasse = false
    
    }
    }
    else if(document.getElementById("classe").value == 4) {

      if (flagClasse) {

        document.getElementById("sezione").innerHTML =     `
        
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="I">I</option>
          <option value="M">M</option>
          <option value="P">P</option>
      
      `

      vecchiaClasse = classe
      flagClasse = false
    
    }
  }
  else if(document.getElementById("classe").value == 5) {

    if (flagClasse) {

      document.getElementById("sezione").innerHTML =     `
      
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="I">I</option>
        <option value="L">L</option>
        <option value="M">M</option>
    
    `

    vecchiaClasse = classe
    flagClasse = false

    }
  }

}
  
}, 1);

var vecchiaIniziale = ""
var flagDocente = true

setInterval(() => {
  var iniziale = document.getElementById("iniziale").value
  var docente = document.getElementById("docente").value

  if(document.getElementById("iniziale").value !== "") {
    document.getElementById("docente").disabled = false;
    
    if (iniziale != vecchiaIniziale) {
      flagDocente = true
    }

    if(document.getElementById("iniziale").value == "A") {

      if (flagDocente) {
        document.getElementById("docente").innerHTML = `
          <option value="ADDUCCI">ADDUCCI</option>
          <option value="ANELLI">ANELLI</option>
          <option value="ANGELUCCI">ANGELUCCI</option>
          <option value="ANTONINI">ANTONINI</option>
          <option value="ARDOVINI">ARDOVINI</option>
          <option value="ARNESANO">ARNESANO</option>
          <option value="AVENALI">AVENALI</option>
        ` 
        vecchiaIniziale = iniziale
        flagDocente = false
      }
    }
    else if(document.getElementById("iniziale").value == "B") {

      if (flagDocente) {
        document.getElementById("docente").innerHTML = `
          <option value="BASSI">BASSI</option>
          <option value="BENIGNO">BENIGNO XD</option>
          <option value="BISTOLFI">BISTOLFI</option>
          <option value="BONACCORSO">BONACCORSO</option>
          <option value="BOSCHETTI">BOSCHETTI</option>
          <option value="BRANDIMARTI">BRANDIMARTI</option>
          <option value="BUCCINI">BUCCINI</option>
        ` 
        vecchiaIniziale = iniziale
        flagDocente = false
      }
    }
    
    else if(document.getElementById("iniziale").value == "C") {

      if (flagDocente) {
        document.getElementById("docente").innerHTML = `
          <option value="CALABRESE">CALABRESE</option>
          <option value="CALBI">CALBI</option>
          <option value="CALCAGNO">CALCAGNO</option>
          <option value="CALIFANO">CALIFANO</option>
          <option value="CALOI">CALOI</option>
          <option value="CAPPELLO">CAPPELLO</option>
          <option value="CARATOZZOLO">CARATOZZOLO</option>
          <option value="CARBONE">CARBONE</option>
          <option value="CARELLO">CARELLO</option>
          <option value="CARPENTIERI">CARPENTIERI</option>
          <option value="CASSAVIA">CASSAVIA</option>
          <option value="CASTIGLIONE">CASTIGLIONE</option>
          <option value="CHIARAMIDA">CHIARAMIDA</option>
          <option value="CIANCHI">CIANCHI</option>
          <option value="CIARDO">CIARDO</option>
          <option value="CIOLLI">CIOLLI</option>
          <option value="COMMODARI">COMMODARI</option>
          <option value="CORRERA">CORRERA</option>
          <option value="CORSARO">CORSARO</option>
          <option value="COSI">COSI</option>
          <option value="CROCETTI">CROCETTI</option>
        ` 
        vecchiaIniziale = iniziale
        flagDocente = false
      }
    }
    else if(document.getElementById("iniziale").value == "D") {

      if (flagDocente) {
        document.getElementById("docente").innerHTML = `
          <option value="D'ALESSANDRO">D'ALESSANDRO</option>
          <option value="D'ALONZO">D'ALONZO</option>
          <option value="DAMIANO">DAMIANO</option>
          <option value="DAMILANO">DAMILANO</option>
          <option value="DE BLASIS">DE BLASIS</option>
          <option value="DE CUNZO">DE CUNZO</option>
          <option value="de felice proia">de felice proia giuspeppa</option>
          <option value="DE LUCA">DE LUCA</option>
          <option value="DE RUSSIS">DE RUSSIS</option>
          <option value="DI FIORE">DI FIORE</option>
          <option value="DI FRANCESCO">DI FRANCESCO</option>
          <option value="DURANTE">DURANTE</option>
          <option value="DURANTI">DURANTI</option>
        ` 
        vecchiaIniziale = iniziale
        flagDocente = false
      }
    }

  else if(document.getElementById("iniziale").value == "E") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="edfis8_res">edfis8_res</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
      }
    }
 
  else if(document.getElementById("iniziale").value == "F") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="FALCICCHIO">FALCICCHIO</option>
        <option value="FALCONI">FALCONI</option>
        <option value="FERRACUTI">FERRACUTI</option>
        <option value="FERRARA">FERRARA</option>
        <option value="FERRI">FERRI</option>
        <option value="FIERLI">FIERLI</option>
        <option value="FRANCO">FRANCO</option>
        <option value="FRANGELLA">FRANGELLA</option>
        <option value="FUSCA">FUSCA</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }
  
  else if(document.getElementById("iniziale").value == "G") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="GALLI">GALLI</option>
        <option value="GIARDINI">GIARDINI</option>
        <option value="GIURI">GIURI</option>
        <option value="GOZZI">GOZZI</option>
        <option value="GRANDINETTI">GRANDINETTI</option>
        <option value="GRASSO">GRASSO</option>
        <option value="GUERCINI">GUERCINI</option>
        <option value="GUZZO">GUZZO</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "I") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="IANNUCCI">IANNUCCI</option>
        <option value="inglese3">inglese3</option>
        <option value="IOVINO">IOVINO</option>
        <option value="ita4_coe">ita4_coe</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "L") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="labfis8_pot">labfis8_pot</option>
        <option value="LAMANNA">LAMANNA</option>
        <option value="LEONARDI">LEONARDI</option>
        <option value="LIANI">LIANI</option>
        <option value="LOMBARDI">LOMBARDI</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "M") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="MAERO">MAERO</option>
        <option value="MAGGIORE">MAGGIORE</option>
        <option value="MAIMONE">MAIMONE</option>
        <option value="MAMMARO">MAMMARO</option>
        <option value="MANCINI">MANCINI</option>
        <option value="MARIANETTI">MARIANETTI</option>
        <option value="MARINELLI">MARINELLI</option>
        <option value="MARINO">MARINO</option>
        <option value="MARTINO">MARTINO</option>
        <option value="MARZO">MARZO</option>
        <option value="MELLONE">MELLONE</option>
        <option value="MENICOCCI">MENICOCCI</option>
        <option value="MICHELI">MICHELI</option>
        <option value="MIRILLI">MIRILLI</option>
        <option value="MITIDIERI">MITIDIERI</option>
        <option value="MORELLI">MORELLI</option>
        <option value="MORICONI">MORICONI</option>
        <option value="MUCCI">MUCCI</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "N") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="NANNERINI">NANNERINI</option>
        <option value="NAPOLI">NAPOLI</option>
        <option value="NAPOLITANO">NAPOLITANO</option>
        <option value="MAMMARO">NARDONE</option>
        <option value="MANCINI">NERVEGNA</option>
        <option value="MARIANETTI">NOSCHESE</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "P") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="PACIULLI">PACIULLI</option>
        <option value="PAGLIARO">PAGLIARO</option>
        <option value="PALOMBA">PALOMBA</option>
        <option value="PANE">PANE</option>
        <option value="PANETTA">PANETTA</option>
        <option value="PARENTE">PARENTE</option>
        <option value="PELA'">PELA'</option>
        <option value="PELUSO">PELUSO</option>
        <option value="PIETRANTUONO">PIETRANTUONO</option>
        <option value="POMELLA">POMELLA</option>
        <option value="PRETI">PRETI</option>
        <option value="PROSPERO">PROSPERO</option>
        <option value="PUCCI">PUCCI</option>
        <option value="PULVIRENTI">PULVIRENTI</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "R") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="RASILE">RASILE</option>
        <option value="RINALDI">RINALDI</option>
        <option value="ROCCHI">ROCCHI</option>
        <option value="rosato">rosato</option>
        <option value="ROSITANI">ROSITANI</option>
        <option value="ROSSI">ROSSI</option>
        <option value="RUSSO G.">RUSSO G.</option>
        <option value="RUSSO N.">RUSSO N.</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "S") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="SANTINI">SANTINI</option>
        <option value="SCANU">SCANU</option>
        <option value="SCARAMELLA">SCARAMELLA</option>
        <option value="SCHIANI">SCHIANI</option>
        <option value="scienze">scienze</option>
        <option value="SECCO">SECCO</option>
        <option value="SEGATORI">SEGATORI</option>
        <option value="SOLARI G.">SOLARI G.</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  
  else if(document.getElementById("iniziale").value == "T") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="TIMPANI">TIMPANI</option>
        <option value="TONIELLI">TONIELLI</option>
        <option value="TONNINA">TONNINA</option>
        <option value="ttg3_res">ttg3_res</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  
  else if(document.getElementById("iniziale").value == "V") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="VACCA E.">VACCA E.</option>
        <option value="VACCA S.">VACCA S.</option>
        <option value="VERGARI">VERGARI</option>
        <option value="VICHI">VICHI</option>
        <option value="vieri">vieri</option>
        <option value="VIPARELLI">VIPARELLI</option>
      ` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

  else if(document.getElementById("iniziale").value == "Z") {

    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option value="ZUCCARINI">ZUCCARINI</option>` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  } else {
    if (flagDocente) {
      document.getElementById("docente").innerHTML = `
        <option disabled value="NULL">MISSING</option>` 
      vecchiaIniziale = iniziale
      flagDocente = false
    }
  }

}
}, 1);
