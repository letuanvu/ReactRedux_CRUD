import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import { fetchCompanies,deleteConpanyAction } from '../actions'
class ListTable extends Component {
  constructor(){
    super();
    this.state = {
      styleOfButton: {
        margin : '5px'
      }
    }
    this.renderList=this.renderList.bind(this);
    this.deleteCompany=this.deleteCompany.bind(this);
  }

  componentDidMount() {
    this.props.fetchCompanies();
  }

  deleteCompany(id){
    this.props.deleteConpanyAction(id);
  }

  renderList(){
    var listRows = this.props.companies.map((company,index) => (
      <tr key={index}>
        <td className="text-center">{index+1}</td>
        <td>{company.name}</td>
        <td>{company.url}</td>
        <td>
          <button className="btn btn-sm btn-danger" onClick={()=>{this.deleteCompany(company.id)}}><i className="fa fa-trash"></i></button>
        </td>
      </tr>
    ))
    return listRows
  }

  render() {
    return (
      <div className="block">
        <div className="block-title">
            <h2>Danh sách công ty</h2>
            <Link className="btn btn-sm btn-success pull-right" to="/add" style={this.state.styleOfButton}>Thêm</Link>
        </div>
        <table id="general-table" className="table table-striped table-vcenter table-bordered">
          <thead>
              <tr>
                  <th className="text-center" width="10%">STT</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Url</th>
                  <th className="text-center" width="5%">Actions</th>
              </tr>
          </thead>
          <tbody>
            {this.props.companies?
               this.renderList()
              :''}
          </tbody>
      </table>
    </div>
    )
  }
}


function mapStateToProps(state) { //bien state cua he thong thang props cua component
  return {companies: state.companies}; //gan todos tu state he thong thang this.props.aaaa
}

function mapDispatchToProps(dispatch) { //bien action tu he thong thanh props cua component
  return bindActionCreators({
    fetchCompanies: fetchCompanies,
    deleteConpanyAction: deleteConpanyAction
  },dispatch);
}

ListTable = connect(mapStateToProps,mapDispatchToProps)(ListTable) //tao ra 1 component moi co ten la AddTodo

export default ListTable
