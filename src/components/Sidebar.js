import "../styles/Sidebar.css"

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul className="nav-menu">
        <li>
          <a href="#home">Home</a>
        </li>
        <li className="has-submenu">
          <a href="#about">About</a>
          <ul className="submenu">
            <li>
              <a href="#about-tms">About TMS</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
            <li>
              <a href="#vision">Vision</a>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a href="#reports">Reports</a>
          <ul className="submenu">
            <li>
              <a href="#general">General Report</a>
            </li>
            <li className="has-submenu">
              <a href="#2024">Year 2024</a>
              <ul className="submenu">
                <li>
                  <a href="#event1">Event Name 1</a>
                </li>
                <li>
                  <a href="#event2">Event Name 2</a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#2025">Year 2025</a>
              <ul className="submenu">
                <li>
                  <a href="#event1-2025">Event Name 1</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="has-submenu">
          <a href="#event">Event</a>
          <ul className="submenu">
            <li>
              <a href="#upcoming">Upcoming Event</a>
            </li>
            <li className="has-submenu">
              <a href="#past">Past Event</a>
              <ul className="submenu">
                <li>
                  <a href="#2024-events">Year 2024</a>
                </li>
                <li>
                  <a href="#2025-events">Year 2025</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar

