let date = Date();
let sizeVal = "small";

function* idMaker() {
    let index = 0;
    while (true) {
      yield index++;
    }
  }
  const gen = idMaker();
  gen.next().value
  

// image = document.getElementById('img');
const productList = [
  {

    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },

  
  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },

  
  {
    createdAt:Date(),
    image: `Not avilable$`,
    name: "pizza Hunt",
    price: "100",
    size: sizeVal,
    id: gen.next().value,
  },


];

module.exports = productList;
