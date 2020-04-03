import React from "react"

class Dummy extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }
        // this.action = this.action.bind(this)
    }
    stateChange = (e) => {
        // console.log(e)
        this.setState({
            name:e.target.value
        })

    }
    noChange=()=>{

    }

    render() {
        // console.log("You dummy");
        // console.log(this.state.count)
        return (
            <div>
                <center>
                    <form onSubmit={this.noChange}>
                        <label htmlFor="name">Enter your First name:
                            <input name="name" id="name" type="text" value={this.state.name} onChange={this.stateChange} required />
                        </label><br /><br />
                        <input name="submit" type="submit" id="submit"></input>

                    </form>
                </center>
            </div>
        )
    }
}
export default Dummy;