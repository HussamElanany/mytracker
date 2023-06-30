
//  genterate email page
const custName = document.querySelector('.cust-name')
const custNumber = document.querySelector('.cust-number')
const custRequest = document.querySelector('.cust-request')
const custRefund = document.querySelector('.cust-refund')
const confNum = document.querySelector('.conf-num')
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

}
console.log(emailContent)