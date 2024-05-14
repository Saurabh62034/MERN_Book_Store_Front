import React, { useEffect } from 'react';
import Home from "./pages/Home.jsx"
import ShowBook from "./pages/ShowBook.jsx"
import CreateBook from "./pages/CreateBooks.jsx"
import EditBook from "./pages/EditBook.jsx"
import DeleteBook from "./pages/DeleteBook.jsx"
import { Routes, Route} from 'react-router-dom';

const App = (props) => {
  let k;
  
  const pull_data = (data)=>{
    useEffect(()=>{
      data?<DeleteBook />:null
    })
    console.log(data);
    k=data;
    return ;
  }
  console.log("k = "+k);
  return (
  <div>
    <Routes>
      <Route path='/' element={<Home func={pull_data}/>} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
      
    </Routes>

    {k?<DeleteBook />:null}
    </div>
  )
}
export default App;