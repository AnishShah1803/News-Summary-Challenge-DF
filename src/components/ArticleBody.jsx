import PropTypes from 'prop-types';
const ArticleBody = ({ summary }) => {
  return (
    <p data-testid="articleBody">{summary}</p>
  )
}

ArticleBody.propTypes = {
  summary: PropTypes.string.isRequired
}

export default ArticleBody