var React = require('react-native');
var Welcome = require('./Welcome');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;

var styles = React.StyleSheet.create({
  container: {
      flex: 1
  }
});

class FacebookLogin extends React.Component {
  

  render() {
    return (
      <React.NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Welcome',
        component: Welcome,
      }}/>
    );
  }
};


AppRegistry.registerComponent('FacebookLogin', () => FacebookLogin);
