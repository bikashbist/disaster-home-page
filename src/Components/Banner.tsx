import destructionImage1 from "../assets/images/slider/nepal-army.jpg";
function Banner() {
    const title = "At Gorkha Nepal Army In Action 2015";
    const subtitle = "Gorkha Lamidada, Nepal";
  return (
    <>
      <div className="banner pb-lg-5">
        <div className="container">
          <div className="banner__details">
            <img src={destructionImage1} alt="Hedy Lamarr" className="photo" />

            <div className="banner__content">
              <div className="banner__content--text">
                <h1>{title} </h1>
                <h5> {subtitle}</h5>
              </div>
              <div className="banner__content--more mt-3">
                <a className="btn-learn-more" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
