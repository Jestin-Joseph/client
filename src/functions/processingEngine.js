export function index_folder(file) {
    // console.log("index function clicked", file)
    if (file) {
        const reader = new FileReader();
        const wordFrequency = {}
        reader.onload = function (event) {
            const fileContent = event.target.result;  // The content of the file
            const words = fileContent.split(/\s+/);;
            for (const w of words) {
                wordFrequency[w] = (wordFrequency[w] || 0) + 1;
            }

        };

        // Define the onerror event handler for any errors during the file read
        reader.onerror = function (event) {
            console.error("Error reading file:", event.target.error);
        };

        // Start reading the file as text
        file.type === "text/plain" && reader.readAsText(file);

        const docFreqPair = {
            docPath: file.name,
            wordFrequency
        }

        return docFreqPair
    }


}