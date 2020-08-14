import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditGreenPoint extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePointname = this.onChangePointname.bind(this);
    this.onChangePointID = this.onChangePointID.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeContainers = this.onChangeContainers.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      pointname: '',
      pointID: 0,
      date: new Date(),
      location: '',
      containers:'',
      weight: '',
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/greenpoints/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          username: response.data.username,
          pointname: response.data.pointname,
          pointID: response.data.pointID,
          date: new Date(response.data.date),
          location: response.data.location,
          containers: response.data.containers,
          weight: response.data.weight
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangePointname(e) {
    this.setState({
      pointname: e.target.value
    })
  }

  onChangePointID(e) {
    this.setState({
      pointID: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }
  onChangeContainers(e) {
    this.setState({
      containers: e.target.value
    })
  }
  onChangeWeight(e) {
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

    axios.post('http://localhost:5000/greenpoints/update/' + this.props.match.params.id, greenpoint)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Green Point</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
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
        <div className="form-group"> 
          <label>Pointname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.pointname}
              onChange={this.onChangePointname}
              />
        </div>
        <div className="form-group">
          <label>Point ID: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.pointID}
              onChange={this.onChangePointID}
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
        </div>
        <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>        
        <div className="form-group">
          <label>Containers: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.containers}
              onChange={this.onChangeContainers}
              />
        </div>        
        <div className="form-group">
          <label>Weight: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeWeight}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Green Points" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}