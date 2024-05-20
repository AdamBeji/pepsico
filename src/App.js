import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">User</a></li>
          </ul>
        </div>
      </nav>
      <h1>Pepsico</h1>
      <table>
        <tr>
          <th>Time period</th>
          <th>Goods</th>
        </tr>
        <tr>
          <td>last month</td>
          <td>coming month</td>
          <td>Year-to-date average per month</td>
        </tr>
        <tr>
          <td>XXXXX</td>
          <td>XXXXX</td>
          <td>XXXXX</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
