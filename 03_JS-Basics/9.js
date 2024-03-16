const person = {
    vorname: 'Max',
    nachname: 'Mustermann',
    alter: 25,
    printVorname: function () {
        console.log(this.vorname)
    }
}

function printPerson(person) {
    console.log(person.vorname + ' ' + person.nachname)
}

function printPerson2({ vorname, nachname }) {
    console.log(vorname + ' ' + nachname)
}

printPerson(person)
printPerson2(person)

person.printVorname()