import "../styles/Gallery.css"

function Gallery() {
  const events = [
    {
      name: "Event 1",
      image:
        "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "Event 2",
      image:
        "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "Event 3",
      image:
        "https://placehold.co/600x400/EEE/31343C",
    },
    {
      name: "Event 4",
      image:
        "https://placehold.co/600x400/EEE/31343C",
    },
  ]

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {events.map((event, index) => (
          <div key={index} className="gallery-item">
            <img src={event.image || "/placeholder.svg"} alt={event.name} />
            <p>{event.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery

