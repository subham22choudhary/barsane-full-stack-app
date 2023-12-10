import "./homediv.css";

import images from "../img";
import { Outlet, Link } from "react-router-dom";
export default function HomeDiv() {
  return (
    <>
      <div className="">
        <div className="container">
          <div>
            <div className="row align-items-center">
              <div className="col-md-6 col-12 mb-3 mb-md-0 mb-lg-0">
                <img src={images[1]} className="img-fluid img-2 " alt="Image" />
              </div>

              <div className="col-md-6 col-12">
                <p className="text-1 mb-0">
                  Experience virtual Hindu puja ceremonies and spiritual
                  guidance from expert Pandits at home. Explore sacred books,
                  schedule video calls for traditional rituals.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="row mt-5 justify-content-center">
              <div className="col-md-4 col-12 mb-3 mb-md-0 mb-lg-0">
                <div className="book-card d-flex justify-content-center">
                  <div className="card-video">
                    <h4 className="mb-0 text-center card-puja-text-1">
                      <Link to="/bookpuja">
                        Book your Puja on 1:1 Video Call
                      </Link>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="book-card d-flex justify-content-center">
                  <div className="card-video">
                    <h4 className="mb-0 text-center card-puja-text-1">
                      Book your Puja on in person visit
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
}
