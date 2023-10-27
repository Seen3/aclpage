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

  fetchAclRules = () => {
    axios.get('/api/rules') //TBR
      .then((response) => {
        this.setState({ aclRules: response.data.aclRules });
      })
      .catch((error) => {
        console.error('Error fetching ACL rules:', error);
      });
  };

  addAclRule = () => {
    axios.post('/api/rules', this.state.newRule) //TBR
      .then(() => {
        // Clear the form and fetch the updated rules
        this.setState({ newRule: { ...this.state.newRule, srcIp: '', dstIp: '', srcMac: '', dstMac: '', dscp: 0, ipProto: '', dstTpPort: 0, srcTpPort: 0, action: 'allow' } });
        this.fetchAclRules();
      })
      .catch((error) => {
        console.error('Error adding ACL rule:', error);
      });
  };

  render() {
    return (
      <div>
        <h1>ACL Management</h1>

        <h2>Add a New Rule</h2>
        <div>
          <input
            type="text"
            placeholder="Source IP"
            value={this.state.newRule.srcIp}
            onChange={(e) => this.setState({ newRule: { ...this.state.newRule, srcIp: e.target.value } })}
          />
          {/*Other Props*/}
          <button onClick={this.addAclRule}>Add Rule</button>
        </div>

        <h2>Existing Rules</h2>
        <ul>
          {this.state.aclRules.map((rule) => (
            <li key={rule.id}>
              {/* Display rule props */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ACL_Comp;
