import './style.css';
import GetApi from './component/getApi';

function App() {

  return (
    <div className='container'>
      <div className="appContentWrap">
        <div className='btns'>
          <div className='btn1'><a>weather</a></div>
          <div className='btn2'><a>btn2</a></div>
          <div className='btn3'><a>btn3</a></div>
        </div>
        <GetApi/>
      </div>
    </div>
  );
}

export default App;


