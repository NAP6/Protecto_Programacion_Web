// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCgaY_dxaX2RfqMPXcgzdsg0XthF94aYX4",
    authDomain: "datos-climaticos-f76b2.firebaseapp.com",
    databaseURL: "https://datos-climaticos-f76b2.firebaseio.com",
    projectId: "datos-climaticos-f76b2",
    storageBucket: "datos-climaticos-f76b2.appspot.com",
    messagingSenderId: "328572715982",
    appId: "1:328572715982:web:22c4d50b22004363d2619f",
    measurementId: "G-T9FXW8V8ES"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// #########################################################################
// #########################################################################

//Cambia el valor de los datos en tiempo real
const indi = firebase.database().ref('Cantidad_Electro');
indi.on('value', (snapshot) => {
    pos = snapshot.val().Indice - 1;
    const dat = firebase.database().ref('Electronica/' + pos);
    dat.on('value', (snapshot) => {
        const v = snapshot.val();
        switch (v) {
            case 1:
                document.getElementById("imgS").src = 'IMG/mapache.png';
                break;
            case 2:
                document.getElementById("imgS").src = 'IMG/conejo.png';
                break;
        }
    });
});