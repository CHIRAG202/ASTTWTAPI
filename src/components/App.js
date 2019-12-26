import React from 'react';
import RepoList from './RepoList';
import UserList from './UserList';
function App(props){

return(<div>
<div className="header">GitHub Api Example </div>
<main>
<UserList />
<RepoList/>
</main>
</div>
)
}


  export default App;