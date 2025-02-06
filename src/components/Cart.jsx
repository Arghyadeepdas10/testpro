import { Button, Container, Grid2, IconButton } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DeleteIcon from '@mui/icons-material/Delete';
import { addqty, removecart, subqty } from '../Redux Toolkit/Slice/CartSlice';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {

  const cart = useSelector((state)=>state.cart.cart);  
  const dispatch = useDispatch();

  const handledelete = (_id)=>{
    dispatch(removecart(_id));
  }

  const handleadd = (_id)=>{
    dispatch(addqty({_id}))
  }

  const handlesub = (_id)=>{
    dispatch(subqty({_id}))
  }

  const Subtotal = Math.round(cart.map((item)=>item.qty * item.price).reduce((a,c)=>a+c,0))
  const Shipping = Subtotal > 0 ? 50 : 0;
  const Total = Math.round(Subtotal + Shipping)


  const rendercart = cart?.map((item)=>{
    return(
      <ul key={item.id}>
        <li style={{listStyle:"none"}}><img src={item.image} style={{width:"80px", height:"80px"}} /> - {item.title} - Rs.{item.price}
        <IconButton onClick={()=>handledelete(item._id)}><DeleteIcon/></IconButton>
        <IconButton onClick={()=>handleadd(item._id)}><AddIcon/></IconButton> {item.qty} <IconButton onClick={()=>handlesub(item._id)}><RemoveIcon/></IconButton>
         </li>
      </ul>
    )
  })

  return (
   <>
    <Container fixed>
    <Grid2 container spacing={4} style={{padding:"4px", margin:"10px"}}>
    <Grid2 size = {6}>
    <h1>Shopping Cart</h1>
    <hr /><br />
      <div style={{boxShadow:"0px 0px 8px black", padding:"5px"}}>
        {rendercart}
      </div>
    </Grid2>
    <Grid2 size = {6}>
      <h1>Checkout Section</h1>
      <hr />
      <div>
        <h3>Subtotal:- Rs. {Subtotal}</h3>
        <h4>Shipping fee:- Rs. {Shipping}</h4>
        <h3>Total:- Rs. {Total}</h3>
        <Button variant='contained' color='success'>Checkout</Button>
      </div>
    </Grid2>
    </Grid2>
    </Container>
   </>
  )
}

export default Cart