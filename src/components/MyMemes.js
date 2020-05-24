import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeMeme } from '../actions';

class MyMemes extends Component {

    download(meme) {
        fetch(`${meme.data.url}`)
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'meme.jpg';
					a.click();
				});
				//window.location.href = response.url;
		});
    }
    render() {
        return(
            <div>
                {
                    this.props.myMemes.map((meme, index) => {
                        return(
                            <div key={index} className="my-meme-images">
                                <div className="remove-meme" onClick={() => this.props.removeMeme(meme)}>x</div>
                                <img
                                    src={meme.data.url}
                                    alt="my-meme"
                                    className="my-meme-img"
                                    />
                                <div className="download-meme" download onClick={()=> this.download(meme)}>Download</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStatetoProps(state) {
    return{
        myMemes : state.myMemes
    }
}

export default connect(mapStatetoProps, { removeMeme }) (MyMemes);