import React from "react"

class Dummy extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1
        }
        // this.action = this.action.bind(this)
    }
    // componentDidMount(){
    //     // console.log("You dummy");
    //     this.setState({
    //         name:"Karthik"
    //     })
    // }

    // componentWillUnmount(){
    //     // console.log("hi")
    //     // this.setState({
    //     //     location:"delhi"
    //     // })
    // }

    // action(){
    //     this.setState({
    //         count:this.state.count++
    //     })
    // }

    action = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        // console.log("You dummy");
        // console.log(this.state.count)
        return (
            <div>
                <h1>
                    <center>
                        <h3>Count Value:{this.state.count}</h3>
                        <button onClick={this.action} className="btn btn-dark btn-sm my-1">hello</button>
                        {/* <button >Hi</button> */}

                    </center>
                </h1>
            </div>
        )
    }
}
export default Dummy;