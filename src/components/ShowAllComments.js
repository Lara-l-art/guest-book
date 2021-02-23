import PropTypes from 'prop-types';

function ShowAllComments({ comments }) {
  return (
    <div className="comments">
      <ul className="comments__list">
        {comments.length > 0 ? comments.map(comment => (
          <li
            key={comment.id}
            className="comments__item"
          >
            <p className="comments__name">
              <strong>{comment.name}</strong>
              <span className="comments__date">
                  {`${comment.date} in ${comment.time}`}
                </span>
            </p>
            <p className="comments__text">{comment.text}</p>
          </li>
        )) : ''}
      </ul>
    </div>
  );
}

export default ShowAllComments;

ShowAllComments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,

  }).isRequired,).isRequired,
};
