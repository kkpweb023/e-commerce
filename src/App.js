import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Cart from './Components/Cart/Cart';
import PlaceOrder from './Components/Cart/PlaceOrder';
import Checkout from './Components/CheckOut/CheckOut';
import Order from './Components/MyOrder/Order';
import ProductDetails from './Components/Product-Details/ProductDetails';
import Categories from './Components/Category/Categories';
import Products from './Components/Products/Products';
import Slip from './Components/Slip/Slip';
import Auth from './Service/Auth/Auth';
import Footer from './Service/Footer/Footer';
import NavBar from './Service/NavBar/NavBar';
import Login from './Service/Registration/Login/Login';
import SignUp from './Service/Registration/SignUp/SignUp';
import Dashboard from './Components/DashBoard/Dashboard';
import Profile from './Components/DashBoard/Profile/Profile';
import Account from './Components/DashBoard/Account/Account';
import Address from './Components/DashBoard/Address/Address';
import Setting from './Components/DashBoard/Setting/Setting';

let port = `https://graceful-gray-indri.cyclic.app` || `http://localhost:4000`;

export const MyContext = createContext();


function App() {

  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [categData, setCategData] = useState([]);
  const [point, setPoint] = useState('');


  //get all product in home page

  function showProducts() {
    axios.get(`${port}/product`)
      .then((result) => setData(result.data))
      .catch((error) => console.log("! data fetch failed"));
  }

  //get product using search

  function handleSearch() {
    axios.get(`${port}/search/${search}`)
      .then((result) => setData(result.data))
      .catch((error) => console.log("! search failed"))
  }
  function handleSearchBtn() {
    handleSearch();
  }

  //get product using select categories

  function handleCategories(rec) {
    axios.get(`${port}/search/${rec}`)
      .then((result) => setCategData(result.data))
      .catch((error) => console.log("! search failed"))
  }


  //add to cart 

  const [showA, setShowA] = useState(false);
  const handleClose = () => setShowA(false);
  const auth = localStorage.getItem('user');

  function addCartList(cartData) {
    axios.post(`${port}/cartProduct`, {

      id: cartData.id,
      title: cartData.title,
      brand: cartData.brand,
      size: cartData.size,
      color: cartData.color,
      quantity: cartData.quantity,
      price: cartData.price,
      discountPercentage: cartData.discountPercentage,
      deliveryCharge: cartData.deliveryCharge,
      total_amount: cartData.total_amount,
      thumbnail: cartData.thumbnail,
    }).then((result) => {
      if (result.data.id) {
        cartPoint();
        setShowA(true);
      }
    })
      .catch((error) => console.log("! 404 post failed"))
  }

  function handleAddCard(cartData) {
    auth ? addCartList(cartData)
      : alert("please login") || navigate('/login');
  }


  //navBar

  function cartPoint() {
    axios.get(`${port}/cartlist`)
      .then((result) => {
        setPoint(result.data);
      })
      .catch((error) => console.log("!404 failed"));
  }
  useEffect(() => {
    cartPoint();
  }, [])

  useEffect(() => {
    showProducts();
  }, [search])


  const [clicked, setClicked] = useState(false);

    function handleMode(){
          if(!clicked){
                setClicked(true)
          }else{
              setClicked(false)
          }
    }

  


  return (

    <MyContext.Provider value={{
      setSearch: setSearch,
      search: search,
      handleSearchBtn: handleSearchBtn,
      data: data,
      setData: setData,
      handleSearch: handleSearch,
      showProducts: showProducts,
      handleCategories: handleCategories,
      categData: categData,
      handleClose: handleClose,
      handleAddCard: handleAddCard,
      setShowA: setShowA,
      showA: showA,
      point: point,
      cartPoint: cartPoint,
      handleMode:handleMode


    }}
    >

      <div className={`App ${clicked ? 'App_mode' : ""}`}>

        <NavBar />

        <Routes basename="/e-commerce">

          <Route path='/' element={<Products />} />
          <Route path='/Categories/:info' element={<Categories />} />
          <Route path='/products-details/:id' element={<ProductDetails />} />

          <Route element={<Auth />}>

            <Route path='/cart' element={<Cart />} />
            <Route path='/placeOrder' element={<PlaceOrder />} />
            <Route path='/checkOut' element={<Checkout />} />
            <Route path='/slip' element={<Slip />} />
            <Route path='/myAccount/order' element={<Order />} />

            <Route path='/myAccount/dashboard' element={<Dashboard />} />
            <Route path='/myAccount/dashboard/profile' element={<Profile />} />
            <Route path='/myAccount/dashboard/address' element={<Address />} />
            <Route path='/myAccount/dashboard/account' element={<Account />} />
            <Route path='/myAccount/dashboard/setting' element={<Setting />} />

            <Route path='/logout' element={'Logout'} />

          </Route>

          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />

        </Routes>


        <Footer />

      </div>
    </MyContext.Provider>
  );
}

export default App;
