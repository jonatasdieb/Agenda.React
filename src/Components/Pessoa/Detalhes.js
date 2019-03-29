import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as pessoaActions from '../../Store/Pessoa/actions';
import { Collapse } from 'react-bootstrap';
import ValidationMessages from '../../Features/ValidationMessages';

class Pessoa extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          open: true,
        };
      }

    componentDidMount() {
        this.props.getPessoaById(this.props.match.params);
    }


    render() {  
        const { open } = this.state;     
        return (
            <div>
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center">{this.props.pessoa.pessoa.Nome} -  <Link className="text-warning" to={'#'}> <i className="fas fa-edit fa-sm"> </i></Link></h4>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-8">
                            <h5><i className="fas fa-address-book fa-sm"> </i>&nbsp;Contatos  </h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {   this.props.pessoa.pessoa.Contatos &&
                                this.props.pessoa.pessoa.Contatos.map(value => {
                                return (
                                    <li className="list-group-item col-md-12">
                                        <b>{value.Tipo.Descricao}</b> - {value.Descricao}
                                        <span className="float-right">
                                            <Link className="text-warning" to={'#'}>
                                                <i className="fas fa-edit fa-lg"> </i>
                                            </Link>
                                        </span>
                                    </li>
                                )
                            })}                              
                    </div>
                    </div>

                    <br />
                    <hr />
                    <div className="row">
                        <div className="col-md-8">
                            <h5><i className="fas fa-car fa-sm"> </i>&nbsp;Endereços</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            {   
                                
                                this.props.pessoa.pessoa.Enderecos &&
                                this.props.pessoa.pessoa.Enderecos.map(value => {
                                return (
                                    <div className="card">
                                        <div className="card-header" id={'heading'+value.Id}>
                                            <div className="row">
                                                <div className="col-md-8" data-toggle="collapse" data-target={'#collappseEnd'+value.Id} aria-expanded="true" aria-controls={'collapseEnd'+value.Id}>
                                                    <span>
                                                        <i className="fas fa-angle-double-down fa-sm text-success"></i>&nbsp;
                                                     {value.Tipo.Descricao}
                                                    </span>
                                                </div>
                                                <div className="col-md-4">
                                                    <Link className="text-warning float-right mr-1" to={'#'}>
                                                        <i className="fas fa-edit fa-lg"> </i>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                        <Collapse in={this.state.open}>
                                        <div id={'collapseEnd'+value.Id} className="collapse" aria-labelledby={'heading'+value.Id}>
                                            <div className="card-body">
                                                <b>Logradouro:</b>{value.Logradouro}, Nº {value.Numero} - {value.Complemento}<br />
                                                <b>Bairro:</b> {value.Bairro} <br />
                                                <b>Cidade:</b> {value.Cidade} / {value.Estado}
                                            </div>
                                        </div>
                                        </Collapse>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <Link className="btn btn-light" to={'/'} href="/Pessoa/">Voltar</Link>
                        </div>
                    </div>
                </div>
                {
                    this.props.pessoa.isLoading &&
                    <div className="row justify-content-center ">
                        <div className="spinner-border text-danger mt-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pessoa: state.pessoas
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(pessoaActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Pessoa);