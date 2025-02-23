import AboutSection from "./AboutSection"
import BoardMembers from "./BoardMembers"
import Members from "./Members"
import Gallery from "./Gallery"
import "../styles/MainContent.css"

function MainContent() {
  return (
    <main className="main-content">
      <AboutSection />
      <BoardMembers />
      <Members />
      <Gallery />
    </main>
  )
}

export default MainContent

