import React, { useState } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateBooks = () => {
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [PublishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBooks = async (e)=>{
    e.preventDefault();
    const data = {
      title: Title,
      author: Author,
      publishYear: PublishYear
    }
    try{
      setLoading(true);
      await axios.post('https://mern-book-store-back.onrender.com/books', data)
      setLoading(false);
      console.log("book added successfully");
      navigate('/')
  }
      catch(e){
        console.log(e);
        setLoading(false);
      }
    }
    
  return (
    <div>
      
    <div className='fixed inset-0 flex items-center justify-center'>
    <BackButton />
      <div>
      <h2 className='text-2xl my-8 items-center'>Enter book details</h2>
      {loading?<Spinner />: ''}
      <form onSubmit={handleBooks}>
        <div className='mb-2'>
        <input type='text' className='border rounded shadow appearance-none py-2 px-3' name='Title' placeholder='Title' value={Title} onChange={(e)=>setTitle(e.target.value)}></input>
        </div>

        <div className='mb-2'>
        <input type='text' className='border rounded shadow appearance-none py-2 px-3' name='Author' placeholder='Author Name' onChange={(e)=>{
          setAuthor(e.target.value);
          console.log(e.target.value);
          }}></input>
        </div>
        
        <div className='mb-4'>
        <input type='text' className='border rounded shadow appearance-none py-2 px-3' name='PublishYear' placeholder='Publish Year' onChange={(e)=>{
          setPublishYear(e.target.value);
          console.log("publish year set = "+e.target.value);
        }}></input>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' type='submit'>Add Book</button>
      </form>
      
      </div>
      
    </div>
    </div>
  )
}
export default CreateBooks;