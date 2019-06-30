import React from 'react';
import './App.css';
import Input from './components/input_block/'
import Result from "./components/result_block/"
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortUrl: null, //сокращенная URL
    }
  }

  updateState = (value) => {
    let shortUrl = JSON.parse(value)["shortUrl"];
    this.setState({ shortUrl: shortUrl });
  };
  clearState = () => {
    this.setState({ shortUrl: null});
  };
  submitData = (e) =>{
    e.preventDefault();
    this.clearState();
    const {target} = e;
    const url = "" // server API;
    const param = target.elements["inputUrl"].value;
    axios.get(url,param)
        .then(data=>{
          this.updateState(data);
          this.clearState("inputUrl");
        })
        .catch(err=>{alert("Oups, something wrong")});
  };

  render(){
    return (
        <div className="App">
          <h1>URL Reducer</h1>
          <Input placeHolder={"https://www.example.com/catalog"}
                 label={"Enter your URL"}
                 updateState={this.updateState.bind(this)}
                 parent={this.state.inputUrl}
                 submitData={this.submitData}
          />
          <Result
              label={"Your short URL:"}
              shortUrl={this.state.shortUrl}
          />
        </div>
    );
  }
}
export default App;
