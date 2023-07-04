const Meme = () => {
    return (
        <main>
            <form className="form" action="">
                <div>
                    <input type="text" placeholder="top text"/>
                    <input type="text"  placeholder="bottom text" />
                </div>
            <button className="button" type="submit">Get a new meme image</button>
            </form>
        </main>
    )
}

export default Meme;