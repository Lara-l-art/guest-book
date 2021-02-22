import './App.css';
import React, { useState, useEffect } from 'react';
import ShowAllComments from './components/ShowAllComments';
import {getComments, onCommentSubmit} from './api/comments';

function App() {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);
  const [comments, setComments] = useState([]);
  const [ident, setCustomId] = useState('');

  useEffect(() => {
    setIsErrorVisible(false);
  }, [name, text])

  useEffect(() => {
    getComments().then(res => {
      setComments([...res]);
    });
  }, [ident]);

  const addComment = () => {
    if (!text.trim() || !name.trim()) {
      setIsErrorVisible(true);

      return;
    }

    const date = new Date();
    const newComment = {
      name,
      text,
      id: date,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
    };

    setCustomId(date);
    setName('');
    setText('');

    onCommentSubmit(newComment);
  }

  return (
    <div className="App">
      <form
        className="NewCommentForm"
      >
        <p className="App__fill">Leave your comment</p>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="NewCommentForm__input input is-primary"
          autoComplete="off"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        />

        <textarea
          name="text"
          placeholder="Type your comment here"
          className="NewCommentForm__input input is-primary"
          value={text}
          onChange={(ev) => setText(ev.target.value)}
        />

        {isErrorVisible && (
          <div className="NewCommentForm__error">
            Write something
          </div>
        )}

        <button
          type="submit"
          className="NewCommentForm__button button is-success is-light"
          onClick={addComment}
        >
          Add a comment
        </button>
      </form>

      <ShowAllComments comments={comments} />
    </div>
  );
}

export default App;
