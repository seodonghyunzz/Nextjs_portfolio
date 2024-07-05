import TypingText from "./component/typingtext";
import Profile from "./component/profile";
import Skills from "./component/skills";
import Archive from "./component/archive";
import Projects from "./component/projects";

export default function Home() {

  return (
    <>
      <div className="MainContainer">
        <div className="Content_Wrapper">
          {/* About */}
          <section id="About">
            <div className="Typing_Area">
              <TypingText/>
            </div>
            <div className="Profile_Area">
              <Profile/>
            </div>
          </section>
          {/* Skills */}
          <section id="Skills">
            <div className="Skills_Area">
              <Skills/>
            </div>
          </section>
          {/* projets */}
          <section id="Projects">
            <div className="Projects_Area">
              <Projects/>
            </div>
          </section>
          {/* Archive */}
          <section id="Archive">
            <div className="Archive_Area">
              <Archive/>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
