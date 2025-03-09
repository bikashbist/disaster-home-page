import newsimg from "../assets/images/news/2025 02 18 DRR 1.png";

function NewsArticle() {
  const newsDate = "March 2025";
  const newsTitle = "News Title";
  const newsDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum " +
  "impedit officia reprehenderit velit, quod maxime eaque voluptates " +
  "earum ullam vel cupiditate explicabo placeat quas ut aliquid " +
  "molestias. Deserunt, animi rerum.";

  return (
    <>
      <div className="col-lg-4">
        <div className="news__content">
          <img src={newsimg} alt="img" />
          <div className="news__content--text">
            <span>{newsDate} </span>
            <h2 className="mt-2"> {newsTitle}</h2>
            <p>
             {newsDesc}
            </p>
            <a className="btn-learn-more" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsArticle;
