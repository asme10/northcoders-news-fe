import React from "react";
import SortField from "./SortField";

const LatestUpdate = () => {
  return (
    <div className="container px-5">
      <div className="d-flex justify-content-between align-items-center mt-2">
        <h2>Latest updates</h2>
        <SortField />
      </div>
      <div className="row gx-5 align-items-center justify-content-center">
        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
          <img
            className="img-fluid rounded-3 my-5"
            src="https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt="..."
          />
        </div>
        <div className="col-lg-8 col-xl-7 col-xxl-6">
          <div className="my-5 text-center text-xl-start">
            <h2 className="display-5 mb-4">
              The Notorious MSG’s Unlikely Formula For Success
            </h2>
            <p className="lead fw-normal text-black-50 ">
              Vitae laudantium molestiae neque ut dicta fuga similique. Sit
              nesciunt magni sit beatae. Porro recusandae aut exercitationem
              eligendi voluptas. Dolore eligendi inventore magni voluptatem quia
              ut ut.
            </p>
            <h5 className="my-4">Cooking</h5>
            <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
              <a className="btn btn-outline-primary btn-lg px-4" href="#!">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdate;
