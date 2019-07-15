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
    if (document.location.pathname.length > 1 ){
      this.getLongUrl(document.location.pathname.substring(1, document.location.pathname.length))
    }
  }
  getLongUrl(address){
    console.log(address)
    const serverUrl = "http://0.0.0.0:8000/get_long" // server API;
    axios.get(serverUrl,{
          params:{
            shortUrl: address,
            format: "json",
          },
        })
        .then(resp=>{
          // window.location.replace(resp.data)
        })
        .catch(err=>{
          // alert (err)
          alert("Your short link doesn't exists");
        });
  }
  updateState = (value) => {
    console.log(typeof value)
    let shortUrl = value.shorturl;
    this.setState({ shortUrl: shortUrl });
  };
  clearState = () => {
    this.setState({ shortUrl: null});
  };


  submitData = (e) =>{
    e.preventDefault();
    this.clearState();
    const {target} = e;
    const url = "http://0.0.0.0:8000/get_short" // server API;
    const param = target.elements["inputUrl"].value;
    axios.get(url, {
      params:{
        longurl: param,
        format: "json",
      },

    })
        .then(resp=>{
          this.updateState(resp.data);
        })
        .catch(err=>{
          console.log(err);
          alert("Oups, something wrong");
        });
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
