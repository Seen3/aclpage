import React, { Component } from 'react';
import axios from 'axios';

class ACL_Comp extends Component {
  state = {
    aclRules: [],
    newRule: {
      srcIp: '',
      dstIp: '',
      srcMac: '',
      dstMac: '',
      dscp: 0,
      ipProto: '',
      dstTpPort: 0,
      srcTpPort: 0,
      action: 'allow',
    },
  };

  componentDidMount() {
    this.fetchAclRules();
  }
  handleActionChange=(e)=>{
    const val=e.target.value;
    this.setState((prevState)=>({
      newRule:{
        ...prevState.newRule,
        action:val,
      },
    }));
  };
  fetchAclRules = () => {
    axios.get('/api/rules') //TBR
      .then((response) => {
        this.setState({ aclRules: response.data.aclRules });
      })
      .catch((error) => {
        console.error('Error fetching ACL rules:', error);
      });
  };
  addAclRule=()=>{
    axios.post('/api/rules',this.state.newRule).then(()=>{
      this.setState({
        newRule:{
          srcIp: '',
          dstIp: '',
          srcMac: '',
          dstMac: '',
          dscp: 0,
          ipProto: '',
          dstTpPort: 0,
          srcTpPort: 0,
          action: 'allow',
        }
      });
      this.fetchAclRules();
    }).catch((err)=>{
      console.error("Error adding ACL rules:", err);
    })
  }
  handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    this.setState((prevState)=>({
      newRule:{
        ...prevState.newRule,
        [name]:value,
      },
    }));
  };


  render() {
    return (
      <div>
  <div>
    <h1>ACL Management</h1>
    <h2>Add Rule:</h2>
    <div>
      <label>Source IP:</label>
      <input
        type="text"
        placeholder='Source IP'
        name="srcIp"
        value={this.state.newRule.srcIp}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <label>Destination IP:</label>
      <input
        type="text"
        placeholder='Destination IP'
        name="dstIp"
        value={this.state.newRule.dstIp}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <label>Source MAC:</label>
      <input
        type="text"
        placeholder='Source MAC'
        name="srcMac"
        value={this.state.newRule.srcMac}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <label>Destination MAC:</label>
      <input
        type="text"
        placeholder='Destination MAC'
        name="dstMac"
        value={this.state.newRule.dstMac}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <label>DSCP:</label>
      <input
        type="number"
        placeholder='DSCP'
        name="dscp"
        value={Math.max(0, Math.min(63, this.state.newRule.dscp))}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <label>IP Protocol:</label>
      <input
        type="text"
        placeholder='IP Protocol'
        name="ipProto"
        value={this.state.newRule.ipProto}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <label>Destination Transport Port:</label>
      <input
        type="text"
        placeholder='Destination Transport Port'
        name="dstTpPort"
        value={this.state.newRule.dstTpPort}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <label>Source Transport Port:</label>
      <input
        type="number"
        placeholder='Source Transport Port'
        name="srcTpPort"
        value={this.state.newRule.srcTpPort}
        onChange={this.handleInput}
      />
    </div>
    <div>
      <h2>Action:</h2>
      <div>
        <label>
          <input
            type="radio"
            name="action"
            value="allow"
            checked={this.state.newRule.action === 'allow'}
            onChange={this.handleActionChange}
          />
          Allow
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="action"
            value="deny"
            checked={this.state.newRule.action === 'deny'}
            onChange={this.handleActionChange}
          />
          Deny
        </label>
      </div>
    </div>
  </div>
          <button onClick={this.addAclRule}>Add Rule</button>


        <h2>Existing Rules</h2>
        <ul>
          {this.state.aclRules.map((rule) => (
            <li key={rule.id}>
              <p>Source IP: {rule.srcIp}</p>
              <p>Destination IP: {rule.dstIp}</p>
              <p>Source MAC: {rule.srcMac}</p>
              <p>Destination MAC: {rule.dstMac}</p>
              <p>DSCP: {rule.dscp}</p>
              <p>IP Protocol: {rule.ipProto}</p>
              <p>Destination TP Port: {rule.dstTpPort}</p>
              <p>Source TP Port: {rule.srcTpPort}</p>
              <p>Action: {rule.action}</p>
           </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ACL_Comp;
