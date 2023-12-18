const firebaseConfig = {
    apiKey: "AIzaSyDHWc3fYGF8O5x6-ajYiE8hLeFGdexNhnc",
    authDomain: "iq-test-registration.firebaseapp.com",
    databaseURL: "https://iq-test-registration-default-rtdb.firebaseio.com",
    projectId: "iq-test-registration",
    storageBucket: "iq-test-registration.appspot.com",
    messagingSenderId: "273102127989",
    appId: "1:273102127989:web:5a676916b7ccc8dd62493c"
};
  
// Initialize firebase
firebase.initializeApp(firebaseConfig);
  
// Reference your database
var registrationFormDB = firebase.database().ref("registrationForm");
document.getElementById('regForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    
    var name = getElementVal('name'); // corrected variable name
    var email = getElementVal('email'); // corrected variable name
    var contact = getElementVal('contact'); // corrected variable name
    var password = getElementVal('password'); // corrected variable name
    
    
    saveMsg(name, email, contact, password);
    // console.log(name, email, contact, password);
    handleRegistrationSuccess();
}
function handleRegistrationSuccess() {
    // Show the success alert
    document.getElementById('successAlert').classList.remove('hidden');
}

const saveMsg = (name, email, contact, password) =>{
  var newRegistrationForm = registrationFormDB.push();
  
  newRegistrationForm.set({
    name: name,
    email: email,
    contact: contact,
    password: password
  })
  
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
