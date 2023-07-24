import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
// import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firstore.js";


import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCarN6h6FPkS3raGOKAScjMJcdp_r0kHWU",
    authDomain: "smitproject-39703.firebaseapp.com",
    projectId: "smitproject-39703",
    storageBucket: "smitproject-39703.appspot.com",
    messagingSenderId: "849520424684",
    appId: "1:849520424684:web:2a1feca7190271ea5557c9",
    measurementId: "G-LKLK8SZ6EX"
};
var btn = document.getElementById("add")
var btn_update = document.getElementById("update")
let btn_dlt = document.getElementById("dlt")


const add = () => {
    let first = document.getElementById("first").value
    set(ref(db, "value/"), {
        first: first
    })
        .then(() => {
            alert("succes")
        })
        .catch((e) => {
            alert(e)
        })
}

const update_1 = () => {
    let second = document.getElementById("first").value
    remove(ref(db, "value/"))
    .then(() => {
        // alert("remove succes")
    })
    .catch((e) => {
        alert(e)
    })
    setTimeout(()=>{
      
        update(ref(db, "value/"), {
           second:prompt("enter value")
        })
        .then(() => {
            alert(" update succes")
        })
        .catch((e) => {
            alert(e)
        })
      }, 2000)
}
const dlt =()=>{
    let third = document.getElementById("dlt")
    
    remove(ref(db, "value/"))
    .then(() => {
        alert("remove succes")
    })
    .catch((e) => {
        alert(e)
    })
}
btn.addEventListener("click", add)
btn_update.addEventListener("click", update_1)
btn_dlt.addEventListener("click", dlt)


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);