import './filter.scss';
import { FaXmark } from 'react-icons/fa6';

export interface FilterProps {
<<<<<<< HEAD
  type?: string ; 
=======
  type?: string ; // Change the type to string or appropriate data type
>>>>>>> 17af74750ee33ce37c6839f2f4328bb92cd37478
  onFilter: (type:any) => void;
}

export function Filter({ type, onFilter }: FilterProps) {
  if(type === null){
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
