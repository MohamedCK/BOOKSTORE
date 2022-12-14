import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import styles from './Addbook.module.css';
import { addBook } from '../../src/redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    e.preventDefault();
    dispatch(addBook({
      item_id: uuidv4(),
      title: e.target.title.value,
      author: e.target.author.value,
      category: 'Fiction',
    }));
    e.target.reset();
  };

  return (
    <div className={styles.Main}>
      <div className={styles.FormContainer}>
        <p className={styles.FormHeading}>Add New Book</p>
        <form className={styles.AddBookForm} onSubmit={inputHandler}>
          <input type="text" placeholder="Enter title of the book" id="title" className={styles.Input} />
          <input type="text" placeholder="Enter author name" id="author" className={styles.Input} />
          <button type="submit" value="Add" label="Add" className={styles.Input}>Add Book</button>
        </form>

      </div>
    </div>
  );
};

export default AddBook;
