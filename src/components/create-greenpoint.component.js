import React, {Component} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {CheckCircleOutlined,HeatMapOutlined ,ArrowLeftOutlined,DeleteOutlined } from '@ant-design/icons';

export default class CreateGreenPointsList extends Component{
    constructor(props) {
        super(props);
       
        this.onChangeusername = this.onChangeusername.bind(this);
        this.onChangepointname = this.onChangepointname.bind(this);
        this.onChangepointID = this.onChangepointID.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangelocation = this.onChangelocation.bind(this);
        this.onChangecontainers = this.onChangecontainers.bind(this);
        this.onChangeweight = this.onChangeweight.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          username:'',
          pointname: '',
          pointID: '',
          date: new Date(),
          location: '',
          containers: '',
          weight: 0,
          users: []
    }
}

componentDidMount() {
  axios.get('http://localhost:5000/users/')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map(user => user.username),
          username: response.data[0].username
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })
}

onChangeusername(e) {
  this.setState({
    username: e.target.value
  })
}

onChangepointname(e) {
    this.setState({
      pointname: e.target.value
    })
  }

  onChangepointID(e) {
    this.setState({
      pointID: e.target.value
    })
  }

  onChangelocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }
    
  onChangecontainers(e) {
    this.setState({
      containers: e.target.value
    })
  }

  onChangeweight(e) {
    this.setState({
      weight: e.target.value
    })
  }
   
  onSubmit(e) {
    e.preventDefault();

    const greenpoint = {
      username: this.state.username,
      pointname: this.state.pointname,
      pointID: this.state.pointID,
      date: this.state.date,
      location: this.state.location,
      containers: this.state.containers,
      weight: this.state.weight
    }

    console.log(greenpoint);

    axios.post('http://localhost:5000/greenpoints/add', greenpoint)
      .then(res => console.log(res.data));

    window.location = '/';
  }

    
    render(){
        return(
        <div>
            <h3><ArrowLeftOutlined /><b> New Green Point</b></h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group" style={{ width: 400 }}> 
              <DeleteOutlined /><label >Username: </label>
                <select ref="userInput"
                    required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onChangeusername}>
                    {
                      this.state.users.map(function(user) {
                        return <option 
                          key={user}
                          value={user}>{user}
                          </option>;
                      })
                    }
                </select>
              </div>
              <div className="form-group"style={{ width: 400 }}> 
              <HeatMapOutlined /><label>pointname: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={this.state.pointname}
                    onChange={this.onChangepointname}
                    />
              </div>
              <div className="form-group">
                <label>Date: </label>
                <div>
                  <DatePicker
                    selected={this.state.date}
                    onChange={this.onChangeDate}
                  />
                </div>
                <div className="form-group"style={{ width: 400 }}>
                <CheckCircleOutlined /><label>location: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.location}
                    onChange={this.onChangelocation}
                    />
              </div>
              <div className="form-group"style={{ width: 400 }}>
                <label>containers (plastic,organic,glass,E-waste,metal,plastic): </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.containers}
                    onChange={this.onChangecontainers}
                    />
              </div>
              <div className="form-group"style={{ width: 400 }}>
                <label>weight(0,0,0,0,0,0)KG: </label>
                <input 
                    type="text" 
                    className="form-control"
                    value={this.state.weight}
                    onChange={this.onChangeweight}
                    />
              </div>
              
              </div>
      
              <div className="form-group">
                <input type="submit" value="Create Green Point" className="btn btn-primary" />
              </div>
            </form>
          </div>
          )
        }
      }