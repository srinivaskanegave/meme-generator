import React, { Component } from 'react';
import { Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import '../index.css';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends Component {

    constructor() {
        super();

        this.state = {
            memeLimit: 10,
            text0: ' ',
            text1: ' '
        }
    }

    render() {
        console.log('memeLimit', this.state.memeLimit);
        return(
            <div>
                <h2><u>Welcome to the Meme Generator!!</u></h2>
                <MyMemes />
                <h4><i>Write Some Text</i></h4>
                <Form inline>
                    <FormGroup>
                        <FormLabel>Top</FormLabel>
                        {' '}
                        <FormControl onChange={event => this.setState({text0: event.target.value})} type="text"/>
                        {' '}
                        <FormLabel>Bottom</FormLabel>
                        {' '}
                        <FormControl onChange={event => this.setState({text1: event.target.value})} type="text"/>
                        {' '}
                    </FormGroup>
                </Form>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return(
                            <MemeItem key={index} meme={meme} text0={this.state.text0} text1={this.state.text1}/>
                        )
                    })
                }
                {
                    this.props.memes.length !== this.state.memeLimit ?
                    <div className="meme-button" onClick={() => 
                        this.setState({memeLimit: this.state.memeLimit+10})
                        }>Load 10 more memes...</div>
                        :
                    <div></div>
                }
                
            </div>
        )
    }
}

function mapStateTpProps(state) {
    return state;
}

export default connect(mapStateTpProps, null)(App);