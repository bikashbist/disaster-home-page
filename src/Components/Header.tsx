import Marquee from "react-fast-marquee";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__top py-2">
          <div className="container">
            <p className="mb-0">
              An official website of the Kathmandu States government Here's how
              you know
            </p>
          </div>
        </div>
        <div className="header__middle py-2">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="logo d-flex align-items-center gap-2">
                <div className="img">
                  <img
                    src="https://kathmandu.gov.np/wp-content/uploads/2021/02/cropped-logo.png"
                    alt="logo"
                  />
                </div>
                <div className="logo__name">
                  <h3>Disaster Management System</h3>
                  <h6>Kathmandu Metropolitan City , Bagmati Province</h6>
                </div>
              </div>
              <div className="logo__right">
                <div className="img d-flex align-items-center gap-3">
               

                  <img
                    width="70"
                    src="https://kathmandu.gov.np/wp-content/themes/kmc-theme/images/flag-nepal.gif"
                    alt="nepal"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header__news py-2">
          <div className="container">
            <Marquee speed={50} gradient={false}>
              <p> European Civil Protection and Humanitarian Aid Operations</p>{" "}
              <p> European Civil Protection and Humanitarian Aid Operations</p>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
