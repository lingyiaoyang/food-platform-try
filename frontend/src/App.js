//import component
import Navbar from './component/layout/navbar/Navbar';
import Heropanel from './component/layout/Heropanel/Heropanel';
import Container from './component/layout/Container/Container';
import Footer from './component/layout/Footer/Footer';
import About from './component/layout/About/About.js';
import Contact from './component/layout/Contact/Contact';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './app.css';
const data = [
  {
    id: 1,
    name: '谢宏利',
    age: 17,
    img: '/images/hongli.jpg',
    text: '下巴很尖，跟陈之内很像，他的下巴是可以突破天际的下巴'
  },
  {
    id: 2,
    name: '李杰乐',
    age: 17,
    img: '/images/jiele.jpg',
    text: '有一点肥肥的，喜欢偷吃别人的burger'
  },
  {
    id: 3,
    name: '欧利毅',
    age: 17,
    img: '/images/liyi.jpg',
    text: '已经看透人生了，喜欢乳华，名言是：“反正都要辱华，为何不早点乳呢？”'
  },
  {
    id: 4,
    name: '蓝于翔',
    age: 17,
    img: '/images/yuxiang.jpg',
    text: '瘦巴巴，牙齿黑黑，数学很强，人称“蓝教授”'
  },
  {
    id: 5,
    name: '陈志远',
    age: 17,
    img: '/images/zhiyuan.jpg',
    text: '头发空空，没有头发，给他十年也长不出头发'
  },
  {
    id: 6,
    name: '郑子昇',
    age: 17,
    img: '/images/zisheng.jpg',
    text: '头脑凹一粒洞，戴不到耳机，智商跟头的洞一样少了一点'
  }
];

const App = () => {
  const container = data.map((data) => {
    return <Container key={data.id} {...data} />;
  });

  return (
    <Router>
      <Navbar className='navbar-header' />
      <Heropanel className='heropanel-header' />
      <Switch>
        <Route exact path='/'>
          <div className='card-header'>{container}</div>
        </Route>
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
