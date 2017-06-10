import React, { Component } from 'react'
import { Link,browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { addCompanyAction } from '../actions'
class Form extends Component {

   constructor(){
     super();
     this.state = {
       url: null,
       name: null
     }
     this.onUrlChange = this.onUrlChange.bind(this)
     this.onNameChange = this.onNameChange.bind(this)
   }

   onUrlChange(e){
      this.setState({
        url: e.target.value
      }, function(){
        console.log(this.state.url);
      })
   }
   onNameChange(e){
    this.setState({
      name: e.target.value
    }, function(){
      console.log(this.state.name);
    })
   }

  onSubmit(){
    this.props.addCompanyAction(this.state.name, this.state.url)
    browserHistory.push({pathname:'/'})
  }

  render() {
    return (
      <div className="block">
        <div className="block-title">
            <h2>{this.props.route.title}</h2>
        </div>
        <form className="form-horizontal form-bordered" onSubmit={(e)=>{e.preventDefault(); this.onSubmit()}}>
            <div className="form-group">
              <label className="col-md-3 control-label">Url</label>
              <div className="col-md-9">
                <input type="text" required onChange={this.onUrlChange} className="form-control" placeholder="Nhập đường dẫn url crm.."/>
                <span className="help-block"></span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">Tên công ty</label>
              <div className="col-md-9">
                <input type="text" required onChange={ (e) => this.onNameChange(e) } className="form-control" placeholder="Nhập tên công ty.."/>
                <span className="help-block"></span>
              </div>
            </div>
            <div className="form-group form-actions">
                <div className="col-md-9 col-md-offset-3">
                    <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-check"></i> Xác nhận</button>
                    &nbsp;&nbsp;
                    <Link to="/" className="btn btn-sm btn-warning"><i className="fa fa-repeat"></i> Hủy bỏ</Link>
                </div>
            </div>
        </form>
    </div>
    )
  }
}

function mapStateToProps(state) { //bien state cua he thong thang props cua component
  return {data: state}; //gan todos tu state he thong thang this.props.aaaa
}

function mapDispatchToProps(dispatch) { //bien action tu he thong thanh props cua component
  return {
    addCompanyAction: function(name,url) {
      dispatch(addCompanyAction(name,url))
      }
  }
}

Form = connect(mapStateToProps,mapDispatchToProps)(Form) //tao ra 1 component moi co ten la AddTodo

export default Form
