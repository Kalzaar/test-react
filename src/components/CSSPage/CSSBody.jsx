import './CSSBodyS.scss'
import Dice from './CSS Components/DiceRoll/DiceRoll';
import {
    CSSWELCOME,
    CSSWELCOME2
} from '../../constants/langauge'

// function Rabbit() {
//   return (
//     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_n-Lgxk2amm5SetCkh8fFXjd8q8_CI6tj2arYKx4t0jgojMi5gAR53WysTAvW_UcKi0&usqp=CAU" alt="Rabbit" className="rabbit" style={{
//       position: 'absolute',
//       animation: 'hop 2s ease-in-out infinite',
//       width: '50px',
//       height: '50px',
//     }} />
//   );
// }

function CSSBody() {
  return (
    <div className='CSSPage'>
        <div className='container spacing'>
            <h1>{CSSWELCOME}</h1>
            <p>{CSSWELCOME2}</p>
            <div className='animation project_1'>
              <div class='rabbit-container rabbit-container--one'>
                <div class='rabbit rabbit--one'></div>
              </div>
              
            </div>
            <div className='animation project_2 cube-container'>
              <div className='circle'>
              </div>
              <div className="cube">
                <div className="face front">Front</div>
                <div className="face back">Back</div>
                <div className="face top">Top</div>
                <div className="face bottom">Bottom</div>
                <div className="face left">Left</div>
                <div className="face right">Right</div>
              </div>
              <div className='triangle'>
              </div>
            </div>
            <div >
              <div className='animation dice-background'>
                <Dice />
              </div>
            </div>

        </div>
    </div>
  );
}



export default CSSBody;