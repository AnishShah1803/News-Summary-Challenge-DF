import HeadLineCard from './HeadLineCard';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const AllHeadLines = ({newsData}) => {
    const headlines = newsData.map(card => {
        return (
            <Link key={card.id} to={`/article/${card.id.replaceAll('/','-')}`}>
            <span className='col-11 bg-primary bg-opacity-10 border border-primary border-3 rounded-5' data-testid="headlines">
            <HeadLineCard thumbnail={card.fields.thumbnail} headline={card.fields.headline}  key={card.id} />
                </span>
                </Link>
                
        )
    })
  return (
      <div className='row'>
          {headlines}
      </div>
  )
}
AllHeadLines.propTypes = {
    newsData: PropTypes.array.isRequired
}
export default AllHeadLines