import { saveJournalEntry } from "./JournalDataProvider.js"
import { EntryListComponent } from "./JournalEntryList.js"

const contentTarget = document.querySelector("#JournalFormContainer")






// <section id="entry--${journal.id}" class="journalEntry"> 
//            <div class="journal-date">${journal.date}</div>
//            <div class="journal-concept">${journal.concept}</div>
//            <div class="journal-entry">${journal.entry}</div>
//            <div class="journal-mood">${journal.mood}</div>
//         </section>
document.querySelector("body").addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        
        const newEntry = {
            
            date: document.querySelector("#date").value,
            concept: document.querySelector("#concept").value,
            entry: document.querySelector("#entry").value,
            mood: document.querySelector("#mood").value,
        }
        console.log(newEntry)
        //you do not need an id, id is assigned by the database
        document.querySelector("#date").value = ""
        document.querySelector("#concept").value = ""
        document.querySelector("#entry").value = ""
        document.querySelector("#mood").value = ""
        console.log("you clicked me")
        saveJournalEntry(newEntry)
        .then(EntryListComponent)
    }
})


export const JournalFormComponent = () => {
    contentTarget.innerHTML = `
    <div id="JournalFormContainer">               
            <h2>Jonah's Daily Journal</h2>
    
                
                    <fieldset>
                        <label for="journalDate">Date</label>
                        <input type="date" name="journalDate" id="date">
                    </fieldset>
                
    
                <div class="conceptsCovered">
                    
                            <fieldset>
                                <label for="conceptsCovered">Concepts Covered</label>
                                <input type="text" name="conceptsCovered" id="concept">
                            </fieldset>
                    
                </div>
    
                <div>
                    
                        <fieldset>
                            <label for="journalEntry">Journal Entry</label>
                            <textarea id="entry"></textarea>
                        </fieldset>
                    
                </div>
    
                <div class="moodOfTheDay">
                    
                        <fieldset>
                            <label for="moodOfTheDay">Mood of the day</label>
                            <select id="mood" class="form-select" size="1" aria-label="default select example">
                                <option value="Fine">Fine</option>
                                <option value="Frustrated">Frustrated</option>
                                <option value="Sad">Sad</option>
                                <option value="Pretty good">Pretty Good</option>
                                <option value="Here">Here</option>
                            </select>
                        </fieldset>
                    
                </div>
    
                <div class="button">
                    
                        <fieldset>
                            <button type="submit" id="saveJournalEntry" >Record Journal Entry</button>
                        </fieldset>
                    
                </div>

                <ul class="datedEntries">
                    <li>
                        <span>Entry 1</span>
                        <button class="delete">Delete</button>
                        <button class="edit">Edit</button>
                    </li>
                </ul>
    `
}