import './HomeS.scss'
import { testText } from '../../styles/textvariables';

import {
  WELCOME_TEXT,
} from '../../constants/langauge'

function Home({
    testProp,
}) {
  return (
    <div className='Home'>
        <h2>{WELCOME_TEXT}</h2>
        
        <div>
          <p>{testText}</p>
        </div>

        <div className='boxes'>
          <div className='box'></div>
          <div className='box green'></div>
          <div className='box'></div>
          <div className='box'></div>
          <div className='box'></div>
        </div>
    </div>
  );
}



export default Home;