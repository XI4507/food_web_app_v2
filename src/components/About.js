// import User from "./User"
import React from "react";
import UserClass from "./UserClass";

class About extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <h1>About</h1>
        <hr/>
        {/* <User name="Rakesh Singh" mail="rakesh@gmail.com"/> */}
        <UserClass />
      </div>
    );
  }
}

export default About;
