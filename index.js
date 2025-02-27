// import the firebase realtime database from the following URLs
import {
  initializeApp,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
//import specific functions for the data manipulation inside the app
import {
  getDatabase,
  onValue,
  push,
  ref,
  remove,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
    //enter the firebase url substituting "process.env.DATABASE_URL"
    databaseURL: process.env.DATABASE_URL
}

// initialize the application from the firebaseConfig URL using initializeApp() function
const app = initializeApp(firebaseConfig)
// takes in the app created for the database, using getDatabase() function
const database = getDatabase(app)
// create reference inside the database to push the data, using ref() function
const referenceInDB = ref(database, "leads")

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

//fetch a snapshot of the database every time a change is made, using onValue() function, if a snapshot.exists()
onValue(referenceInDB, function(snapshot) {
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        const snapshotValues = snapshot.val()
        // transform the object to an array to loop it and fetch the items using render() function created above
        const leads = Object.values(snapshotValues)
        render(leads)
    }
})

deleteBtn.addEventListener("dblclick", function() {
    // firebase function remove() to specify witch reference to remove
    remove(referenceInDB)
    // manually empty the UL list
    ulEl.innerHTML = ""
})

inputBtn.addEventListener("click", function() {
    // push the from inside inputEl.value to inside referenceInDB, using push() function
    push(referenceInDB, inputEl.value)
    inputEl.value = "" 
})