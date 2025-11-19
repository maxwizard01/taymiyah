async function encrypt() {
    const patientName =document.getElementById('patientName')
    const patientTitle=document.getElementById('patientTitle')
    const patientMail =document.getElementById('patientMail')
    const patientNumber=document.getElementById('patientNumber')
    const patientIllness =document.getElementById('patientIllness')
    const illness=document.getElementById('illness')
    const text=`Name: ${patientTitle} ${patientName} \n Mail: ${patientMail} \n  Phone: ${patientNumber} 
    \n Illness: ${patientIllness}`
    const password = "abdullahiMaxwizard";//Password need to be saved
    const output = document.getElementById("output");
    encryptedData=''
    try { 
    var characters=text.split('')
    var Reversed=text.split('').reverse()
    characters.map((e,index)=>encryptedData+=`${Reversed[index]}${e}`)
   output.textContent=encryptedData
    } catch (err) {
        output.innerHTML = "Error: " + err;
    }
    return encryptedData
}




function decrypted(encryptedData){
    let decryptedData=''
    var characters=encryptedData.split('')
    for (let i = 0; i < characters.length/2; i++) {
    decryptedData+=characters[1+2*i]}
    return decryptedData
}




function generateQRCode(data) {
    const qrContainer = document.createElement('div');
    new QRCode(qrContainer, {
        text:data,
        width: 100 * 3,
        height: 100 * 3,
    });
    document.getElementById('output').appendChild(qrContainer);
}

function Submitit(){
    encrypt()
    output=document.getElementById('output').textContent
    generateQRCode(output)

}
/* -------------------------------------------
    DOWNLOAD FUNCTION
-------------------------------------------- */
function downloadBarcode() {
    const barcodeDiv = document.getElementById("barcode");
    const img = barcodeDiv.querySelector("img");
    let imageURL;
    if (img) {
        imageURL = img.src;
    } 
    else {
        alert("No QR found to download!");
        return;
    }

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "barcode.png";
    link.click();
}
