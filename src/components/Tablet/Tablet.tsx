import {useContext, usestate} from 'react';
import './Tablet.scss';
import { Filter } from '..';
import { stateContext } from '../../App';
import { stateType } from '../../type';

export interface TabletProps {
  prop: Array<string>;
}
type contextType = {
  appDispatch:Function,
  state:stateType,

}
export function Tablet({prop}: TabletProps) {
  const stateContexts  = useContext< |null>(stateContext)

  const onFilter =(type:string)=>{
    stateContexts.appDispatch({type:'deleteFilter',payload:type})
  }
  const onClear =()=>{
    stateContexts.appDispatch({type:'clearFilter'})
  }
  return( 
  <div className='Tablet'>
    <div className="Tablet_filter">
    { prop.map(prop => <Filter type={prop} onFilter={onFilter} /> )}

    </div>
   <div className="Tablet_clear" onClick={onClear}>Clear</div>
  </div>
  );
}
