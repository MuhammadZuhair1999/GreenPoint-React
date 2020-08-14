import React from 'react';
import {BrowserRouter as Router, Route,Link} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal,Input,Button,Avatar,Layout, Menu } from 'antd';
import { SearchOutlined ,LoginOutlined,UserOutlined, MailOutlined,CaretRightOutlined,BookOutlined,DashboardOutlined,DeleteOutlined} from '@ant-design/icons';
import {Map,InfoWindow,Marker,GoogleApiWrapper} from 'google-maps-react';


import Navbar from "./components/navbar.component";
import searching from "./components/greenpoints-list.component"; 
//import Home from "./components/home.component";
//import HowItWorks from "./components/howitworks.component";
//import Team from "./components/team.component";
//import Sponsors from "./components/sponsors.component";
//import News from "./components/news.component";
//import ContactUs from "./components/contactus.component";

import GreenPointsList from "./components/greenpoints-list.component";
import EditGreenPoint from "./components/edit-greenpoint.component";
import CreateGreenPoint from "./components/create-greenpoint.component";
import CreateUser from "./components/create-user.component";

const { Header, Footer, Sider, Content } = Layout;
const { Search } = Input;


function App() {
  return (

    <Router>
    
      <div>
      <Header  style={{ background: "limegreen", padding:10 }}><img src={'/free.png'} alt="Calypso" /><b>Calypso</b>
      
        
      <Avatar size="large" style={{float:'right'}} src="./dp.png" />
      </Header>
      
      <div>
      <div className = "container">
      <Navbar/>
      </div>      
       <br/>
      <Layout>
      <Sider className= "sider-expand-lg" style={{background:"white"}}>
        <div className="collpase sider-collapse">
        <Menu>
        <Link to="/" className="nav-link"><Menu.Item><DashboardOutlined/>
          Dashboard
          </Menu.Item></Link>
          <Link to="/create" className="nav-link"><Menu.Item><DeleteOutlined/>
          Green Points
          </Menu.Item></Link>
          <Menu.Item><CaretRightOutlined/>
          Routes
          </Menu.Item>
          <Menu.Item><BookOutlined/>
          Knowledge Base
          </Menu.Item>
          <Menu.Item><UserOutlined/>
          My Profile
          </Menu.Item>
          <Menu.Item style={{float:'left'}}><LoginOutlined />
          Log Out
          </Menu.Item>
        </Menu>
        </div>
      </Sider>
      <Layout>
        <Content style={{ background: "white"}}>
      
      
    <Link to="/create" className="nav-link"><Button type="primary" style={{ width: 50,background: "limegreen" }}>+</Button></Link>   
    
    <br/><h5>Search Database</h5>
     <Link to ="/search"className = "nav-link"><SearchOutlined /><Search
      placeholder="Search Green Points"
      enterButton="Search"
      size="small"
      style={{ background: "white",width: 400 }}
      onSearch={value => console.log(value)}
    /> <Route path="/search" exact component={GreenPointsList} />
    </Link>
    <br/>
      <Route path="/" exact component={GreenPointsList} />
      <Route path="/edit/:id" component={EditGreenPoint} />
      <Route path="/create" component={CreateGreenPoint} />
      <Route path="/user" component={CreateUser} />
      
          </Content>
        <Footer></Footer>
      </Layout>
      </Layout>
    
      
      </div>
      </div>
      
  </Router>
  );
}
      
export default App;
