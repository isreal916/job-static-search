import { panelProps } from "./components/panel"
export type stateType =  {
  filter :string[] ,
  data:panelProps,
}
export type Action = { type: 'addtoFilter'; payload: any } | { type: 'updateData'; payload: panelProps }| { type: 'deleteFilter'; payload: any } |{ type: 'clearFilter' } ;
