import List from './List'
import Alert from './Alert'
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });//passo um objeto rpo userState

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {//se nada foi digitado, dá um alerta
      //display alert
      showAlert(true,'danger', 'Digite um valor')
    }

    else if (name && isEditing) {
      //deal with edit
    }
    else {// se tudo der certo, adiciona o item
      //show alert
      showAlert(true, 'success', 'item adicionado à lista')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName('')//isso limpa o input dps de dar submit
    }
  }

  const showAlert = (show=false, type = '', msg='')=>{
    setAlert({show, type, msg})
  }

  const clearList=()=>{
    showAlert(true, 'danger', 'lista vazia');
    setList([])
  }

  const removeItem=(id)=>{
    showAlert(true, 'danger', 'item removido')
    setList(list.filter((item)=>item.id!==id))
    /*Se o id buscado na iteração não bate
    com o recebido, coloca ele de volta na 
    nova lista. Se bate, não colocoa ele. */
  }

  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert = {showAlert}
      list={list}/>}
      <h3>Caixa da Mercearia</h3>
      <div className="form-control">
        <input type="text" className="grocery" placeholder="ex. batata" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="submit-btn">
          {isEditing ? 'edit' : 'submit'}
        </button>
      </div>

    </form>
    {list.length > 0 &&
      (<div className="grocery-container">
        <List items={list} removeItem={removeItem}/>{/*passa a lista como um prop*/}
        <button className="clear-btn" onClick={clearList}>
          limpar itens
      </button>
      </div>)}
  </section>
}

export default App;
