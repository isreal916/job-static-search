import {useContext} from 'react';
import './Tablet.scss';
import { Filter } from '..';
import { stateContext } from '../../App';

export interface TabletProps {
  prop: Array<string>;
}

export function Tablet({prop}: TabletProps) {
  const stateContexts  = useContext(stateContext)

  const onFilter =(type:string)=>{
    stateContexts.appDispatch({type:'deleteFilter',payload:type})
  }
  const onClear =()=>{
    stateContexts.appDispatch({type:'clearFilter'})
  }
  return( 
  <div className='Tablet'>
    <div className="Tablet_filter">
    { prop.map(prop => <Filter type={prop} key={prop} onFilter={onFilter} /> )}

    </div>
   <div className="Tablet_clear" onClick={onClear}>Clear</div>
  </div>
  );
}
