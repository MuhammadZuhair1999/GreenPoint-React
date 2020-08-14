import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const GreenPoint = props => (
    <tr>
      <td>{props.greenpoint.username}</td>
      <td>{props.greenpoint.pointname}</td>
      <td>{props.greenpoint.pointID}</td>
      <td>{props.greenpoint.date.substring(0,10)}</td>
      <td>{props.greenpoint.location}</td>
      <td>{props.greenpoint.containers}</td>
      <td>{props.greenpoint.weight}</td>
      <td>
        <Link to={"/edit/"+props.greenpoint._id}>edit</Link> | <a href="#" onClick={() => { props.deleteGreenPoint(props.greenpoint._id) }}>delete</a>
      </td>
    </tr>
  )

  export class searching extends Component{
    searchGreenPoint(pointname)
    {
      axios.get('http://localhost:5000/GreenPoints/'+pointname)
        .then(response => { console.log(response.data)});
    }

    render(){ 
      return (
          <div>
            <h3><b>Green Points</b></h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>Username</th>
                  <th>Pointname</th>
                  <th>PointID</th>
                  <th>Date</th>
                  <th>Location</th>
                  <th>Containers</th>
                  <th>Weight</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                { this.searchGreenPoint() }
              </tbody>
            </table>
          </div>
        )
      }
    }
  
export default class GreenPointsList extends Component{
    constructor(props) {
        super(props);
    
        this.deleteGreenPoint = this.deleteGreenPoint.bind(this)
    
        this.state = {greenpoints: []};
      }
    
      componentDidMount() {
        axios.get('http://localhost:5000/GreenPoints/')
          .then(response => {
            this.setState({ greenpoints: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }
      
    
      deleteGreenPoint(id) {
        axios.delete('http://localhost:5000/GreenPoints/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
            greenpoints: this.state.greenpoints.filter(el => el._id !== id)
        })
      }
    
      greenpointList() {
        return this.state.greenpoints.map(currentgreenpoint => {
          return <GreenPoint greenpoint={currentgreenpoint} deleteGreenPoint={this.deleteGreenPoint} key={currentgreenpoint._id}/>;
        })
      }

    render(){ 
        return (
            <div>
              <h3><b>Green Points</b></h3>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th>Username</th>
                    <th>Pointname</th>
                    <th>PointID</th>
                    <th>Date</th>
                    <th>Location</th>
                    <th>Containers</th>
                    <th>Weight</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { this.greenpointList() }
                </tbody>
              </table>
            </div>
          )
        }
      }