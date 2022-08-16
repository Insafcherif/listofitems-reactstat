import React, { Component } from 'react';
import "./App.css";
import ListOfItems from './components/ListOfItems';

class App extends Component {
  state = {
    articles: [{
      id: 0,
      name: "pc",
      price: 150,
      qte: 0,
      image:
        "https://www.tunisianet.com.tn/134151-large/pc-portable-lenovo-ideapad-l340-15irh-gaming-i5-9e-gen-8-go-sac-a-dos-lenovo-offert.jpg",
    },
    {
      id: 1,
      name: "ipod",
      price: 20,
      qte: 0,
      image:
        "https://i.etsystatic.com/19007236/r/il/dd3a32/2133570822/il_fullxfull.2133570822_qkhj.jpg",
    },
    {
      id: 2,
      name: "smartphone",
      price: 100,
      qte: 0,
      image:
        "https://www.mega.tn/assets/uploads/img/pr_telephonie_mobile/1618084983_555.jpg",
    },
    ], sum: 0
  };

  IncrementQtty = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id === id) {
          return { ...elt, qte: elt.qte + 1 };
        }
        else {
          return elt;
        };
      })
    })
  }

  DecrementQtty = (id) => {
    this.setState({
      articles: this.state.articles.map((elt) => {
        if (elt.id === id && elt.qte > 0) {
          return { ...elt, qte: elt.qte - 1 };
        }
        else {
          return elt;
        };
      })
    })
  };
  DeleteArticle = (article) => {
    this.setState({ articles: this.state.articles.filter((elt) => elt.id !== article.id),
      sum: this.state.sum - article.qte * article.price, })
  }
  handletolalIncrement = (article) => {
    this.setState({ sum: this.state.sum + article.price })
  }
  tolaldecrement = (article) => {
    if (this.state.sum > 0|| article.qte > 0){
      this.setState({ sum: this.state.sum - article.price });
    } 
  };
  render() {
    const { articles, sum } = this.state
    return (
      <div className='App'>
        <ListOfItems articles={articles}
          sum={sum}
          IncrementQtty={this.IncrementQtty}
          DecrementQtty={this.DecrementQtty}
          DeleteArticle={this.DeleteArticle}
          handletolalIncrement={this.handletolalIncrement}
          tolaldecrement={this.tolaldecrement} />
      </div>
    );
  }
}

export default App;