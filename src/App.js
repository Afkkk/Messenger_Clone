import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl,Input } from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { IconButton } from '@material-ui/core';
import DocumentTitle from 'react-document-title';



function App() {
  const [input,setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [] )
  

  useEffect(() =>{
    //const name = prompt('Enter your name')
    setUsername(prompt('Enter your name'))
  },[] )
  
  const changeName = (event) =>{
    event.preventDefault();
    setUsername('');
    setUsername(prompt('Enter your name'))

  }

  const sendMessage = (event) => {

    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <IconButton className="app__iconButtonAccount" onClick={changeName} >
        <AccountCircleIcon className="app__accountCircle" />
      </IconButton>
      <img className="app__logoImg" src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?" alt="messenger_img" draggable='false'/>
      <DocumentTitle title='Messenger by AFFK'/>
      <h2> Welcome {username}</h2>
    
    <form className="app__form">
      <FormControl className="app__formControl">
      <Input className="app__input" placeholder="Aa" value={input} onChange={event => setInput(event.target.value)} />
      <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary"  type="submit" onClick={sendMessage}>
        <SendIcon />
      </IconButton>


      </FormControl>
    </form>

       <FlipMove>
       {
          messages.map( ({id,message}) => (
            <Message key={id} username={username} message={message} />
            
          ))
        }
       </FlipMove>

       

       
        
        
    </div>
  );
}

export default App;
