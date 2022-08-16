import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SigleItem extends Component {
    constructor(props) {
        super(props);
    }
    handleIncrement = () => {
        this.props.IncrementQtty(this.props.elt.id);
        this.props.handletolalIncrement(this.props.elt)
    }
    handleDecrement = () => {
        this.props.DecrementQtty(this.props.elt.id);
        this.props.tolaldecrement(this.props.elt)
    }
    handleDeleet =()=>{
        this.props.DeleteArticle(this.props.elt)
    }


    render() {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "10px",
                }}
            >
                <div>
                    <Card.Text>
                        <img src={this.props.elt.image} width="190px" />
                        <Card.Title>{this.props.elt.name}</Card.Title>
                        <Card.Text> {this.props.elt.price} $</Card.Text>
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleDeleet}>Delete</Button>
                </div>
                <div style={{ display: "flex" }}>
                    <Button variant="success" onClick={this.handleIncrement} >
                        +
                    </Button>
                    <span style={{ fontSize: "20px" }}>{this.props.elt.qte}</span>
                    <Button variant="danger"  onClick={this.handleDecrement}>
                        -
                    </Button>
                </div>
            </div>
        );
    }
}

export default SigleItem;