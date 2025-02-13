import React, { useEffect, useState } from 'react'
import { useFetchProductQuery } from '../Hooks/React Query/useReactQuery'
import CardList from './CardList';
import SortIcon from '@mui/icons-material/Sort';
import { IconButton, Input, MenuItem, Pagination, Select } from '@mui/material';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import Loader from '../UI/Loader';

const List = () => {

  const {data, isLoading, isFetching} = useFetchProductQuery()
  const[input, setInput] = useState('')
  const[sortOrder, setSortOrder] = useState({price:"asc", name: "A"})
  const[sortedData, setSortedData] = useState([]);
  const[page, setPage] = useState(1);

  const[selectcategory, setSelectcategory] = useState("");

  useEffect(()=>{
    setSortedData(data);
  },[data, selectcategory])

  const handlesortprice = ()=>{
    const newsortorder = sortOrder.price === 'asc' ? "desc" : "asc" ;
    const sorted = [...data].sort((a,b)=>
    newsortorder === 'asc' ? a.price-b.price : b.price-a.price);
    setSortedData(sorted);
    setSortOrder((prev)=>({...prev, price: newsortorder}))
  }

  const handlesortname = ()=>{
    const newsortorder = sortOrder.name === 'A' ? "Z" : "A" ;
    const sorted = [...data].sort((a,b)=>
      newsortorder === 'A' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title));
    setSortedData(sorted);
    setSortOrder((prev)=>({...prev, name: newsortorder}))
  }
    
  if(isLoading){
    return <h1><Loader/></h1>
  }

  if(isFetching){
    return <h1><Loader/></h1>
  }

  const handlepagechange = (_,value)=>{
    setPage(value);
  }

  const filtereddata = sortedData?.filter((item)=> item.title.toLowerCase().includes(input.toLowerCase()) && 
  (!selectcategory || item.category === selectcategory)) || [];

  const paginatedData = filtereddata?.slice((page-1)*8, page*8);

  const renderlist = paginatedData?.map((item)=>{
    const{id, title, price, description, category, image} = item
    return(
      <CardList id={id} title={title} price={price} description={description} image={image} item={item} category={category}/>
    )
    
  })
  
  return (
    <div>
      <h1 style={{color:"gold", textAlign:"center"}}>Search:- <Input type="text" value={input} onChange={(e)=>setInput(e.target.value)} style={{fontSize:"15px"}}/></h1><br />
      <h1 style={{textAlign:"center", color:"red", fontSize:"20px"}}>-: Products Lists :- </h1>
      <div style={{marginLeft:"680px"}}>
          <IconButton onClick={handlesortprice}><SortIcon/></IconButton>
          <IconButton onClick={handlesortname}><SortByAlphaIcon/></IconButton>
          <Select onChange={(e)=>setSelectcategory(e.target.value)} value={selectcategory} displayEmpty>
          <MenuItem value="">All Categories</MenuItem >
              <MenuItem value="men's clothing">Men's clothing</MenuItem>
              <MenuItem value="jewelery">Jewelery</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="women's clothing">Women's clothing</MenuItem>
          </Select>
      </div>
      {renderlist}
      {filtereddata.length>0 && (
        <Pagination color='primary' count={Math.ceil(filtereddata.length/8)} page={page} onChange={handlepagechange} style={{display:"flex", justifyContent:"center", marginTop:"20px"}}/>
      )}
    </div>
    
  )
}

export default List