import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pessoaActions from '../../Store/Pessoa/actions';



class Pessoa extends Component {  

    componentDidMount(){          
        this.props.getPessoas();
    }

    render() {
        return (
            <div>   
                <div className="row">
					<div className="col-md-12">
						<h2 className="text-center">Agenda de Contatos</h2>
					</div>
				</div>	
			<br/><br/><br/>
				<table className="table table-sm bg-light table-bordered display compact">
					<thead>
						<tr>
							<th>
								Nome
							</th>
							<th>Marcador</th>
							<th>Contatos</th>
							<th></th>
						</tr>
					</thead>
					<tbody>				
                    { this.props.pessoas.data.map(value => {
                            return (
                                <tr key={value.Id}>
                                    <td className="align-middle">{value.Nome}</td>
                                    <td className="align-middle">{value.Marcador.Descricao}</td>
                                    <td className="align-middle">
                                    {value.Contatos.map(c =>{
                                        return (
                                           <li style={{"list-style-type": "none"}}> <b>{c.Tipo.Descricao}</b> - {c.Descricao}</li>
                                        )                                        
                                    })}
                                    </td>
                                    <td className="align-middle"><Link className="btn btn-sm btn-info" to={'/pessoa/'+ value.Id}><i className="fas fa-search fa-sm"> </i>Visualizar Detalhes</Link></td>
                                </tr>
                            )
                        })}	

						
					</tbody>
				</table>
                {
                    this.props.pessoas.isLoading &&
                    <div className="row justify-content-center ">
                        <div className="spinner-border text-danger mt-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </div >
        )
    }
}

const mapStateToProps = state => ({ 
    pessoas: state.pessoas
  });  

const mapDispatchToProps = dispatch => 
  bindActionCreators(pessoaActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pessoa);