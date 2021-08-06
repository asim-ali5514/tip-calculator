import "./App.css";
import { TipButton } from "./TipButton";
import { CustomTip } from "./CustomTip";
import { useState, useContext, createContext } from "react";

export const billContext = createContext();
export function BillProvider({ children }) {
  var [bill, setBill] = useState(0);
  var [people, setPeople] = useState(0);
  var [tipAmount, SettipAmount] = useState("0.00");
  var [totalPerson, SettotalPerson] = useState("0.00");
  return (
    <billContext.Provider
      value={{
        bill,
        setBill,
        people,
        setPeople,
        tipAmount,
        SettipAmount,
        totalPerson,
        SettotalPerson,
      }}
    >
      {children}
    </billContext.Provider>
  );
}

var people_input_styles = {
  marginTop: 10,
  width: 355,
  height: 35,
  border: "3px solid transparent",
  outline: "none",
  backgroundColor: "hsl(189, 41%, 93%)",
  textAlign: "right",
  fontSize: 24,
  color: "hsl(183, 100%, 15%)",
  fontWeight: 600,
  fontFamily: "Space Mono, monospace,",
  backgroundImage: 'url("icon-person.svg")',
  backgroundRepeat: "no-repeat",
  backgroundPosition: "3%",
  cursor: "pointer",
};

var zero_text = {
  fontWeight: 600,
  color: 'hsl(13, 31%, 57%)',
  marginLeft: '20%',
  display: 'none',
}
function App() {
  var { tipAmount, SettipAmount } = useContext(billContext);
  var { bill, setBill } = useContext(billContext);
  var { people, setPeople } = useContext(billContext);
  var { totalPerson, SettotalPerson } = useContext(billContext);

  const per_person_styles = {
    color: "hsl(186, 14%, 43%)",
    fontWeight: 600,
    fontSize: "16px",
  };
  const reset_input_styles = () => {
    people_input_styles = {
      marginTop: 10,
      width: 355,
      height: 35,
      border: "3px solid transparent",
      outline: "none",
      backgroundColor: "hsl(189, 41%, 93%)",
      textAlign: "right",
      fontSize: 24,
      color: "hsl(183, 100%, 15%)",
      fontWeight: 600,
      fontFamily: "Space Mono, monospace,",
      backgroundImage: 'url("icon-person.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "3%",
      cursor: "pointer",
    };
    reset_zero_text()
  };
  const change_input_styles = () => {
    people_input_styles = {
      marginTop: 10,
      width: 355,
      height: 35,
      outline: "none",
      backgroundColor: "hsl(189, 41%, 93%)",
      textAlign: "right",
      fontSize: 24,
      color: "hsl(183, 100%, 15%)",
      fontWeight: 600,
      backgroundImage: 'url("icon-person.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "3%",
      cursor: "pointer",
      border: "3px solid hsl(13, 31%, 57%)",
      borderRadius: "5px",
    };
    show_zero_text()
  };

  const people_input_focus = () => {
    people_input_styles = {
      marginTop: 10,
      width: 355,
      height: 35,
      border: "3px solid hsl(172, 67%, 45%)",
      outline: "none",
      backgroundColor: "hsl(189, 41%, 93%)",
      textAlign: "right",
      fontSize: 24,
      color: "hsl(183, 100%, 15%)",
      fontWeight: 600,
      fontFamily: "Space Mono, monospace,",
      backgroundImage: 'url("icon-person.svg")',
      backgroundRepeat: "no-repeat",
      backgroundPosition: "3%",
      cursor: "pointer",
    }
    console.log('bruh')
  }

  const show_zero_text = () => {
    zero_text = {
      fontWeight: 600,
      color: 'hsl(13, 31%, 57%)',
      marginLeft: '20%',
      display: 'initial',
    }
  }

  const reset_zero_text = () => {
    zero_text = {
      fontWeight: 600,
      color: 'hsl(13, 31%, 57%)',
      marginLeft: '20%',
      display: 'none',
    }
  }
  const reset = () => {
    setBill((bill = ""));
    setPeople((people = ""));
    SettotalPerson((totalPerson = "0.00"));
    SettipAmount((tipAmount = "0.00"));
  };
  return (
    <div className="App">
      <div className="title">
        <img src="logo (2).svg" alt="logo" />
      </div>
      <div className="main_container">
        <div className="main">
          <div className="first_half">
            <div className="bill">
              Bill
              <div className="bill_enter">
                <input
                  type="number"
                  className="bill_input"
                  placeholder="0"
                  min="0"
                  onChange={(e) =>
                    setBill((bill = e.target.value))
                  }
                  value={bill}
                />
              </div>
            </div>
            <div className="select_tip">Select Tip %</div>
            <div className="buttons_container">
              <TipButton title="5" />
              <TipButton title="10" />
              <TipButton title="15" />
              <TipButton title="25" />
              <TipButton title="50" />
              <CustomTip />
            </div>
            <div className="people_container">
              <div className="people_text_container">
                <div className="number_of_people">Number of People</div>
                <div className="no_zero" style={zero_text}>Can't be zero </div>
              </div>
              <input
                min='0'
                type="number"
                className="people_input"
                placeholder="0"
                style={people_input_styles}
                value={people}
                onChange={(e) =>
                  setPeople(
                    (people = e.target.value),
                    e.target.value === "0" || e.target.value === 0
                      ? change_input_styles()
                      : reset_input_styles(),
                  )
                }
              />
            </div>
          </div>
          <div className="second_half">
            <div className="data_container">
              <div className="tip_amount_text">
                Tip Amount <br />{" "}
                <span style={per_person_styles}>/ person</span>
              </div>
              <div className="tip_amount">${tipAmount}</div>
              <div className="total_text">
                Total <br /> <span style={per_person_styles}>/ person</span>
              </div>
              <div className="person_amount">${totalPerson}</div>
            </div>
            <button className="reset_button" onClick={() => reset()}>
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
