function openCity(evt, cityName) {
    // Declaracion de variables
    var i, tabcontent, tablinks;

    // casillas para dar click
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // los parrafos con la informacion
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
     evt.currentTarget.className += " active"; 
  }
  // Get the element with id="defaultOpen" and click on it
   document.getElementById("defaultOpen").click();

  