
import './App.less';

export default {
  name: 'app',
  render() {
    return <div id="app">
      <img src="./assets/logo.png"/>
      <router-view></router-view>
    </div>;
  },
};
