const form = document.querySelector("#searchForm")
const input = document.querySelector("#input")
const results = document.querySelector("#results")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    let searchTerm = input.value.trim()

    if (!searchTerm) {  
        results.innerHTML = "<p>Kindly search for a word</p>"
        return
    }

 try {
const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`)
const data = await response.json();
displayDefinition(data)
 }catch (error) {
    console.error("Error:", error);
        results.innerHTML = "<p>Something went wrong. Try again.</p>";
 }
} )
function displayDefinition(words){
    results.innerHTML = ""
    if(!words || words.length === 0){
        results.innerHTML = "<p>no word found.kindly try another one.</p>"
        return;
    }
    words.forEach(word => {
        const div = document.createElement("div");
        div.classList.add("word");
          const phonetic = word.phonetics[0]?.text || "N/A";
        const audio = word.phonetics[0]?.audio || "";
        const definition = word.meanings[0].definitions[0].definition;

        div.innerHTML = `
            <h2>${word.word}</h2>
            <p><strong>Pronunciation:</strong> ${phonetic}</p>
            <p><strong>Definition:</strong> ${definition}</p>
           
            
        `;

        results.appendChild(div);
    });
}
console.log("JS is working")