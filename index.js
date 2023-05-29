import mascotasJson from "./mascotas.json" assert { type: "json" };

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let pets = mascotasJson.mascotas;
      resolve(pets);
    }, 1000);
  });
};

const createPet = (petName, isPet, animal, age) => {
  return new Promise((resolve, reject) => {
    let newPet = {
      nombre: petName,
      mascota: true,
      animal,
      edadHumana: age,
    };
    setTimeout(() => {
      resolve(newPet);
    }, 500);
  });
};

const showData = async () => {
  let res = await getData();
  console.table(res);
  console.log(`Cantidad de elementos: ${res.length}`);
  console.log("***************************\n");
  console.log("Creando mascota");
  let pet = await createPet("sir lancelot", true, "caballo", "14");
  console.log("Se ha creado la siguiente mascota:");
  console.table(pet);
  res.push(pet);
  console.log("***************************\n");
  console.table(res);
  console.log(`Cantidad de elementos: ${res.length}`);
};

showData();

// const arr = ["cafe", "leche", "azucar", "te", "endulsante"];
//
// while (arr.length >= 0) {
//   console.log(arr, arr.length);
//   arr.pop();
//
//   if (arr.length === 0) {
//     console.log("Ya no hay más elementos", arr.length);
//     break;
//   }
// }
