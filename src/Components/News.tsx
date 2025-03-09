
import NewsArticle from "./NewsArticle";
function News() {
  return (
    <>
      <div className="news pb-lg-5">
        <div className="container">
        <div className="section-title text-start">
              <h1>Latest news</h1>
            </div>
          <div className="news__details  mt-3">
            
            <div className="row">
                <NewsArticle/>
                <NewsArticle/>
                <NewsArticle/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default News;
