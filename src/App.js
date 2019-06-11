import React from 'react';
import './App.css';
import Input from './components/input_block/'
import Result from './components/result_block/'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUrl: "",
      shortUrl: "your URL will be here", //сокращенная URL
    }
  }

  updateState = (field, value) => {
    this.setState({ [field]: value });
  };
  clearState = (field) => {
    this.setState({ [field]: ""});
  }
  submitData = () =>{
    alert('This is submit'); //проверка работы кнопки
    const url = "" // server API;
    const param = this.state.inputUrl;
    // я хочу от тебя получить 2 строки - наименование ключа shortUrl и его значение, в функцию update state, как это правильно сделать?
    // axios.get(url,param)
    //     .then(data=>{
    //       this.updateState(field,value);
    //       this.clearState("inputUrl");
    //     })
    //     .catch(err=>{alert("Oups, something wrong")});
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
