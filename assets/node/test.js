const path = require('path')
let fs = require('fs'),
PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log('done')
    fs.writeFileSync("./parsed.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("./card.pdf");
// fs.readFile("./test.pdf", (err, pdfBuffer) => {
//     if (!err) {
//       pdfParser.parseBuffer(pdfBuffer);
//     }
//   })