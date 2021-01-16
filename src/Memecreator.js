import React , {Component} from 'react';
import ReactDOM from 'react-dom';
class Memecreator extends Component {
    constructor() {
        super();
        this.state = {
            topText:"  ",
            bottomText:"  ",
            randomImg:"http://i.imgflip.com/1bij.jpg",
            allMeme: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes);
                this.setState({ allMeme: memes })
            })
    }

    handleChange(event) {
        const {name , value} = event.target
        this.setState({ [name] : value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMeme.length);
        console.log("randNum",randNum);
        const randImg = this.state.allMeme[randNum].url
        console.log("randImg",randImg);
        this.setState({ randomImg: randImg })
    } 

    render() {
        return <div className="meme-class">
                <form className="form-meme" onSubmit={this.handleSubmit}>
                    <input type="text" 
                    name="topText"
                    placeholder="Top Text" 
                    value={this.state.topText}
                    onChange={this.handleChange}/>

                    <input type="text" 
                    name="bottomText" 
                    placeholder="Bottom Text" 
                    value={this.state.bottomText}
                    onChange={this.handleChange}/>
                    <button>Create</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg}/>
                    <h1 className="top">{this.state.topText}</h1>
                    <h1 className="bottom">{this.state.bottomText}</h1>
                </div>
        </div>
    }
}

export default Memecreator;