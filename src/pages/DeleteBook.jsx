import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DeleteBook = (props) => {
  const [pop, setPop] = useState(null);
  props.func(pop);

  const id = props.id;
  const navigate = useNavigate();
  console.log("delete id = "+id);
  console.log("delete title = "+props.title);

  const back = ()=>{
    props.onClose();
    console.log("I am back button");
  }

  const HandleDelete = async ()=>{
    const res = await axios.delete(`https://mern-book-store-back.onrender.com/books/${id}`);
    props.onClose();
    navigate('/')
    console.log("delete id = "+id);
    setPop(false);
  }
  return (
    <Popup>
    <div id='delbutton' className='py-15 px-12'>
    <p className='mt-9 text-white'>Are you sure?</p>
    <p className='mt-9 text-white'>Do you want to delete?</p>
      <div className='item-center flex justify-center'>
        <button className="bg-blue-500 m-2 rounded-full px-8 mt-9" onClick={back}>No</button>
      
        <button className='bg-blue-500 m-2 rounded-full px-8 mt-9' onClick={HandleDelete}>Yes</button>
      </div>
    </div>
    </Popup>
  )
};

const Popup = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
display: flex;
align-items: center;
justify-content:center;
background: rgba(0,0,0,0.1);
#delbutton{
  background: rgba(0,0,0,0.9);
}
`
export default DeleteBook;