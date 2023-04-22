// Email Js
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactOrder = document.getElementById('contact-order'),
    contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
e.preventDefault()
// check if the field has a value
    if(contactName.value === '' || contactEmail.value === '' || contactOrder.value === ''){
    //  add and remove color
    contactMessage.classList.remove('color-blue')
    contactMessage.classList.add('color-red')
// show message
    contactMessage.textContent = 'write all the input fields 📩'

    }
    else{
        // serviceID-templateID-#form-publickey
        emailjs.sendForm('service_acnpmk3','template_usz39ab','#contact-form','t2vIxTbs7E9d_bR4v')
                .then(() =>{
                    // show mess and  add color
                    contactMessage.classList.add('color-blue')
                    contactMessage.textContent = 'Message sent ✅'
                    // remove message after 5 seconds
                    setTimeout(() =>{
                        contactMessage.textContent = ''
                    }, 30000)

                }, (error)=>{
                    alert('OOPS! SOMETHING HAS FAILED....', error)
                })
    }
}
contactForm.addEventListener('submit', sendEmail)