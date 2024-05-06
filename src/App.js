import { useEffect } from 'react';
import './App.css';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/CartSlice';
import Modal from './components/Modal';

function App() {
  const dispatch = useDispatch();
  const {cartitems} = useSelector((state) => state.cart);
  const {isOpen} = useSelector((state)=> state.modal)
  useEffect(() => {
    dispatch(calculateTotals())
  },[cartitems,dispatch])


  return <main>
    {isOpen && <Modal/>}
    <Navbar/>
    <CartContainer/>
  </main>
  ;
}

export default App;
