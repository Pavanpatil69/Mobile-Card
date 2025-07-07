import './App.css';
import Navbar from './Component/Navbar';
import ProductList from './Component/ProductList';
import Footer from './Component/Footer';
import React,{useState} from 'react'
import Additem from './Component/Additem';

function App() {

  const products = [
    {
      price: 50000,
      name: "Iphone 12plus",
      quantity: 0,
    },
    {
      price: 15000,
      name: "Samsung Ultra",
      quantity: 0,
    },
    {
      price: 20000,
      name: "Vivo14 Pro-Max",
      quantity: 0,
    },
  ]

  let [productlist , setproductlist] = useState(products)
  let [totalamout, settotalamout] = useState(0);

  const incrementquantity = (index) => {
    let newproductlist = [...productlist]
    let newtotalamout = totalamout;
    newproductlist[index].quantity++;
    newtotalamout += newproductlist[index].price;
    setproductlist(newproductlist);
    settotalamout(newtotalamout)
  }

  const decrementquantity = (index) => {
    let newproductlist = [...productlist]
    let newtotalamout = totalamout;
    if (newproductlist[index].quantity > 0) {
      newproductlist[index].quantity--;
      newtotalamout -= newproductlist[index].price;
    }  
    setproductlist(newproductlist);
    settotalamout(newtotalamout)
  }

  const resetquantity = () => {
    let newproductlist = [...productlist]
    newproductlist.map((products) =>{
      products.quantity = 0
    })
    setproductlist(newproductlist)
    settotalamout(0)
  }

  const removeitems = (index) => {
    let newproductlist = [...productlist]
    let newtotalamout = totalamout;
    newtotalamout -= newproductlist[index].quantity * newproductlist[index].price
    newproductlist.splice(index,1)
    setproductlist(newproductlist)
    settotalamout(newtotalamout)
  }

  const additem = (name, price) => {
    let newproductlist = [...productlist]
    newproductlist.push({
      price:price,
      name:name,
      quantity:0
    })
    setproductlist(newproductlist)
  }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <Additem additem={additem}/>
    <ProductList productlist={productlist} incrementquantity={incrementquantity} decrementquantity={decrementquantity} removeitems={removeitems}/>
    </main>
    <Footer totalamout={totalamout} resetquantity={resetquantity}/>
    </>
  );
}

export default App;