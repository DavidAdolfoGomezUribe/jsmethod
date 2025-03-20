import { find,search,save,edit,remove } from "./api.js";
import { myTable } from "./components.js";


const table = document.querySelector(".myTable")

const data = await find()
const fragment = myTable(data)

table.append(fragment)



//extraer todos los datos
// const server = await find();
// console.log(server)


// let id = 1;
// const searcha = await search(22);
// console.log(searcha)

// const obj = 
//     {
//     // createdAt: 1741879590,
//     // updateAt: 1741879590,
//     name: "dav",
//     lastname: "lastname 1",
//     age: 87,
//     email: "email 1",
//     rol: ["user","admin"],
    
//   }

//   const messaje = await save(obj);

//   console.log(messaje);


// const obj = 
//     {
//      // createdAt: 1741879590,
//      // updateAt: 1741879590,
//      name: "dav",
//      lastname: "asdasd",
//      age: 87,
//      email: "email 1",
//      id : 1
    
//    }

//    const messaje = await edit(obj);

//    console.log(messaje);

