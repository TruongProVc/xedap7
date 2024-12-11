
import './App.css';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Content from './Component/Content/Content';
import Slidebar from './Component/Slidebar/Sidebar';


//Import plugins

// import './plugins/aos.min.css'

// 
function App() {
  return (
   
 <div>
    <Header/>
    {/* 
    */}
    <Slidebar/>
     <Content/>
    <Footer/>
 </div>
  );
}

export default App;
