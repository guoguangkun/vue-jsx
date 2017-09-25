
import './App.less';
import vueLogo from './assets/logo.png';

export default {
  name: 'app',
  render() {
    return <div id="app">
      <img src={vueLogo}/>
      <router-view></router-view>
    </div>;
  },
};
