
var React = require('react');  
var ReactDOM = require('react-dom');
var classNames = require('classnames');

var Btnbox=React.createClass({
  getInitialState:function(){
    return {clicker: true};
  },
  change:function(e){
    if (!(e.target === this.refs.btnbox)) {
      this.setState({clicker:!this.state.clicker});
    }
  },
  render:function(){
    var classes = classNames({
      'off':!this.state.clicker,
      'on':this.state.clicker,
      'btner':true
    });
    return(
      <div ref='btnbox' onClick={this.change} className={classes}> 
       <Btner/>
      </div>
    );
  }
});

var Btner=React.createClass({
  getInitialState:function(){
    return {clicker: true,done: false};
  },
  change:function(){
    this.setState({clicker:!this.state.clicker,done:true});
  },
  render:function(){
    var ballclasses = classNames({
      'on-slide':this.state.clicker&&this.state.done,
      'off-slide':!this.state.clicker&&this.state.done,
      'btn':true
    });
    return(
      <div onClick={this.change} className={ballclasses}> 
      </div>
    );
  }
});

ReactDOM.render(
  <Btnbox/>,
  document.getElementById('botton')
);