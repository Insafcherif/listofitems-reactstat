import React, { Component } from 'react';
import SigleItem from './SigleItem';

class ListOfItems extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.articles.map((elt) => (
                        <SigleItem
                            key={elt.id}
                            elt={elt}
                            IncrementQtty={this.props.IncrementQtty}
                            DecrementQtty={this.props.DecrementQtty}
                            DeleteArticle={this.props.DeleteArticle}
                            handletolalIncrement={this.props.handletolalIncrement}
                            tolaldecrement={this.props.tolaldecrement}
                        />))}
                </div>
                <div tyle={{ display: "flex", justifyContent: "center" }}>
                    <h1>Total sum</h1>
                    <h1> {this.props.sum}</h1>
                    <h1>$</h1>
                </div>
            </div>
        );
    }
}

export default ListOfItems;