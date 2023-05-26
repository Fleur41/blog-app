import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import './index.css'

function Post(props) {
    const { blog } = props
  return (
    <Link to={`/read/${blog.id}`} className='post-link'>
        <div className='blog'>
            <img src={blog.thumbnail} />
            <div className='blog-title'>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
            </div>
        </div>
    </Link>
  )
}
Post.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post