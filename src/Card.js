import React from 'react';
class Car extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       Person:{fullName:"jamila",
    bio:"developer",
    imgSrc:"https://scontent.ftun9-1.fna.fbcdn.net/v/t39.30808-6/300282909_377850981215751_8190962974415660263_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iKK-GHvPyYkAX_IQo7S&_nc_ht=scontent.ftun9-1.fna&oh=00_AfCXjQCwi739sscJ6TMtpUuR5YPSLEAOQoWkyL_LP1i5TA&oe=64262F5F",profession:"developer"},
show:true,
mountingTime:0};
    }
    change =() =>{
        this.setState({show:!this.state.show})
    }
    componentDidMount(){
        setInterval( () =>{
            this.setState({mountingTime:this.state.mountingTime +=1})
        },1000)
    }
    render() {
      return (
        <div>
          {this.state.show?<>
          <h1 style={{color:"white"}}>fullName:{this.state.Person.fullName}</h1>
          <h1 style={{color:"white"}}>bio:{this.state.Person.bio}</h1>
          <h1 style={{color:"white"}}>profession:{this.state.Person.profession}</h1>
          <img src={this.state.Person.imgSrc} style={{widh:"150px", height:"150px"}}></img> </>:null}
         <br></br>
         <br></br>
         <h1 style={{color:"white"}}>time:{this.state.mountingTime}</h1>
          <button onClick={this.change} style={{backgroundColor:"blue" ,color:"white" ,width:"70px" ,height:"40px",border:"none"}}>show</button>
          
        </div>
      );
    }
  }
  export default Car;
