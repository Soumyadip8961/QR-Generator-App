let qrText = document.getElementById("qrText")
let qrBox = document.getElementById("qrBox")
let qrCode = document.getElementById("qrCode")
let btn = document.getElementById('btn')
let url = document.getElementById('url')
let p = document.querySelector('p')
let QRlink=document.getElementById('QRlink')
btn.addEventListener('click', () => {
    if (qrText.value.length > 0 && qrText.value[0] !== '#' && qrText.value[0] !== '&' && /^\s*$/.test(qrText.value)===false) {
        buffer.style.display = 'inline'
        // qrCode.style.width = '0px'
        qrCode.style.display = 'none'
        p.style.display = 'none'
        url.style.display = 'none'


        qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        QRlink.href="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value
        QRlink.target = "_blank"

        setTimeout(() => {
            buffer.style.display = 'none'
            qrCode.style.display = 'block'
            // qrCode.style.width = '200px'
            if (qrText.value.length > 70) {

                url.style.height = "70px"
            }
            else {
                url.style.height = "30px"
            }
            url.style.display = 'block'
            p.style.display = 'block'
            url.innerHTML = `${qrText.value}`
            qrText.value = ''
        }, 500);






    }
    else if (qrText.value[0] === '#' || qrText.value[0] === '&' ) {

        alert(`Cannot Generate QR Code for: ${qrText.value} `)

    }
    else if(/^\s*$/.test(qrText.value)) {
        qrText.classList.add('error')
        qrText.value = ''
        setTimeout(() => {
            qrText.classList.remove('error')
        }, 1000);
    }
})

// qrCode.addEventListener('click',()=>{


// })
