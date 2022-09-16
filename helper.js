const items = require("./fakeDb")
const addItem = (name,price)=>{
    let newItem = {name:name,price:price}
    items.push(newItem)
    return newItem
}

function findItem(name) {
    const foundItem = items.find(v => v.name === name);
    if(foundItem === undefined){
      throw { message: "Not Found", status: 404 }
    }
    return foundItem
  }

const updateItem = (name,data)=>{
    let foundItem = items.find(name);
    if (foundItem === undefined) {
      throw {message: "Not Found", status: 404}
    }
    foundItem.name = data.name;
    foundItem.price = data.price;

    return foundItem;
}

const deleteItem = (name)=>{
    let foundindex = items.findIndex(e=> e.name ===name);
    if (foundindex === -1) {
      throw {message: "Not Found", status: 404}
    }
   items.splice(foundindex,1)
}
module.exports={addItem,findItem,updateItem,deleteItem}