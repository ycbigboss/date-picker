import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import logo from './logo.svg';
import './App.css';


function disabledDate(current) {
  // Can not select days before today and today
  return current&&(current.valueOf()< Date.now()||current.valueOf()>moment('2017/08/31','YYYY/MM/DD'));
}

function onChange(date){
	if(date)
	{
		document.getElementById("showDate").innerText=moment(date).format('YYYY-MM-DD');
	}

}
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
		
		<br/>
	  
	  <div>
		<DatePicker onChange={onChange}
      format="YYYY-MM-DD"
      disabledDate={disabledDate}
		/>
		所选时间为：
	  <label id="showDate"></label>
	  </div>
  
      </div>
    );
  }
}

export default App;
