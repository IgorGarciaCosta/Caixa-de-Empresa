import List from './List'
import Alert from './Alert'
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]) ;
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });//passo um objeto rpo userState

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('hello')
  }

  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert />}
      <h3>Caixa da Mercearia</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="ex. batata" value = {name} onChange={(e)=>setName(e.target.value)}/>
        <button type="submit" className="submit-btn">
          {isEditing?'edit':'submit'}
        </button>
      </div>

    </form>
    <div className="grocery-container">
      <List />
      <button className="clear-btn">
        limpar itens
      </button>
    </div>
  </section>
}

export default App;
