function Body() {
  const cinema = {
    theater: "prasads",
    movie: [
      {
        title: "Baahubali",
        genere: "Action,Drama",
        img: "images/baahubali.jpg",
        shows: ["11:30am", "2:30pm", "6:30pm", "9:30pm"],
        seats: [10, 10, 5, 0],
        condition: "A.c",
      },
      {
        title: "Pushpa",
        genere: "Action,Triller",
        img: "images/pushpa-raj.jpg",
        shows: ["11:00am", "2:30pm", "6:00pm", "9:30pm"],
        seats: [10, 5, 0, 0],
        condition: "A.c",
      },
      {
        title: "KGF",
        genere: "Action,Thriller",
        img: "images/kgfwide.jpg",
        shows: ["11:30am", "2:30pm", "6:30pm", "9:30pm"],
        seats: [0, 0, 5, 0],
        condition: "A.c",
      },
      {
        title: "Pushpa 2",
        genere: "Action,Thirller",
        img: "images/pushpa2wide.webp",
        shows: ["11:30am", "2:30pm", "6:30pm", "9:30pm"],
        seats: [0, 0, 5, 0],
        condition: "A.c",
      },
      {
        title: "Baahubali 2",
        genere: "Action,Drama",
        img: "images/baahubali1.jpg",
        shows: ["11:30am", "2:30pm", "6:30pm", "9:30pm"],
        seats: [10, 10, 5, 0],
        condition: "A.c",
      },
      {
        title: "KGF 2",
        genere: "Action,Thriller",
        img: "images/kgf2wide.jpg",
        shows: ["11:30am", "2:30pm", "6:30pm", "9:30pm"],
        seats: [10, 10, 5, 0],
        condition: "A.c",
      },
    ],
  };
  return (
    
      <div class="container">
        <div class="row " style={{ display: "flex", justifycontent: "center" }}>
          {cinema.movie.map((dummy) => (
            <div
              class="card col-4 p-2"
              style={{
                height: "60vh",
                width: "20vw",
                marginRight: "10px",
                marginBottom: "10px",
                marginTop: "40px",
                marginLeft: "50px",
                backgroundColor: "aliceblue",
              }}
            >
              <img
                src={dummy.img}
                class="card-img-top"
                style={{ height: "60%", width: "100%" }}
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title" style={{ fontSize: "20px" }}>
                  {dummy.title}
                </h5>
                <p class="card-text">{dummy.genere}</p>

                <div
                  class="col-1"
                  style={{
                    display: "flex",
                    gap: "10px",
                    width: "",
                    marginTop: "40px",
                  }}
                >
                  {dummy.shows.map((run, index) => (
                    <button
                      class="btn btn-primary marigin-right 5px"
                      style={{
                        width: "100px",
                        height: "50px",
                        marginRight: "5px",

                        fontSize: "9px",
                      }}
                    >
                      {run} {dummy.seats[index]} seats
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

  );
}
export default Body;
