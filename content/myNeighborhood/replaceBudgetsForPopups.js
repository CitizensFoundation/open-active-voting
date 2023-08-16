const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'yourfile.json'); // Put your filename here

// Read JSON file
const dataBuffer = fs.readFileSync(filepath);
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);

// Mapping of number replacements
const replacements = {
    "75": "41",
    "130": "67",
    "60": "31",
    "109": "56",
    "96": "51",
    "76": "41",
    "27": "14",
    "106": "57",
    "67": "39",
    "104": "53",
};

for (const area in data.welcomeLocalesByArea) {
    const areaContent = data.welcomeLocalesByArea[area];

    for (const lang in areaContent) {
        let content = areaContent[lang].content;
        
        // Decode base64
        let decodedContent = Buffer.from(content, 'base64').toString();

        // Replace numbers in the content
        for (const oldNumber in replacements) {
            const newNumber = replacements[oldNumber];
            const regex = new RegExp(`\\b${oldNumber}\\b`, 'g');
            decodedContent = decodedContent.replace(regex, newNumber);
        }

        // Re-encode the content back to base64
        const newContent = Buffer.from(decodedContent).toString('base64');
        
        // Update the content in the data
        data.welcomeLocalesByArea[area][lang].content = newContent;
    }
}

// Save the updated data back to the JSON file
const newDataJson = JSON.stringify(data);
fs.writeFileSync(filepath, newDataJson);

