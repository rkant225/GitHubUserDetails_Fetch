import React, { Component } from 'react';
import { render } from 'react-dom';

interface Props {}
interface State {}

class SelectedUserDetails extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {      
    };
  } 

  

  render() {
    return (
      <div>
        <table>            
            <tr>
              <th>Fields</th>
              <th>Details</th>
            </tr>
            <tr>
              <td>User Name : </td>
              <td><h4>{this.props.data.login}</h4></td>
            </tr>
            <tr>
              <td>Id :</td>
              <td>{this.props.data.id}</td>
            </tr>
            <tr>
              <td>Image :</td>
              <td><img src={this.props.data.avatar_url} height="100" width="100" /></td>
            </tr>
        </table>
        <button onClick={()=>{this.props.onGoBackClicked()}}>Go Back</button>
      </div>
    );
  }
}

export default SelectedUserDetails;
