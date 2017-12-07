### React-ES5-To-ES6-Checklist [Public](https://www.npmjs.com/package/React-ES5-To-ES6-Checklist#quick-links)

- [require => import](#require-to-import)
- [createClass => extends React.Component](#createClass-to-extends)
- [module.exports => export default](#module-exports-to-export-default)
- [name: function() => name()](#functions)
- [getDefaultProps and propTypes](#getDefaultProps-and-propTypes)
- [getInitialState](#getInitialState)
- [Destructuring & spread attributes](#Destructuring-and-spread-attributes)

#### require-to-import

ES5
```
//ES5 
var React = require("react");  
var PropTypes = React.PropTypes;
```
ES6
```
import React, { Component, PropTypes } from 'react';
```

#### createClass-to-extends

ES5
```
var Mycomponent = React.createClass({
  render: function() {
    return (
      <div>ES5</div>
    );
  },
});
```
ES6
```
class Mycomponent extends React.Component {
  render() {
    return (
      <div>ES6</div>
    );
  }
}
```

#### module-exports-to-export-default

ES5
```
var Mycomponent = React.createClass({
  render: function() {
    return (
      <div>ES5</div>
    );
  },
});
 
module.exports = Mycomponent;
``` 
ES6
```
export default class Mycomponent extends React.Component {
  render() {
    return (
      <div>ES6</div>
    );
  }
}
```

#### functions

ES5
```
var Mycomponent = React.createClass({
  componentWillMount: function(){
 
  },
  render: function() {
    return (
      <div>ES5</div>
    );
  },
});
 
module.exports = Mycomponent;
```
ES6
```
export default class Mycomponent extends React.Component {
  componentWillMount() {
 
  }
  render() {
    return (
      <div>ES6</div>
    );
  }
}
```
#### getDefaultProps-and-propTypes

ES5
```
var Video = React.createClass({
    getDefaultProps: function() {
        return {
            autoPlay: false,
            maxLoops: 10,
        };
    },
    propTypes: {
        autoPlay: React.PropTypes.bool.isRequired,
        maxLoops: React.PropTypes.number.isRequired,
        posterFrameSrc: React.PropTypes.string.isRequired,
        videoSrc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            <View />
        );
    },
});
```
ES6
```
class Video extends React.Component {
  render() {
      return (
          <View />
      );
  }
}
Video.defaultProps = {
    autoPlay: false,
    maxLoops: 10,
};
Video.propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
};
```
ES7:
```
class Video extends React.Component {
  static defaultProps = {
    autoPlay: false,
    maxLoops: 10,
  }
  static propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
  }
  state = {
    loopsRemaining: this.props.maxLoops,
  }
}
```

#### getInitialState

ES5
```
var Header = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.title
    };
  },
});
```
ES6
```
export default class Header extends Component {
  constructor(props) {
    super(props);
      this.state = {
        title: props.title
      };
    }
}
```
ES7
```
export default class Header extends Component {
  state = {
    title: this.props.title
  };
    
  // followed by constructor... 
}
```

#### Destructuring-and-spread-attributes
```
class AutoloadingPostsGrid extends React.Component {
  render() {
    var {
      className,
      ...others,  // contains all properties of this.props except for className 
    } = this.props;
    return (
      <div className={className}>
        <PostsGrid {...others} />
        <button onClick={this.handleLoadMoreClick}>Load more</button>
      </div>
    );
  }
}
```