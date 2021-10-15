import { useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


const entryLog = document.querySelector("#entryLog")


export const EntryListComponent = () => {
    const journals = useJournalEntries()

    // let journalHTMLRepresentations = ""
    for (const journal of journals) {
        
         JournalEntryComponent(journal)
    }
    entryLog.innerHTML += `
    <article class="entryLog">
             ${journal}
         </article>`
}

// useJournalEntries() journalHTMLRepresentations += 
// EntryListComponent()