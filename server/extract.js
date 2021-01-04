
(async () => { 

    const PDFParser = require('pdf2json')
    const path = require('path')
    const fs = require('fs')


    const api = require('./pdfApi')


    const loadFile = path.join(__dirname, '../static', 'card.pdf')
    const saveFile = path.join(__dirname, '../static', 'pdf.json')
    const downloadFile = path.join(__dirname, '../static', 'downloaded.pdf')



    
    
    // console.log(file)
    // fs.writeFileSync(downloadFile+'.png', file.url)

    console.log('uploading file')
    let file = await api.upload(loadFile)

    console.log('removing text')
    let removeText = await api.removeText(file)

    console.log('saving file')
    let downloaded = await api.download(file)
    fs.writeFileSync(downloadFile, downloaded)


    //GET JSON CONTENTS OF FILE
    console.log('gathering json contents')
    let pdfParser = new PDFParser();
 
    pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
    pdfParser.on("pdfParser_dataReady", pdfData => {

        fs.writeFileSync(saveFile, JSON.stringify(pdfData));

    });

    pdfParser.loadPDF(loadFile);

    


})()


