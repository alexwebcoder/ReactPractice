const MainContent = () => {
    // const h1 = document.createElement('h1');
    // h1.className = 'header';
    // console.log(h1);

    // const element = <h1 className="header">This is JSX</h1>;
    // console.log(element);

    // const page = (
    //     <div>
    //         <h1 className="header">This is the JSX</h1>
    //         <p>This is a paragraph</p>
    //     </div>
    // )
    // console.log(page);

    const navBar = (
        <nav>
            <h1>Pick Up Panama</h1>
            <ul>
                <li>Contact</li>
                <li>Newsfeed</li>
                <li>About</li>
            </ul>
        </nav>
    )
    return(
        navBar
    )
}


export default MainContent;