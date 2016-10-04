import * as React from 'react';
import './Card.scss';

class CardProps implements React.Props<Card> {}

export default class Card extends React.Component<CardProps, void> {
    render() {
        return (
            <div className="c-card">
                {this.props.children}
            </div>
        )
    }
}