//import component
import Navbar from './component/layout/navbar/Navbar';
import Heropanel from './component/layout/Heropanel/Heropanel';
import Container from './component/layout/Container/Container';
import Footer from './component/layout/Footer/Footer';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './app.css';
const data = [
    { id: 1, name: 'lingyiaoyang', age: 5, img: '/images/download.jpg' },
    { id: 2, name: 'zisheng', age: 6, img: '/images/download (1).jpg' },
    { id: 3, name: 'hongli', age: 7, img: '/images/download.jpg' },
    { id: 4, name: 'ah mei', age: 8, img: '/images/download23.jpg' },
    { id: 5, name: 'cuiyi', age: 9, img: '/images/download (1).jpg' },
  ];

  const App = () => {
  

  
  const container = data.map((data) => {
    return <Container key={data.id} {...data} />;
  });
 
  
  
  return (
    <Router>
    <>
      <Navbar className='navbar-header'/>
      <Switch>
      <Heropanel className='heropanel-header'/>
      </Switch>
      <Route path='/'>
      <div className='card-header'>{container}</div>
      </Route>
       <Footer />
    </>
    </Router>
  );
};

export default App;
