import React, { useState } from 'react'
import axios from 'axios'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../models/Book';

const CreateBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSaveBook = () => {
    const data: IBook = {
      title,
      author,
      publishYear
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/books', data)
  };


  return (
    <div>CreateBook</div>
  )
}

export default CreateBook