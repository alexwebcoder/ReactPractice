import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
    const [memeImage, setMemeImage] = useState('');

 const getRandomImage = () => {
     const imageArray = memesData.data.memes;
     const randomNumber = Math.floor(Math.random() * imageArray.length);
     setMemeImage(imageArray[randomNumber].url)
     console.log(memeImage);
     
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
            <img src={memeImage} alt="picture of a meme" />
        </main>
    )
}

export default Meme;