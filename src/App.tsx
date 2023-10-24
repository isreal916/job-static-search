import "./App.scss";
import { Panel, Header, Tablet } from "./components";
import { data } from "./data";
import { useReducer, createContext } from "react";
import { stateType, Action } from "./type";
// @ts-ignore
export const stateContext = createContext(null);
function reducer(state: stateType, action: Action): stateType {
  switch (action.type) {
    // Handle different actions and update the state accordingly
    case "addtoFilter":
      const payload = state.filter.includes(action.payload)
        ? false
        : action.payload;
        let filteredData;
        if(payload !== false){
          filteredData =   state.data.filter((item) => {
            return [...state.filter, payload].every((lang) =>
              item.languages
                .concat(item.tools, item.level, item.role)
                .includes(lang)
            );
          });
        }
      
      console.log([...state.filter, payload]);

      return {
        ...state,
        filter: [...state.filter, payload],
        data: filteredData,
      };

    case "deleteFilter":
      const newFilter = state.filter.filter((item) => item !== action.payload);
      console.log(newFilter);
      
      const filteredDatas = data.filter((item) => {
        return newFilter.every((lang) =>
          item.languages
            .concat(item.tools, item.level, item.role)
            .includes(lang)
        );
      });
      console.log(filteredDatas);

      return { ...state, filter: newFilter, data: filteredDatas };

    case "clearFilter":
      return { ...state, filter: [] ,data:data};
    default:
      return state;
  }
}

function App() {
  const initialState: stateType = {
    filter: [],
    data: data,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // const desiredLanguages = state.filter; // Add the languages you want to filter by

  // const filteredData = state.data.filter(item => {
  //   return desiredLanguages.every(lang => item.languages.concat(item.level,item.role,item.tools).includes(lang) );
  // });

  // console.log(filteredData);

  return (
    <>
      <stateContext.Provider value={{ state: state, appDispatch: dispatch }}>
        <Header />
        {state.filter.length === 0 ? "" : <Tablet prop={state.filter} />}
        <div className="body">
          {state.data.map((item) => {
            return <Panel key={item.id} data={item} />;
          })}
        </div>
      </stateContext.Provider>
    </>
  );
}

export default App;
