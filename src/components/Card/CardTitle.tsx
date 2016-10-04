import * as React from 'react';
import './Card.scss';

class CardTitleProps implements React.Props<CardTitle> {}

export default class CardTitle extends React.Component<CardTitleProps, void> {
    render() {
        return (
            <h1 className="c-card__title">{ this.props.children }</h1>
        )
    }
}