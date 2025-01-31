import "./App.scss";
import { Panel, Header, Tablet } from "./components";
import { data } from "./data";
import { useReducer, createContext } from "react";
import { stateType, Action } from "./type";
// @ts-ignore
type contextType = {
  appDispatch: Function;
  state: stateType;
};
export const stateContext = createContext<contextType | null>(null);
function reducer(state: stateType, action: Action): stateType {
  switch (action.type) {
    case "addtoFilter":
<<<<<<< HEAD
      const payload =
        action.payload === false || state.filter.includes(action.payload)
          ? null
          : action.payload;

      if (payload === null) {
        console.error("null value skipped");
      }

      let filteredData = state.data;

      if (payload !== null && payload !== false) {
        filteredData = filteredData.filter((item) =>
=======
      const payload = action.payload === false || state.filter.includes(action.payload)
      ? null
      : action.payload;
    
    if (payload === null) {
      console.error("null value skipped");
    }
    
    let filteredData = state.data;
    
    if (payload !== null && payload !== false) {
      filteredData = filteredData
        .filter((item) =>
>>>>>>> 17af74750ee33ce37c6839f2f4328bb92cd37478
          [...state.filter, payload].every((lang) =>
            item.languages
              .concat(item.tools, item.level, item.role)
              .includes(lang)
          )
        );
<<<<<<< HEAD
      }

      console.log([...state.filter, payload]);

      return {
        ...state,
        filter:
          payload === null || payload === false
            ? [...state.filter]
            : [...state.filter, payload],
        data: filteredData,
      };
=======
    }
    
    console.log([...state.filter, payload]);
    
    return {
      ...state,
      filter: payload === null || payload === false ? [...state.filter] : [...state.filter, payload],
      data: filteredData,
    };
    
>>>>>>> 17af74750ee33ce37c6839f2f4328bb92cd37478

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
      return { ...state, filter: [], data: data };
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

<<<<<<< HEAD
=======
  // const desiredLanguages = state.filter; // Add the languages you want to filter by

  // const filteredData = state.data.filter(item => {
  //   return desiredLanguages.every(lang => item.languages.concat(item.level,item.role,item.tools).includes(lang) );
  // });

  // console.log(filteredData);

>>>>>>> 17af74750ee33ce37c6839f2f4328bb92cd37478
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
