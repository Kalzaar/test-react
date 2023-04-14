import './BodyS.scss'
import { testText } from '../../../styles/textvariables';

import {
  WELCOME_TEXT,
} from '../../../constants/langauge';

function Body({
    testProp,
}) {
  return (
    <div className='Body'>
        <h2>{WELCOME_TEXT}</h2>

        <div>
          <p>{testText}</p>
        </div>
    </div>
  );
}



export default Body;