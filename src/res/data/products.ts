import {schema, normalize} from 'normalizr';

const productsSchema = new schema.Entity('products');
const productArraySchema = new schema.Array(productsSchema);

export interface ProductInterface{
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
}


export const makeProduct = (id:number,title:string,price:number,image: string,description:string = ''):ProductInterface => {
  return {
    id,
    title,
    price,
    image,
    description
  }
};

//
const productsData = [
  makeProduct(1,'Toy Car',9.99,require('../images/StoreDemo/products/square/toy_car.jpg')),
  makeProduct(2,'Doll',19.99,require('../images/StoreDemo/products/square/doll.jpg')),
  makeProduct(3,'RC Helicopter',59.99,require('../images/StoreDemo/products/square/rc_heli.jpg')),
  makeProduct(4,'Coffee Grinder',26.99,require('../images/StoreDemo/products/square/coffee-grinder.jpg')),
  makeProduct(5,'Rigol Oscilloscope',355.99,require('../images/StoreDemo/products/square/rigol_osc.jpg')),
  makeProduct(6,'Beach Towel',19.99,require('../images/StoreDemo/products/square/beach_towel.jpg')),
  makeProduct(7,'Ear Plugs',6.99,require('../images/StoreDemo/products/square/plugs.jpg')),
  makeProduct(8,'Desk Lamp',15.99,require('../images/StoreDemo/products/square/desk_lamp.jpg')),
  makeProduct(9,'Dune Buggy',12000,require('../images/StoreDemo/products/square/dune_buggy.jpg')),
  makeProduct(10,'Gift Card',20.00,require('../images/StoreDemo/products/square/gift_card.jpg'))
];

export const normalizedProducts = normalize(productsData, productArraySchema);
export const defaultProducts = normalizedProducts.entities.products;
export const defaultProductIds = normalizedProducts.result;




