import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import EditarEndereco from './Components/Endereco/EditarEndereco';
import EditarContato from './Components/Contato/EditarContato';
import Pessoa from './Components/Pessoa/Pessoa';
import Detalhes from './Components/Pessoa/Detalhes';
import ValidationMessages from './Features/ValidationMessages';

class App extends Component {

    render() {
        return (            
                <Router>
                    <div>  
                        <ValidationMessages />

                        <Route exact path='/' component={Pessoa} />
                        <Route exact path='/pessoa/:pessoaId' component={Detalhes} />
                        <Route exact path='/endereco/:enderecoId' component={EditarEndereco} />
                        <Route exact path='/contato/:contatoId' component={EditarContato} />
                    </div>
                </Router>
          
        );
    }
}
export default App;
