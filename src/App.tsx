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
          [...state.filter, payload].every((lang) =>
            item.languages
              .concat(item.tools, item.level, item.role)
              .includes(lang)
          )
        );
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
