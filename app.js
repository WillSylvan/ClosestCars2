
let getCars = () => {
  let createCar = (plateNumber) => {
    return {
      plateNumber: plateNumber,
      latitude: random(-90, 90),
      longitude: random(-180, 180)
    }
  }
  
  return [
    createCar("LV-0000"),
    createCar("LV-0001"),
    createCar("LV-0002"),
    createCar("LV-0003"),
    createCar("LV-0004"),
    createCar("LV-0005"),
    createCar("LV-0006"),
    createCar("LV-0007"),
    createCar("LV-0008"),
    createCar("LV-0009"),
    createCar("LV-0010"),
    createCar("LV-0011"),
    createCar("LV-0012"),
    createCar("LV-0013"),
    createCar("LV-0014"),
  ]
}

let random = (min, max) => Math.random() * (max - min) + min

// ----

// Definēt savas koordinātes. 
// pārsauktfunkciu svdk.
// salīdzināt platumu mašinas ar savasm kord.
// salidzinat garumu masīnas ar savam kord.
// apreiķinat visu platimunu koord. 
// apreiķinat visu garumu koord. 
// kad garuma un platuma summa

// Tad izveidot fubkciju kura izreiķinas visu māšīnu koord. 
// Tad māšinu distanču summa. 
//  Un izvadīt tuvāko mašīnu. 

let users = {
  latitude: 125, 
  longitude: -70
}

let allCars = getCars


let latitude = car1.latitude + users.latitude
let longitude = car1.longitude + users.longitude

console.log(users)
console.log(longitude)