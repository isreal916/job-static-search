import { stateContext } from "../../App";
import { Button } from "../button/button";
import "./panel.scss";
import { useContext } from "react";
export interface panelProps {
  data?: {
    id?: number;
    company?: string;
    logo?: string;
    new?: boolean;
    featured?: boolean;
    position?: string;
    role?: string;
    level?: string;
    postedAt?: string;
    contract?: string;
    location?: string;
    languages?: Array<string>;
    tools?: Array<string>;
  } | false;
}

export function Panel({ data }: panelProps) {
  const stateContexts = useContext(stateContext)

  const buttonarray = data.languages.concat(data.level,data.role,data.tools)
  return (
    <div className="panel">
      <div className="panel_img">
        <img src={data.logo} alt="imgs" className="panel_img" />
      </div>
      <div className="panel_details">
        <div className="panel_details_header">
          <p>{data.company}</p>
          {data.featured && <Button prop="featured" />}
          {data.new && <Button prop="new" />}
        </div>
        <h4>{data.position}</h4>
        <ul>
          <li>{data.postedAt}</li>
          <li>{data.contract}</li>
          <li>{data.location}</li>
        </ul>
      </div>
      <div className="panel_button_group">
      {buttonarray &&
        buttonarray.map((data) => {
          return <button className='button' key={data} onClick={()=>{stateContexts.appDispatch({type:'addtoFilter',payload:data})}}>{data}</button>;
        })
       
        }
      </div>
     
    </div>
  );
}
