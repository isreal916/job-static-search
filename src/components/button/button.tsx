
import  './button.scss';

export interface buttonProps {
  prop: 'featured' |'new',
}

<<<<<<< HEAD
export  function Button({prop}: buttonProps) {
=======
export  function Button({prop = 'new' }: buttonProps) {
>>>>>>> 17af74750ee33ce37c6839f2f4328bb92cd37478
  const name:string = (prop === 'new')? 'NEW!' : 'FEATURED';
  return (
  <button className={prop} id='button'>{name.toUpperCase()}</button>
  )
}
