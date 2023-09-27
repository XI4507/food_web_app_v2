import React from "react";

class UserClass extends React.Component {
 constructor(props){
    super(props);
    this.state={
        userInfo:{
            name:"dummy Name",
        }
    }
 }
 async componentDidMount(){
    const data=await fetch("https://api.github.com/users/xi4507")
    const json=await data.json();
    this.setState({
        userInfo:json
    })
    console.log(json);
 }
 componentDidUpdate(){
    console.log("component updated");
 }
  render() {
    return (
      <>
        <div className="user-card">
          <h2>{this.state.userInfo.name}</h2>
          <img src={this.state.userInfo.avatar_url} alt="avatar"/>
        </div>
      </>
    );
  }
}

export default UserClass;
