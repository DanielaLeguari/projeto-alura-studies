import React, { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITarefa } from '../types/tarefas';
import style from './App.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]); //recebe as tarefas

  const [selecionado, setSelecionado] = useState<ITarefa>();
  //funcao para iterar e colocar o item selecionado no selecionado
  const selecionaTarefa = (tarefaSelecionada: ITarefa) => {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
      <Timer selecionado={selecionado}/>
    </div>
  );
}

export default App;
