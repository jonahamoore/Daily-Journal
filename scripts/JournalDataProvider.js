let journal = [
//     {
//         id: 1,
//         date: "10/13/2021",
//         concept: "The DOM",
//         entry: "We practiced working in the DOM and the use of Bootstrap to style our pages.",
//         mood: "fine"
//     },  {
//         id: 2,
//         date:"10/14/2021",
//         concept: "Martins Aquarium modules",
//         entry: "Learned how to automate Martin's Website by converting raw data into HTML represenatations and render them in the browser",
//         mood: "fine"
//     }, {
//         id: 3,
//         date: "10/15/2021",
//         concept: "Lab Time",
//         entry: "Worked on daily journal and Martin's Aquarium",
//         mood: "pretty good"
// }
]

export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate 
}

export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
        .then(oldEntries => oldEntries.json())  // Parse as JSON
        .then(entries => {
            journal = entries
        })
}

export const saveJournalEntry = (journal) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(journal)
    })
}
