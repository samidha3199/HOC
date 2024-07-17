import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            count: 1,
            count1:2,
        }
        console.log(this.props.name + "Child Constructor is called!")
    }

    componentDidMount(){
        console.log(this.props.name + "Child Component did mount called!")
    }

    render(){

        console.log(this.props.name + "Child Render is called!")

        const {name,location,number} = this.props
        const {count, count1} = this.state
        return(
            <>
                <div className="user__card">
                <h1>Count: {count}</h1>
                    <h1>Count1: {count1}</h1>
                    <button onClick={()=>{
                        this.setState({
                            count: this.state.count + 1,
                            count1: this.state.count + 1
                        })
                    }}>Count Increase</button>
                    <h3>Name:</h3>
                    <p>Location:</p>
                    <p>Contact No.</p>
                </div>
            </>
        )
    }
}

export default UserClass