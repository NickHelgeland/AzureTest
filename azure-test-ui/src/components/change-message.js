import React, {Component} from "react";
import Axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";


export default class ChangeMessage extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            openDialog: false,
            dialogMessage: ''
        }
    }

    handleClose() {
        this.setState({openDialog: false})
    }

    openDialog(message) {
        this.setState({openDialog: true, dialogMessage: message})
    }

    handleNewMessageResponse() {
        this.submitNewMessage().then((returnValue) => {
            this.openDialog(returnValue.data)
        })
    }

    async submitNewMessage() {
        let response = await Axios.post('http://localhost:9000/', {message: this.state.message})
        return response
    }

    setMessage(newMessage) {
        this.setState({message: newMessage.target.value})
    }

    render() {
        let dialog

        if (this.state.openDialog) {
            dialog = (
                <Dialog open={this.state.openDialog} onClose={() => this.handleClose()}>
                    <DialogTitle>
                        {this.state.dialogMessage}
                    </DialogTitle>
                </Dialog>
            )
        } else {
            dialog = <div></div>
        }

        return (
            <div>
                <FormControl>
                    <TextField label='New Message' onChange={(value) => this.setMessage(value)}></TextField>
                    <div className='divider'></div>
                    <Button color='primary' onClick={() => this.handleNewMessageResponse()} variant='contained'>Submit</Button>
                </FormControl>

                {dialog}
            </div>
        )
    }


}