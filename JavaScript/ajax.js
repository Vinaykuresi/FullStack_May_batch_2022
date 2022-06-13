// const axios = require("axios");
import axios from "axios";
axios.get("http://localhost:4000/pseronsDetials")
.then(response => {
    console.log(response.data)
})

// var XHR = new XMLHttpRequest();
// XHR.open("GET", "http://localhost:4000/pseronsDetials", true);
// XHR.onreadystatechange = () => addPersons(XHR);
// XHR.send();
// // Object.keys(user_details).map(addPersons);
// // document.getElementById("person").innerHTML = text;
// function addPersons(personDetails, index){
//     if((XHR.readyState == 4) && (XHR.status == 200)){
//         var person_details = JSON.parse(XHR.responseText);
//         // console.log(personDetails)
//         document.getElementById("person").innerHTML = text;
//         for(let data = 0; data < person_details.length; data++){
//             var each_person = personDetails[data]
//             // console.log(each_person.name)
//             text += each_person.name + " : " + each_person.password + "<br/>" 
//         }
        
//     }
// }