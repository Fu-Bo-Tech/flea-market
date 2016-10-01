import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './block.css';
import { Rating } from 'belle';
import { Link } from 'react-router';

const starStyle = {
  opacity: 1,
  marginLeft: 10,
};

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'Block';
  }
  render() {
    const { good } = this.props;
    const length = good.subscriptPeople && good.subscriptPeople.length || 0;
    const highestBidder = good.subscriptPeople &&
                          good.subscriptPeople[0] &&
                          good.subscriptPeople[0].displayName ||
                          'None of Above';
    const detailLink = `good/${good.id}`;
    let starNum = parseInt(length / 5 + 1, 10);
    starNum = starNum > 5 ? 5 : starNum;
    return (
      <li styleName="good-container">
        <Link to={detailLink}>
          <img styleName="image" src={good.image} alt="Not found" />
        </Link>
        <label>{good.title}</label>
        <Rating defaultValue={starNum} disabled disabledStyle={starStyle}>star</Rating>
        <p>Highest Bidder: {highestBidder}</p>
      </li>
    );
  }
}

Block.propTypes = {
  good: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default CSSModules(Block, styles);