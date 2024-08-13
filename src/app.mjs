import { useState, useRef } from 'react';
import List from "./components/list.mjs";
import Table from "./components/table.mjs";
import Select from './components/select.mjs';

const cores = ['Azul', 'Amarelo', 'Verde'];
const titles = ['ID', 'NOME', 'IDADE'];
const clients = [
    { id: 1, nome: "Lucas", idade: 45 },
    { id: 2, nome: "Ana", idade: 78 },
    { id: 3, nome: "Bia", idade: 14 },
    { id: 4, nome: "Faulo", idade: 69 }
];

const App = () => {
    const [nome, setNome] = useState('');
    const [felinos, setFelinos] = useState(['Onça', 'Gato', 'Leão']);
    
    const iptFelino = useRef(null);
    
    function clique(e) {
        setNome("Novo nome");
    }
    function change(e) {
        setNome(e.target.value);
    }
    function manipulaFormFelinos(e) {
        e.preventDefault();
        setFelinos([...felinos, iptFelino.current.value]);
        //alert(iptFelino.current.value);
    }

    return (
        <div>

            <div>
                <h2> Hello {nome} </h2>
                <input onChange={change} />
                <button onClick={clique}>Clique</button>
            </div>

            <div>
                <h3>Cores</h3>
                <List data={cores} />
            </div>

            <div>
                <h3>Felinos</h3>
                <form onSubmit={manipulaFormFelinos}>
                    <label>Novo </label>
                    <input ref={iptFelino}/>
                    <button>+</button>
                </form>
                <List data={felinos} />
            </div>

            <div>
                <h3>Tabela</h3>
                <Table titles={titles} data={clients} />
            </div>

            <div>
                <h3>Municípios</h3>
                <Select/>
            </div>

        </div>
    );
};

export default App;