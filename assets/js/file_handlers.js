
const converter = require('base64-arraybuffer')

export const arrayBufferToBase64 = (arrayBufer) => {
    return new Promise((res) => {

    //   const reader = new FileReader();
    //   reader.readAsDataURL(new Blob([ arrayBufer ]));
    //   reader.onloadend = function () {
    //     resolve(reader.result);
    //   };
    // const base64 = URL.createObjectURL(new Blob([arrayBufer]))

    // res(encodeURIComponent(base64));

    res(converter.encode(arrayBufer))

    });
  };
  
export const base64ToArrayBuffer = async base64 => new Promise(async res => {
    //   const data = await fetch(base64)
    //   res(data.arrayBuffer())

    //   var binary_string = window.atob(base64);
    //   var len = binary_string.length;
    //   var bytes = new Uint8Array(len);
    //   for (var i = 0; i < len; i++) {
    //       bytes[i] = binary_string.charCodeAt(i);
    //   }
    //   res(bytes.buffer);
      res(converter.decode(base64))
  }) 