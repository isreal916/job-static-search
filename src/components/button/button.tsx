
import  './button.scss';

export interface buttonProps {
  prop: 'featured' |'new',
}

export  function Button({prop = 'new' }: buttonProps) {
  const name:string = (prop === 'new')? 'NEW!' : 'FEATURED';
  return (
  <button className={prop} id='button'>{name.toUpperCase()}</button>
  )
}
