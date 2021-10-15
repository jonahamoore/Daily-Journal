export const JournalEntryComponent = (journal) => {
    return `
        <section id="entry--${journal.id}" class="journalEntry"> 
           <div class="journal-date">${journal.date}</div>
           <div class="journal-concept">${journal.concept}</div>
           <div class="journal-entry">${journal.entry}</div>
           <div class="journal-mood">${journal.mood}</div>
        </section>
    `
}
