import { Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addtocart } from '../Redux Toolkit/Slice/CartSlice';
import { useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const CardList = ({id, title, price, image, category, item}) => {

    const navigate = useNavigate();

    const [selectedProduct, setSelectedProduct] = useState(null); 
    


    const handleOpen = (product) => setSelectedProduct(product);
    const handleClose = () => setSelectedProduct(null); 

    const dispatch = useDispatch();

    const additem = (item)=>{
        dispatch(addtocart(item));
        navigate("/cart");
    }

  return (
    <>
    <div className='main'>
        <Card className='carditems'>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={image} style={{objectFit:"contain", marginTop:"10px"}} onClick={()=>handleOpen(item)}
                />
                <CardContent>
                <Typography variant="h5" style={{color:"orange"}}> {title} </Typography>
                <Typography variant="body2"> Price: Rs.{price}</Typography>
                <Typography variant="body2"> Category: {category}</Typography>
                <IconButton onClick={()=>additem(item)}><AddShoppingCartIcon/></IconButton>
                </CardContent>
            </CardActionArea>
        </Card>
    </div>


    {selectedProduct && (
            <Dialog
              open={!!selectedProduct}
              onClose={handleClose}
              maxWidth="sm"
              fullWidth
            >
              <DialogTitle>{selectedProduct.title}</DialogTitle>
              <DialogContent>
                <CardMedia
                  component="img"
                  height="150px"
                  width="100px"
                  image={selectedProduct.image}
                  sx={{ marginBottom: "20px", objectFit: "contain" }}
                />
                <Typography variant="h6" color="text.primary">
                  <b>Product Details:</b>
                </Typography>
                <Typography variant="body1" color="text.secondary" >
                  {selectedProduct.description}
                </Typography>
                <Typography variant="h6" color="text.primary">
                  <b>Price: Rs.{selectedProduct.price}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Category: {selectedProduct.category}</b>
                </Typography>
              </DialogContent>
              <DialogActions>
              </DialogActions>
            </Dialog>
)}
    </>
        
  )
}

export default CardList