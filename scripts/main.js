import { useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { EntryListComponent } from "./JournalEntryList.js";
import { getEntries } from "./JournalDataProvider.js"
import {JournalFormComponent} from "./JournalForm.js"





//call the printer functions you wrote in previous Daily Journal exercises to print the data from your json-server API to the DOM.

// const allTheJournal = useJournalEntries()

// for(const journal of allTheJournal) {
//     console.log(journal)
// }
// allTheJournal()


// useJournalEntries()
// JournalEntryComponent()
EntryListComponent()
JournalFormComponent()