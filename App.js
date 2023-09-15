//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
//import Test from './components/test';
//import Form from './components/form';
//import NewForm from './components/pra';
//import Practice from './components/practice';




function App() {
  const ProductList = () => {
    const [cart, setCart] = useState([]);


    // ADD TO CART
     const addToCart = (product) => {
      if (cart.some((item) => item.sku === product.sku)) {
        alert("Item is already in the cart");
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };



    // CHANGE QUANTITY

    const handleQuantityChange = (event, index) => {
      const newQuantity = parseInt(event.target.value);
      if (!isNaN(newQuantity) && newQuantity >= 1) {
        const updatedCart = [...cart];
        updatedCart[index].quantity = newQuantity;
        setCart(updatedCart);
      }
    };



    // ITEM REMOVE FROM CART
    const removeFromCart = (index) => {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
    };



    // WHEN WE CLICK ON THE + BUTTON IT WILL ADD THE PRODUCT
    const increaseQuantity = (index) => {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;
      setCart(updatedCart);
    };



    // WHEN WE CLICK ON THE - BUTTON IT WILL REMOVE THE PRODUCT
    const decreaseQuantity = (index) => {
      const updatedCart = [...cart];
      if (updatedCart[index].quantity > 1) {
        updatedCart[index].quantity -= 1;
        setCart(updatedCart);
      }
    };


    // CALCULATION OF TOTAL AMOUNT 
    const calculateTotalAmount = () => {
      let total = 0;
      for (const item of cart) {
        total += item.price * item.quantity;
      }
      return total;
    };




     //  DETAILS OF THE PRODUCT

    const products = [
      {
        image: 'https://paranz.com/wp-content/uploads/2020/08/Majestic-red-long-dress-for-little-girls-in-red-768x1049.jpg',
        name: 'summer floral dress for girls',
        category: 'Below 8 yrs',
        price: 1998,
        sku: '11567'
      },
      {
        image: 'https://i.pinimg.com/originals/ee/86/85/ee8685733a344b476b022283a036b91b.jpg',
        name: 'summer printed dress for girls',
        category: 'Below 9 yrs',
        price:  2643,
        sku: '43455'
      },
      {
        image: 'https://www.suratwholesaleshop.com/images/650/data/2021y/May/Rama-Blue-And-Pink-Readymade-Kids-Gown-With-Jacket-(Set-Of-8-pcs)-6153.jpg',
        name: 'designer summer dress for girls',
        category: 'Below 4 yrs',
        price: 2331,
        sku: '6707'
      },
      {
        image: 'https://th.bing.com/th/id/OIP.PmN0P898oeGrouD2vCPBPgHaJL?pid=ImgDet&rs=1',                                                       
        name: ' floral summer dress for girls',                                                     
        category: 'Below 8 yrs',                                                     
        price: 6322,                                                     
        sku: '85989'                                                     
      },  
      {
        image: 'https://th.bing.com/th/id/OIP.JNy9FzmQ8L8l9eA2BADOvwHaHa?pid=ImgDet&rs=1',
        name: 'korean summer dress for girls',
        category: 'Below 12 yrs',
        price:  1999,
        sku: '78587'
      },
      {
        image: 'https://paranz.com/wp-content/uploads/2020/08/Majestic-red-long-dress-for-little-girls-in-red-768x1049.jpg',
        name: 'summer floral dress for girls',
        category: 'Below 8 yrs',
        price:  1998,
        sku: '23456'
      },
      {
        image: 'https://i.pinimg.com/originals/ee/86/85/ee8685733a344b476b022283a036b91b.jpg',
        name: 'summer printed dress for girls',
        category: 'Below 9 yrs',
        price:  2643,
        sku: '0987543'
      },
      {
        image: 'https://www.suratwholesaleshop.com/images/650/data/2021y/May/Rama-Blue-And-Pink-Readymade-Kids-Gown-With-Jacket-(Set-Of-8-pcs)-6153.jpg',
        name: 'designer summer dress for girls',
        category: 'Below 4 yrs',
        price: 2331,
        sku: '23456'
      },
      {
        image: 'https://th.bing.com/th/id/OIP.PmN0P898oeGrouD2vCPBPgHaJL?pid=ImgDet&rs=1',                                                       
        name: ' floral summer dress for girls',                                                     
        category: 'Below 8 yrs',                                                     
        price:  6322,                                                     
        sku: '2345456'                                                     
      },  
      {
        image: 'https://th.bing.com/th/id/OIP.JNy9FzmQ8L8l9eA2BADOvwHaHa?pid=ImgDet&rs=1',
        name: 'korean summer dress for girls',
        category: 'Below 12 yrs',
        price:  1999,
        sku: '987654'
      }
                                                         
    ];                                                     
      
    return (
      <div>
        <h1 className='head'>Product List</h1>
        <div className='product-container'>
        <ul className='product-list'>
        {products.map((product) => (
        <li  className='prod'>
        <div className='product-info'>
        <img src={product.image} alt={product.name} className='img' />
        <h2>{product.name}</h2>
        <p><b>Category: {product.category}</b></p>
        <p><b>Price: {product.price}</b></p>
        <p><b>Sku: {product.sku}</b></p><br/><br/>
        </div>
        <button class="test" onClick={() => addToCart(product)}>Add to Cart +</button>
        </li>
        ))}
        </ul>

          
        <div className='cart-section'>
        <h2 className='head'>Add to Cart</h2>
        <ul className='cart-items'>
        {cart.map((item, index) => (
        <li className='cart-item' key={item.sku}>
        <div className='cart-item-info'>
        <img src={item.image} alt={item.name} className='cart-img' />
        <div className='cart-item-details'> 
        <h2>{item.name}</h2>
        <p><b>Category: {item.category}</b></p>
        <p><b>Price: {item.price}</b></p>
        <p><b>Sku: {item.sku}</b></p><br />
        <p>
        
        <button className="delete" type="button" onClick={() => increaseQuantity(index)}>+</button>
            <input
              className='input'
              type="number"
              value={item.quantity}
              onChange={(event) => handleQuantityChange(event, index)}
            />
            <button className='delete' onClick={() => decreaseQuantity(index)}> - </button>
        </p>
        <p><b>Total Price: {item.price * item.quantity}</b></p> 
      </div>
        
      </div><br/>
      <div className='delinp' >
      <button className='delete' onClick={() => removeFromCart(index)}>Remove </button>
      </div>
      </li>
        ))}

      </ul>
      <div className='bill-section'>
    <h3 className='head'>Your Cart Is Ready</h3>
    <h4>Your Total Amount:</h4>
    <input value={calculateTotalAmount()}  />
  </div>
      </div>
      </div>
      </div>
      );
      };
       
    return <ProductList />;
    }


  //This code essentially represents a simple e-commerce application where users can add products to their cart, change quantities,
  // remove items, and see the total amount of their purchase. It uses React and state management to achieve this functionality.


    // const handleFormSubmit = (data) => {
    //   console.log('Form Data:', data);
    // };
  
   
  


//   return (
  
//     expenses.map(exp=>{
//       return(
// <Test {...exp}/>
//       )
//     } )
      
        
//   );
// }


// //newwwww
// const [expenses, setexpenses] = useState ([
//   {
//     name: 'john',
//     age: 20,
//     course: 'bca',
//   },
//   {
//     name: 'jim',
//     age: 23,
//     course: 'bca',
//   },
//   {
//     name: 'kim',
//     age: 22,
//     course: 'bca',
//   }
// ])

// const [newitem, setnewitem] = useState('')


//  const data =(data)=>{
//  setexpenses([...expenses, data])
// console.log(expenses)
// setnewitem('')
// }



// const deleteHandle=(id) =>{
//   console.log(id)
//   const newdata=expenses.filter(expense => expense.age !== id)
//   console.log(newdata)
//   setexpenses(newdata)
// }

// //newwwwwwwwww
//   //      return (
//   //      <div>
//   //       <Form  add={data}/>
//   //    {expenses.map((exp) => (
//   //     <Test {...exp } delete= {deleteHandle}/>
//   //    )
//   //  )
//   //    }
    
//   // </div>
// //);
    


// // return (
// //   <div>
// //     <Form add={data} />
// //     {expenses.map((exp) => (
// //       <Test  {...exp} onClick={handleDelete} />
// //     ))}
// //   </div>
// // );
// // }






// practice.js


//   const [formData, setFormData] = useState({
//     id: '',
//     name: '',
//     email: '',
//     course: '',
//     address: '',
//   });

  
//   const [submittedData, setSubmittedData] = useState('');
//   const [dataList, setDataList] = useState([]);
//   const [nextId, setNextId] = useState(1);

//   const handleFormSubmit = (data) => {
//     const newData = { ...data, id: nextId };
//    // setSubmittedData(newData);
//     setDataList([...dataList, newData]);
//     setNextId(nextId + 1);
//   };

//   const handleDeleteClick = (id) => {
//     const updatedDataList = dataList.filter((item) => item.id !== id);
//     setDataList(updatedDataList);
//   };

//   return (
//     <div>
//       <NewForm data={formData} setData={setFormData} onSubmit={handleFormSubmit} />
//       {submittedData && <Practice {...submittedData} deleteItem={handleDeleteClick} />}
//       {dataList.map((data) => (
//         <Practice key={data.id} {...data} deleteItem={handleDeleteClick} />
//       ))}
//     </div>
//   );
// }


export default App;


