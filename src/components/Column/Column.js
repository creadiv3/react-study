import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import { settings } from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string,
  };

  state = {
    cards: this.props.cards || [],
  };

  render() {
    const { title, icon, cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          {title}
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
        </h3>
        <div>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/* <div>
          <Creator
            text={settings.cardCreatorText}
            action={title => this.addCard(title)}
          />
        </div> */}
      </section>
    );
  }
}

export default Column;
