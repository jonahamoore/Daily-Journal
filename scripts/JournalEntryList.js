import { getEntries, useJournalEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"


const entryLog = document.querySelector(".entryLog-container")

export const EntryListComponent = () => {
    getEntries ()
    .then(()=> {

        let allTheJournal = useJournalEntries();

        let journalHTMLRepresentations = " ";

        allTheJournal.forEach((singleEntry) => {

            journalHTMLRepresentations += JournalEntryComponent(singleEntry);
        });

        entryLog.innerHTML += `
        <h2 class= "journal-header">Journal Entries</h2>
        ${journalHTMLRepresentations}
        `
    });
};







// export const EntryListComponent = () => {
//     const journals = useJournalEntries()

//      let journalHTMLRepresentations = ""
//     for (const journal of journals) {
        
//          journalHTMLRepresentations += JournalEntryComponent(journal)
//     }
//     document.querySelector("#entryLog").innerHTML += `
//     <article class="entryLog">
//              ${journalHTMLRepresentations}
//          </article>`
// }

// useJournalEntries() journalHTMLRepresentations += 
// EntryListComponent()