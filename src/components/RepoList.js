import React from 'react';
import { connect } from 'react-redux';
function RepoList(props){

return(
<div>
   { props.result.map((number) =>
    <div className="repo">

<button className="btn btn-warning">{number.name }</button>
</div>
    )}
<br/>
    </div>
)
}

function mapStateToProps(state) {
    return {result: state.result

             };
  }
  export default connect(mapStateToProps)(RepoList);