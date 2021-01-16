import React , {Component} from 'react';

class Header extends Component {
    render() {
        return <div className="avtar bg-light-purple tc">
            <img src={`http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png`}/>
            <h1 className="">Meme Generator</h1>
        </div>
    }
}

export default Header;