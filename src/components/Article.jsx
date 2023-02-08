import PropTypes from 'prop-types';
import HeadLineCard from './HeadLineCard';
import ArticleBody from './ArticleBody';
import {Link, useParams } from 'react-router-dom';
const Article = ({ newsData }) => {
  const { id } = useParams();
  const newsArticle = newsData.map(news => {
    const newsId = news.id.replaceAll(`/`, `-`);
    if (newsId === id) {
      return (
        <div className="row"key={newsId}>
          <div className="bg-secondary bg-opacity-10 border border-primary border-3 rounded-5">
            <a target="_blank"rel="noreferrer" href={news.webUrl} >
              <HeadLineCard thumbnail={news.fields.thumbnail} headline={news.fields.headline} />
              </a>
                        <ArticleBody summary={news.fields.bodyText}></ArticleBody>
          </div>
          <Link to={`/`}>
            <button type="button" class="btn btn-outline-primary">Go back</button>
          </Link>
        </div>

      )
      
    }
    return (<div key={newsId}>
    </div>);
    
  })
  return (
    <div>
      {newsArticle}
    </div>
  );
}
Article.propTypes = {
  newsData: PropTypes.array.isRequired
}

export default Article