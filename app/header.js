
export default function Header(){
    return(
        <>
        <header className="headerCon">
            <nav className="headerMenu">
            <div className="headerLogoCon">
             <a href="/"><img src="logo.svg" alt="logo" className="logoimg" ></img></a>
            </div>
            <div className="blank"></div>
                <ul>
                    <li><a href="#About">/About</a></li>
                    <li><a href="#Skills">/Skills</a></li>
                    <li><a href="#Projects">/Projects</a></li>
                    <li><a href="#Archive">/Archive</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}