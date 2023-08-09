new Vue({
    el: '#app',
    data: {
    anrede: '',
    name: '',
    strasse: '',
    hausnummer: '',
    gebiet: '',
    plz: '',
    ort: '',
    abholung: '',
    message: '',
    
    baby: false,
    kkind: false,
    kind: false,
    damen: false,
    herren: false,
    kschuhe: false,
    dschuhe: false,
    hschuhe: false,
    textil: false,

    showMessage: false,
    
    showAddress: true,

    submitted: false,
  

    },

      
    
    methods: {
    
        submitForm() {
            this.submitted = true;

             // Datum und Uhrzeit
            const currentDate = new Date();
            const currentTime = currentDate.toLocaleTimeString(); 

      // Meldung für Zeitausgabe
            this.message = ` ${currentDate.toLocaleDateString()} um  ${currentTime}`;

      
            this.showMessage = true;
          },
      

         toggleAddress() {
            if (this.abholung === 'abgeholt') {
            this.showAddress = true;
                } else {
                this.showAddress = false;
                }
        },


    
        checkPLZ() {
            if (this.plz.length >= 2 && this.plz.substring(0, 2) !== '37') {
            alert('Leider wohnen Sie außerhalb des Abholgebietes. Bitte geben Sie Ihre Spende in der Geschäftstelle ab.');
            this.plz = '';
            }
        }
}


});
