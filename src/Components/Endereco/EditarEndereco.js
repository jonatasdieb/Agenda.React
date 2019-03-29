import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as enderecoActions from '../../Store/Endereco/actions';
import * as validationMessagesActions from '../../Store/ValidationMessages/actions';

class EditarEndereco extends Component {     

    componentDidMount(){
        this.props.getEnderecos();       
    }
   
    render(){
        return(            
          <div></div>
        )
    }
}

const mapStateToProps = state => ({    
    enderecos: state.enderecos
  });  

const mapDispatchToProps = {
    ...enderecoActions,
    ...validationMessagesActions
}

export default connect(mapStateToProps, mapDispatchToProps)(EditarEndereco);
