import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
    const [memeImage, setMemeImage] = useState('');

    const imageArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * imageArray.length);
    // const randomImage = imageArray[randomNumber].url;

    const getRandomImage =()=> {
        setMemeImage( imageArray[randomNumber].url)
    }

 const [isGoingOut, setIsGoingOut] = useState(true);

 const changeMime = () => {
    setIsGoingOut((prev) => !prev)
 }
    

    
    return (
        <main>
            <div className="form" action="">
                <div>
                    <input type="text" placeholder="top text"/>
                    <input type="text"  placeholder="bottom text" />
                </div>
            <button className="button" type="submit" onClick={getRandomImage}>Get a new meme image</button>
            </div>
            <img className="memeImage" src={memeImage} alt="picture of a meme" />
            <div onClick={changeMime} className="state--value">
                <h1>{isGoingOut ? 'yes' : 'no'}</h1>
            </div>
        </main>
    )
}

export default Meme;