import React from "react";

const Football = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2 className="mb-4">Football</h2>
          <p>
            Welcome to the Football page, where you can find all the latest news
            and updates about football. Whether you're a fan of the beautiful
            game or just curious about it, we've got you covered.
          </p>
          <section className="my-5">
            <h3>Latest News</h3>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Football News"
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Exciting Match Results</h5>
                    <p className="card-text">
                      Read about the thrilling match results from the recent
                      football games.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="my-5">
            <h3>Upcoming Matches</h3>
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Manchester United vs. Liverpool
                <span className="badge bg-primary rounded-pill">
                  May 15, 2023
                </span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Barcelona vs. Real Madrid
                <span className="badge bg-primary rounded-pill">
                  May 20, 2023
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Football;
