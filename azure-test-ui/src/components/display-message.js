import React, {Component} from "react";
import Axios from "axios";
import Typography from "@material-ui/core/Typography";

export default class DisplayMessage extends Component {
    constructor() {
        super();
        this.state = { message: ''}
    }

    componentDidMount() {
        this.getMessage().then((returnValue) => {
            this.setState({message: returnValue.data})
        })
    }

    async getMessage() {
        let message = await Axios.get('http://localhost:9000/')
        return message
    }

    render() {
        return (
            <div>
                <Typography variant='h3'>{this.state.message}</Typography>
            </div>
        )
    }
}