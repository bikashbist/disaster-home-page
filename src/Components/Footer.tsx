function Footer() {
  return (
    <>
      <div className="footer py-lg-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="footer__content text-white">
                <h5>
                  Kathmandu Metropolitan City, Office of Municipal Executive,
                  Bagmati Province
                </h5>
                <p>Bagdurbar, Kathmandu</p>
                <p>Email: info@Kathmandu.com</p>
                <p>Phone: +977 14231481</p>
                <p>Mobile: +977 9823846252</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer__content text-white">
                <h5>Google Map</h5>
               <div className="maps mt-4">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.65322787261!2d85.24373135767756!3d27.708935957714655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1741333015422!5m2!1sen!2snp"
                  width="300"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
               </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer__content text-white">
                <h5>Important Links</h5>
                <div className="links mt-4">
                  <li>
                    <a className="text-white text-decoration-none" href="#">
                      ERCC - Emergency Response Coordination Centre
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none" href="#">
                      Union Civil Protection Knowledge Network
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none" href="#">
                      Follow the Disaster Recovery on social media
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none" href="#">
                      ERCC - Emergency Response Coordination Centre
                    </a>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end py-3 text-center text-white">
        <p className="mb-0">काठमाडौँ महानगरपालिका, नगर कार्यपालिकाको कार्यालय, वाग्मती प्रदेश | काठमाडौँ महानगरपालिका, नगर कार्यपालिकाको कार्यालय, वाग्मती प्रदेश</p>
      </div>
    </>
  );
}

export default Footer;
