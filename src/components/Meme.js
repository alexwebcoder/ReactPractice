import memesData from "../memesData";

const Meme = () => {
 
    const getRandomImage = () => {
        const imageArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * imageArray.length);
        const url = imageArray[randomNumber].url;
        console.log(url);
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
        </main>
    )
}

export default Meme;