import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"


class About extends Component{
    constructor(props){
        super(props)
        console.log("Parent Constructor is called!")
    }

    componentDidMount(){
        console.log("Parent Component did mount called!")
    }

    render(){
        console.log("Parent Render is called!")
        return(
            <>
                <div className="about__container">
                    <h1>About</h1>
                    <p>This is About Page.</p>
                    <UserClass name={"First Child"} location={"Goa"} number={9987654144}/>
                    <UserClass name={"Second Child"} location={"Goa"} number={9987654144}/>
                    {/* <UserClass name={"Third Child"} location={"Goa"} number={9987654144}/> */}
                </div>
            </>
        )
    }
}


export default About

