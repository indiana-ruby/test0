
var React = require('react');  
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var classNames = require('classnames');

      var data = [
        {author: "Pete Hunt", text: "This is one comment"},
        {author: "Jordan Walke", text: "This is *another* comment"}
      ];

      var lala=10;

      var Datamaker=React.createClass({
        render: function(){
          return(
            <Datareader data={this.props.data} />
          );
        }
      });

      var Datareader=React.createClass({
        render: function(){
        
          var Dataman = this.props.data.map(function(data,i){
            return(
              <h1 key={i}>
                {data.author}{data.text}
              </h1>
            );
          });
          return <div>{Dataman}</div>;
        }
      });

      ReactDOM.render(
        <Datamaker data={data} />,
        document.getElementById('dataer')
      );

      var Test=React.createClass({
        componentWillReceiveProps:function(){
          alert("props更改之后"+lala);
        },
        lalaer:function(){
          setInterval(function(){lala=lala+1},100);
          console.log("lala="+lala);
        },
        hoverist:function(){
          alert('dom加载完成后，xxx');
        },
        componentDidMount: function() {
          this.refs.bbq.addEventListener('click', this.hoverist);
        },
        render: function(){
          return(
            <h1 ref="bbq" onClick={this.lalaer}>we love {this.props.name}</h1>
          );
        }
      });

      ReactDOM.render(
        <Test name={lala} />,
        document.getElementById('example')
      );

      setTimeout(function(){
        ReactDOM.render(
          <Test name={lala} />,
          document.getElementById('example2')
        );
      },10000);

      var Btner=React.createClass({
        getInitialState:function(){
          return {liked: true,words: ['a','b','c']};
        },
        change:function(){
          this.setState({liked:!this.state.liked});
        },
        dong:function(){
          var newer=this.state.words.concat([prompt('insert me please!!')]);
          this.setState({words:newer});
        },
        componentDidUpdate:function(){
          alert("dom更改之后");
        },
        componentWillUpdate:function(){
          alert("关闭之后，state更改");
        },
        shouldComponentUpdate:function(){
          alert("state改变后");
          return true;
        },
        render:function(){
          var text= this.state.liked?'fuck me':'suck me';
          var classes = classNames({
            'pink':this.props.color == 'pink',
            'bebig':!this.state.liked
          });
          var items = this.state.words.map(function(item, i) {
            return (
              <div key={item} onClick={this.dong} className={classes}>
                {item}
              </div>
            );
          }.bind(this));
          return(
            <div onClick={this.change}>{text}        
              <ReactCSSTransitionGroup transitionName="example">
                {items}
              </ReactCSSTransitionGroup>
            </div>
          );
        }
      });
      ReactDOM.render(
        <Btner color="pink"/>,
        document.getElementById('btner')
      );

      var Biao=React.createClass({
        getInitialState:function(){
          return {biaoer:'hello'};
        },
        changword:function(){
          this.setState({biaoer:event.target.value});
        },
        render: function() {
          var biaoer=this.state.biaoer;
          return <input type="text" value={biaoer} onChange={this.changword}/>;
        }
      })

      ReactDOM.render(
      <Biao/>,
      document.getElementById('biao')
      );

      var CommentBox = React.createClass({
        getInitialState: function() {
          return {data: []};
        },
        componentDidMount: function() {
          $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
              this.setState({data: data[0].comments_url});
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
        },
        render: function() {
          return (
            <div className="commentBox">
              <h1>{this.state.data}</h1>
            </div>
          );
        }
      });

      ReactDOM.render(
        <CommentBox url='https://api.github.com/users/octocat/gists'/>,
        document.getElementById('ajaxer')
      );