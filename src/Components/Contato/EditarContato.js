import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as contatoActions from '../../Store/Contato/actions';
import * as pessoaActions from '../../Store/Pessoa/actions';

class EditarContato extends Component {

    componentDidMount() {
        this.props.getContatoById(this.props.match.params);
        this.props.getPessoaById(this.props.contatos.contato.PessoaId);
    }

    render() {
        return (
            <div>
              
            </div>
        )
    }

}

const mapStateToProps = state => ({
    contatos: state.contatos,
    pessoas: state.pessoas
})

const mapDispatchToProps = {
    ...contatoActions,
    ...pessoaActions
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarContato);