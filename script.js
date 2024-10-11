document.getElementById('generate').addEventListener('click', function() {
    const text = document.getElementById('text').value;
    
    if (text.trim() === '') {
        alert('Please enter some text or a URL');
        return;
    }

    const qrCodeElement = document.getElementById('qrcode');
    qrCodeElement.innerHTML = '';
    
    new QRCode(qrCodeElement, {
        text: text,
        width: 128,
        height: 128
    });
});
