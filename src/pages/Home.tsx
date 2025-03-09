import News from "../Components/News";
import Banner from "../Components/Banner";
import Events from "../Components/Events";
import Slider from "../Components/Slider";

import earthquake from "../assets/images/report/earthquake.png";
import fireimage from "../assets/images/report/danger.png";
import landslide from "../assets/images/report/landslide.png";
import storm from "../assets/images/report/storm.png";
function Home() {
  return (
    <>
      <Slider />
      <div className="disaster pt-lg-5 pb-lg-4 pb-3 pt-3 ">
        <div className="container">
          <div className="disaster__report ">
            <div className="section-title text-start">
              <h1>Disaster Report</h1>
            </div>
            <div className="disaster__details bg-white mt-lg-4 ">
              <div className="d-flex ">
                <div
                  className="nav pt-lg-5 pt-3 nav-custom flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <h4>Report 1</h4>
                    <p>Earthquake</p>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="false"
                  >
                    <h4>Report 2</h4>
                    <p>Fire</p>
                  </div>

                  <div
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    role="tab"
                    aria-controls="v-pills-messages"
                    aria-selected="false"
                  >
                    <h4>Report 3</h4>
                    <p>Landslide</p>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    role="tab"
                    aria-controls="v-pills-settings"
                    aria-selected="false"
                  >
                    <h4>Report 4</h4>
                    <p>Havy Strom</p>
                  </div>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <div className="earthquick py-lg-4 ps-lg-5">
                      <img
                        width="70"
                        src={earthquake}
                        alt="Hedy Lamarr"
                        className="photo custom-pink"
                      />
                      <h3 className="my-3">Earthquake</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus dolorem maiores aperiam veritatis natus,
                        sed mollitia nesciunt aut minus. Voluptatem quaerat sint
                        dolor sit veritatis soluta eaque iure eos pariatur?{" "}
                      </p>
                      <div className="btn-more">
                        <a className="btn-learn-more" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="earthquick py-lg-4 ps-lg-5">
                      <img
                        width="70"
                        src={fireimage}
                        alt="Hedy Lamarr"
                        className="photo custom-pink"
                      />
                      <h3 className="my-3">Fire</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus dolorem maiores aperiam veritatis natus,
                        sed mollitia nesciunt aut minus. Voluptatem quaerat sint
                        dolor sit veritatis soluta eaque iure eos pariatur?{" "}
                      </p>
                      <div className="btn-more">
                        <a className="btn-learn-more" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-disabled"
                    role="tabpanel"
                    aria-labelledby="v-pills-disabled-tab"
                  >
                    <div className="earthquick py-lg-4 ps-lg-5">
                      <img
                        width="70"
                        src={landslide}
                        alt="Hedy Lamarr"
                        className="photo custom-pink"
                      />
                      <h3 className="my-3">Landslide</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus dolorem maiores aperiam veritatis natus,
                        sed mollitia nesciunt aut minus. Voluptatem quaerat sint
                        dolor sit veritatis soluta eaque iure eos pariatur?{" "}
                      </p>
                      <div className="btn-more">
                        <a className="btn-learn-more" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="earthquick py-lg-4 ps-lg-5">
                      <img
                        width="70"
                        src={landslide}
                        alt="Hedy Lamarr"
                        className="photo custom-pink"
                      />
                      <h3 className="my-3">Landslide</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus dolorem maiores aperiam veritatis natus,
                        sed mollitia nesciunt aut minus. Voluptatem quaerat sint
                        dolor sit veritatis soluta eaque iure eos pariatur?{" "}
                      </p>
                      <div className="btn-more">
                        <a className="btn-learn-more" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-settings"
                    role="tabpanel"
                    aria-labelledby="v-pills-settings-tab"
                  >
                    <div className="earthquick py-lg-4 ps-lg-5">
                      <img
                        width="70"
                        src={storm}
                        alt="Hedy Lamarr"
                        className="photo custom-pink"
                      />
                      <h3 className="my-3">Havy Storm</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Necessitatibus dolorem maiores aperiam veritatis natus,
                        sed mollitia nesciunt aut minus. Voluptatem quaerat sint
                        dolor sit veritatis soluta eaque iure eos pariatur?{" "}
                      </p>
                      <div className="btn-more">
                        <a className="btn-learn-more" href="#">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="disaster__table mt-lg-4 mt-3">
            <div className="table-responsive">
              <table className="table  table-bordered">
                <thead className="table-pink">
                  <tr>
                    <th>Incident </th>
                    <th>Death Male</th>
                    <th>Death Female</th>

                    <th>Total Death</th>
                    <th>Missing People</th>
                    <th>Affected Family</th>
                    <th>Injured</th>
                    <th>Displaced Male(N/A)</th>
                    <th>Displaced Female(N/A)</th>
                    <th>Property Loss</th>
                    <th>Incident Place</th>
                    <th>Damaged Houses(%)</th>
                    <th>No. of Displaced Family</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Earthquake</td>
                    <td>30</td>

                    <td>20</td>

                    <td>79</td>
                    <td>10</td>
                    <td>30</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Fire</td>
                    <td>33</td>

                    <td>24</td>

                    <td>70</td>
                    <td>100</td>
                    <td>90</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Landslide</td>
                    <td>60</td>

                    <td>70</td>

                    <td>59</td>
                    <td>20</td>
                    <td>90</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Heavy Storm</td>
                    <td>90</td>

                    <td>10</td>

                    <td>49</td>
                    <td>30</td>
                    <td>90</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <News />
      <Banner />
      <Events />
    </>
  );
}

export default Home;
