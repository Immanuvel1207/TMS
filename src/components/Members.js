import "../styles/Members.css"

function Members() {
  const members = [
    {
      name: "Alex Brown",
      place: "Berlin",
      designation: "Member",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "Sarah Wilson",
      place: "Tokyo",
      designation: "Member",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "David Lee",
      place: "Sydney",
      designation: "Member",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "Emma Davis",
      place: "Toronto",
      designation: "Member",
      image: "https://placehold.co/600x400/EEE/31343C",
    },
  ]

  return (
    <section className="members">
      <h2>Members</h2>
      <div className="members-grid">
        {members.map((member, index) => (
          <div key={index} className="member-card">
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

export default Members

