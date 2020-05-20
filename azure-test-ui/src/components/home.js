import React, {Component} from "react"
import {Typography} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import DisplayMessage from "./display-message";
import ChangeMessage from "./change-message";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            content: 'message'
        }
    }

    changeView(viewName) {
        this.setState({content: viewName})
    }

    render() {
        let content
        let type = this.state.content

        switch (type) {
            case "message":
                content = <DisplayMessage/>
                break

            case "change" :
                content = <ChangeMessage/>
                break

            default :
                content = <Typography variant='h1'>ERROR</Typography>
        }

        return (
            <div>
                <AppBar position='static'>
                    <Toolbar>
                        <Button onClick={() => this.changeView('message')}>View Message</Button>
                        <Button onClick={() => this.changeView('change')}>Change Message</Button>
                    </Toolbar>
                </AppBar>
                {content}
            </div>
        )
    }
}

export default Home