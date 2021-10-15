import { useJournalEntries } from "./JournalDataProvider.js";
import { JournalEntryComponent } from "./JournalEntry.js";
import { EntryListComponent } from "./JournalEntryList.js";




const allTheJournal = useJournalEntries()

for(const journal of allTheJournal) {
    console.log(journal)
}
allTheJournal()


// useJournalEntries()
// JournalEntryComponent()
EntryListComponent()