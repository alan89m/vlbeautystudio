
const $formulario = document.querySelector('#formulario')

$formulario.addEventListener('submit', handlesubmit)
 
 async function handlesubmit(event) {
    event.prevetDefault()
    const formulario = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: formulario,
        headers: {
            'accept': 'application/json'
        }

    })
    if (response.ok) {
        this.reset()
        alert('Contestaremos a la brevedad')
    }

}
