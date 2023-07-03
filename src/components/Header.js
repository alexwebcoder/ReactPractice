const Header = ({img}) => {
    return(
        <nav className="nav">
           <ul>
              <li><a href="/"><img src={`../images/${img}`} alt="picture of troll"/><span>Meme Generator</span></a></li>
              <li>React Course - Project 3</li>
           </ul>
        </nav>
    )
}

export default Header;