import { useContext } from 'react';
import Button from './Button';
import ModeContext from '../context/ModeContext'

function Toggle() {
  
  const ctx = useContext(ModeContext); 

  const buttonLabel = ctx.isDark ? '⚫' :'⬜';
  return (
  <span>
    Toggle Theme:<Button label={buttonLabel} onClick={ctx.handlerToggle} />
  </span>
  )
}
export default Toggle;