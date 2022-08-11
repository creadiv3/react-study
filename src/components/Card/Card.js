import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    return (
      <section className={styles.component}>
        <h5>{this.props.title}</h5>
      </section>
    );
  }
}

export default Card;
