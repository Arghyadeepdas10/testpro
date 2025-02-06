import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name: "cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtocart:(state,action)=>{
            const existing = state.cart.find((item)=>item._id === action.payload._id);
            if(existing){
                return{
                    ...state,
                    cart: state.cart.map((item)=>item._id === action.payload._id ? {...item, qty: item.qty+1} : item)
                }
            }
            else{
                return{
                    ...state,
                    cart: [...state.cart, {...action.payload,qty:1}]
                }
            }
            
        },
        removecart:(state,action)=>{
            return{
                ...state,
                cart: state.cart.filter((item)=>item._id !== action.payload)                
            }
        },
        addqty:(state,action)=>{
            return{
                cart: state.cart.map((item)=>item._id === action.payload._id ? {...item, qty: item.qty+1} : item)
            }
        },
        subqty:(state,action)=>{
            return{
                cart: state.cart.map((item)=>item._id === action.payload._id ? {...item, qty: Math.max(item.qty-1,1)} : item)
            }
        }
    }
})

export const {addtocart, removecart, addqty, subqty} = CartSlice.actions;
export default CartSlice.reducer;