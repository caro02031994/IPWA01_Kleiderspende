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
    showAddress: true,
       },
    methods: {

        submitForm() {
            const timestamp = new Date().toLocaleString();
            // Meldung setzen
            this.message = `Formular abgesendet am ${timestamp}`;
          },

    toggleAddress() {
    if (this.abholung === 'Abholung') {
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