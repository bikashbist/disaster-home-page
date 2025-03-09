
import EventArticle from "./EventArticle";
function Events() {
  return (
    <>
      <div className="events pb-lg-5">
        <div className="container">
        <div className="section-title text-start">
              <h1>Latest Events</h1>
            </div>
          <div className="events__details  mt-3">
            
            <div className="row">
                <EventArticle/>
                <EventArticle/>
                <EventArticle/>
                <EventArticle/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Events;
