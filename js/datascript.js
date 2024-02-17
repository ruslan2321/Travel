document.querySelector('.btn2').addEventListener('click', () =>{

  let name = document.querySelector('.name')
  let num = document.querySelector('.phone')
  let email = document.querySelector('.email')
  let message = document.querySelector('.message')

  const usermassege = {
    iduser: Math.random().toString(36).slice(2),
    name: name.value,
    phone: num.value,
    email: email.value,
    message: message.value
  }


  console.log(usermassege)

    name.value = ''
    email.value = ''
    num.value = ''
    message.value = ''
})
