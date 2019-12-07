import React, { Component } from 'react';
import { render } from 'react-dom';

interface Props {}
interface State {}

class Users extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
      searchResult:[]
    };
  } 

  

  render() {
    return (
      <div>
        <a onClick={()=>this.props.onUsersButtonClick(this.props.userData)}>{this.props.userData.login}</a>
      </div>

    );
  }
}

export default Users;
