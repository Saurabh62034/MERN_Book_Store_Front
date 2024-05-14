import React, {useState, useEffect} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';

const EditBook = () => {
  const [book, setBook] = useState({});
  const [Title, setTitle] = useState('');
  const [Author, setAuthor] = useState('');
  const [PublishYear, setPublishYear] = useState('');
  const {id} = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true);
    const fetchedData = async ()=>{
      const res = await axios.get(`https://mern-book-store-back.onrender.com/books/${id}`);
      const Book = res.data;
      setBook(Book);
      console.log(res.data)
      
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setPublishYear(res.data.publishYear);
      
    }
    fetchedData();
    setLoading(false);
  },[])

  const update = async ()=>{
    setLoading(true);
    const res= await axios.put(`https://mern-book-store-back.onrender.com/books/${id}`,{
      title: Title,
      author: Author,
      publishYear: PublishYear
    })
    setLoading(false);
    navigate('/');
    
  }
  return (
    <div>
      <BackButton />
      <h1 className='font-bold my-8'>Enter new details</h1>
      {loading?<Spinner />:''}
      <div className='item-center flex justify-center'>
        <div>
          <div className='items-center'>
            <input type='text' className='border shadow mt-2 rounded py-2 px-3' name='title' placeholder='Title' value={Title} onChange={(e)=>{setTitle(e.target.value)}}></input>
          </div>
          <div>
            <input className='border rounded shadow py-2 px-3 mt-2' name='author' placeholder='Author Name' value={Author} onChange={(e)=>{setAuthor(e.target.value)}}></input>
          </div>
          <div>
            <input className='border shadow rounded py-2 px-3 mt-2' name='publishyear' placeholder='Publish Year' value={PublishYear} onChange={(e)=>{setPublishYear(e.target.value)}}></input>
          </div>
          
          <button type='submit' onClick={update} className='my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'>Update</button>
        </div>
      </div>
    </div>
  )
}
export default EditBook;