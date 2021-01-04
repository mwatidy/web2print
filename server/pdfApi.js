const request = require('request')
const fs = require('fs')


const token = {
    headers: {
        'X-PassportPDF-API-Key': 'B9CE2895-D39D-4A3B-9F0D-04BDE571B2A0'
    }
}

function upload(file) {
    return new Promise((resolved, rejected) => {

        request({ ...token, 
            method: 'POST',
            uri: 'https://passportpdfapi.com/api/document/DocumentLoadMultipart',
            formData: {
                'fileData': fs.createReadStream(file),
            }  
        }, (error, response, body) => {

            if(error) rejected(error)

            let data = JSON.parse(body)
            resolved({ id: data.FileId, pages: data.PageCount  })
        
        })


    })
}




function removeText(file) {
    return new Promise((resolved, rejected) => {

        let FileId = "00-26747388-56-26AE44CF-922D-47F7-8C86-75FD6B2B889B"
        token.headers["content-type"] = 'application/json'

        request({ ...token, 
            method: 'POST',
            uri: 'https://passportpdfapi.com/api/pdf/RemoveText',
            body: JSON.stringify({
                FileId: file.id,
                PageRange: '1-' + file.pages
            })
        }, (error, response, body) => { 
            if(error) rejected(console.log(error))
            resolved(body)
        })


    })
}





function download(file) {
    return new Promise((resolved, rejected) => {

        let FileId = file.id
        token.headers["content-type"] = 'application/json'

        request({ ...token, 
            method: 'POST',
            uri: 'https://passportpdfapi.com/api/pdf/SaveDocument',
            body: JSON.stringify({
                FileId,
            })
        }, (error, response, body) => { 
            if(error) rejected(console.log(error))


            let json = JSON.parse(body)
            var buf = Buffer.from(json.Data, 'base64');

            resolved(buf)
        })

    })
}


module.exports = {
    upload,
    removeText,
    download
}