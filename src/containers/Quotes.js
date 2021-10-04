import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

  renderQuotes = () => {
    return (
      this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} remove={this.props.remove} upvote={this.props.upvote} downvote={this.props.downvote} />)
    )
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.renderQuotes()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(removeQuote(id)),
    upvote: id => dispatch(upvoteQuote(id)),
    downvote: id => dispatch(downvoteQuote(id))
  }
}
//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
