import React from 'react';
import { connect } from 'react-redux';
import {Information} from '../actions/Action';

class UserList extends React.Component {
    constructor(props) {
      super(props);
      this.state = { items:[]  };
                       }
    componentDidMount() {
        fetch("https://api.github.com/users")
          .then(res => res.json())
          .then(
            (result) => {
        this.setState({items:result})
        console.log(result)
            })
          }
      render() {
          return (
            <div className="user">
{ this.state.items.map((number) =>
    <div className="card" style={{"width":"30rem"}}>
    <img src={number.avatar_url} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{number.login}</h5>
        <button className="btn btn-danger" onClick={this.props.RepoList.bind(this, number.login)}>Show Details</button>
      </div>
    </div>
)}
</div>
          ); }}

          function mapActionToProps(dispatch) {
            return {

                RepoList: function(data) {
                  fetch(`https://api.github.com/users/${data}/repos`)
                  .then(res => res.json())
                  .then(
                    (result) => {
                      dispatch(Information(result));
                      console.log(result)
                    })
                }
            }}

        export default connect(null, mapActionToProps)(UserList);