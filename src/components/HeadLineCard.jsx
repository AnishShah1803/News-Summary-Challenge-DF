import PropTypes from 'prop-types';
const HeadLineCard = ({thumbnail, headline}) => {
    return (
        <div className='card bg-primary bg-opacity-10 rounded-5' data-testid="headlineCard">
            <img src={thumbnail} className="card-img-top rounded-5"alt={headline}/>
            <h3 className="card-text rounded-5">{headline}</h3>
      </div>
  )
}
HeadLineCard.propTypes = {
    headline: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
}
export default HeadLineCard