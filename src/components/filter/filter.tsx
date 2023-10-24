import './filter.scss';
import { FaXmark } from 'react-icons/fa6';

export interface FilterProps {
  type?: string ; // Change the type to string or appropriate data type
  onFilter: (type:any) => void;
}

export function Filter({ type, onFilter }: FilterProps) {
  if(!type){
return false;
  }
  else{
    return (
      <div className="filter">
        <span className="filter__type">{type}</span>
        <button className="filter__remove" onClick={()=>onFilter(type)}>
          <FaXmark />
        </button>
      </div>
    );
  }
 
}
