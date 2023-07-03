
//  genterate email page
const custName = document.querySelector('.cust-name')

const custNumber = document.querySelector('.cust-number')

const HotelName = document.querySelector('.htl-name')

const custRequest = document.querySelector('.cust-request')

const custReason = document.querySelector('.cust-reason')

const checkInDate = document.querySelector('.check-in-date')

const checkoutDate = document.querySelector('.check-out-date')

const custRefund = document.querySelector('.cust-refund')

const confNum = document.querySelector('.conf-num')

const confHtlId = document.querySelector('.conf-htl-id')

const productName = document.querySelector('#product')

const emailContent = document.querySelector('.email-content')

function confirmTheCxl() {

    let emailHTML = `
   <p> 
        Estimado/a don/doña ${custName.value}
        </br>
        Gracias por contactar con el Departamento de Atención al Cliente de Expedia
        En relación a su reserva con número de itinerario ${custNumber.value} 
        </br>
        </br>
        Le escribo para confirmarle la cancelación del ${productName.value}.
        La reserva del ${productName.value} ya está cancelada con el reembolso ${custRefund.value}.
        <br>
       El reembolso se hace a la misma tarjeta utilizada en el pago, tarda de siete a quince días laborables como máximo, según el ciclo bancario emisor de la tarjeta, para ser reflejado en su cuenta.
      
        </br>
        </br>
        Lamentamos las molestias que esto haya podido ocasionarle y agradecemos su paciencia y colaboración en todo momento.
        </br>
        Reciba un cordial saludo.
        </br>
        Atentamente
        </br> 
        Luis
        </br>
        Dpto. de Atención al Cliente
        </br>
        Expedia

   </p>
   `

    emailContent.innerHTML = emailHTML;
    refresh()
    custRequest.style.display = 'none'
    confNum.style.display = 'none'
    clearInputs()
}

function askToWait() {

    let emailHTML = `
   <p> 
        Estimado/a don/doña ${custName.value}
        </br>
        Gracias por contactar con el Departamento de Atención al Cliente de Expedia
        En relación a su reserva con número de itinerario ${custNumber.value} 
        </br>
        </br>
        Le escribo para confirmarle que estamos trabajando en su caso , asi que porfavor espere 5 dias como maximo para recibir la respuesta .
        </br>
        </br>
        Lamentamos las molestias que esto haya podido ocasionarle y agradecemos su paciencia y colaboración en todo momento.
        </br>
        Reciba un cordial saludo.
        </br>
        Atentamente
        </br> 
        Luis
        </br>
        Dpto. de Atención al Cliente
        </br>
        Expedia

   </p>
   `

    emailContent.innerHTML = emailHTML;
    confNum.style.display = 'none'
    custRefund.style.display = 'none'
    custRequest.style.display = 'none'
    productName.style.display = 'none'
    clearInputs()
}

function confirmVoid() {

    let emailHTML = `
   <p> 
        Estimado/a don/doña ${custName.value}
        </br>
        Gracias por contactar con el Departamento de Atención al Cliente de Expedia
        En relación a su reserva con número de itinerario ${custNumber.value} 
        </br>
        </br>
        Le escribo para confirmarle la cancelación de su vulevo  con la confirmacion ${confNum.value}
        </br>
        </br>

        La reserva del  vuelo ya está cancelada con el reembolso ${custRefund.value}
        <br>
        El reembolso se hace a la misma tarjeta utilizada en el pago,  El reembolso tarda de 7 a 10 días laborables como máximo, según el ciclo bancario emisor de la tarjeta, para ser reflejado en su cuenta.
       

        </br>
        </br>
        Lamentamos las molestias que esto haya podido ocasionarle y agradecemos su paciencia y colaboración en todo momento.
        </br>
        Reciba un cordial saludo.
        </br>
        Atentamente
        </br> 
        Luis
        </br>
        Dpto. de Atención al Cliente
        </br>
        Expedia

   </p>
   `

    emailContent.innerHTML = emailHTML;
    refresh()
    custRequest.style.display = 'none'
    productName.style.display = 'none'
    clearInputs()
}

function askHotelForWaiver() {

    let emailHTML = `
    <p> 
    Dear ${HotelName.value}
    <br>
    <br>
    Hello from the Expedia Customer Support Team! We're reaching out as our mutual customer, ${custName.value}  has asked to ${custRequest.value} as ${custReason.value}  
    <br>
    Due to this situation, we'd like to request a waiver for our customer.
    <br>
    <br>
    Here's a summary of the customer's original booking:
    <br>
    <br>
    Traveler name(s): ${custName.value}
    <br>
    Hotel confirmation ID: ${confHtlId.value}
    <br>
    Check-in date: ${checkInDate.value}
    <br>
    Check-out date: ${checkoutDate.value}   
    <br>
    <br>
                        
    If you could review this request and let us know your decision within 1 business day, including the information below, we would appreciate it!
    <br>
    <br>
    Approver's name:
    <br>
    <br>
    Approver's position:
    <br>
    Number of nights approved for refund:
    <br>
    Additional comments:
    <br>
    <br>
    We hope you can accommodate our customer, and appreciate your support. Thanks for taking a look, and for your ongoing partnership!
    <br>
    <br>
    Best regards,
    
    <br>
    <br>
    <br>
    Luis .
    Expedia Customer Support Team
    
    </p>
   `

    emailContent.innerHTML = emailHTML;
    refresh()

    productName.style.display = 'none'
    custNumber.style.display = 'none'
    custRefund.style.display = 'none'
    confNum.style.display = 'none'
    clearInputs()
}

// Clear Inputs 

function clearInputs() {
    custName.value = ''
    custNumber.value = ''
    custRefund.value = ''
    custRequest.value = ''
    confNum.value = ''
    //custName.value = ''
}

// Refresh Page

function refresh() {
    custName.style.display = 'inline-block'
    custNumber.style.display = 'inline-block'
    custRefund.style.display = 'inline-block'
    custRequest.style.display = 'inline-block'
    productName.style.display = 'inline-block'
    confNum.style.display = 'inline-block'
}
//console.log(emailContent)

