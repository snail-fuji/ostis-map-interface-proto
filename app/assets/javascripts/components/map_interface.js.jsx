var MapInterface = React.createClass({
  propTypes: {
    objects: React.PropTypes.array
  },

  getInitialState: function() {
    return {chosen: null};
  },

  onListClick: function() {
    this.setState({chosen: null})
  },

  onClick: function(object) {
    this.setState({chosen: object})
  },

  createViewer: function() {
    if (this.state.chosen)
      return <Article object={this.state.chosen} onListClick={this.onListClick}/>
    else
      return <List objects={this.props.objects} onArticleClick={this.onClick}/>
  },

  render: function() {
    return (
      <div>
        <Map objects={this.props.objects} chosen={this.state.chosen} onMarkerClick={this.onClick}/>
        <div className="row" style={{margin: "10px"}}>
          <div className="col-sm-4 well">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Задайте вопрос"></input>
            </div>
            <Timeline/>
            {this.createViewer()}
          </div>
        </div>
      </div>
    );
  }
});