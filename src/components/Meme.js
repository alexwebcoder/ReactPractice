import { useState } from "react";
import memesData from "../memesData";

const Meme = () => {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/9ehk.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    
    const getRandomImage =()=> {
        
        const imageArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * imageArray.length);
        const url = imageArray[randomNumber].url;
        setMeme(prevMeme => ({
          ...prevMeme,
          randomImage: url

        }));

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
            <img className="memeImage" src={meme.randomImage} alt="picture of a meme" />
            <div onClick={changeMime} className="state--value">
                <h1>{isGoingOut ? 'yes' : 'no'}</h1>
            </div>
        </main>
    )
}

export default Meme;