import destructionImage1 from "../assets/images/slider/people.jpg";
function Slider() {
  return (
    <>
      <div className="slider">
      
        <img src={destructionImage1} alt="Hedy Lamarr" className="photo" />
       
        <div className="slider__content">
          <div className="slider__content--text">
            <h1>Earthquake 18th Baishakh 2072 </h1>
            <h5>Government of Nepal </h5>
          </div>
          <div className="slider__content--more mt-3">
            <a className="btn-learn-more" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Slider;
