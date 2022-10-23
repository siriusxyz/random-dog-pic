const dogImage= document.getElementById('dogImage')
const dogButton= document.getElementById('dogButton')

  
  const newDog= () => {fetch('https://dog.ceo/api/breeds/image/random')
.then(response=>response.json()).then(json=> 
  { console.log(json.status)
    dogImage.innerHTML= `<img src='${json.message}' height='500' width='500'/>`
  })
}

dogButton.onclick = () => newDog()