import "../styles/BoardMembers.css"

function BoardMembers() {
  const boardMembers = [
    {
      name: "John Doe",
      place: "New York",
      designation: "Chairman",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "Jane Smith",
      place: "London",
      designation: "Vice Chairman",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "Mike Johnson",
      place: "Paris",
      designation: "Secretary",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
  ]

  return (
    <section className="board-members">
      <h2>Board Members</h2>
      <div className="board-members-grid">
        {boardMembers.map((member, index) => (
          <div key={index} className="board-member-card">
            <div className="member-image">
              <img src={member.image || "/placeholder.svg"} alt={member.name} />
            </div>
            <h3>{member.name}</h3>
            <p className="place">{member.place}</p>
            <p className="designation">{member.designation}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BoardMembers

