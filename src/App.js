import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addCustomerAction } from "./store/customerReducer";
import { removeCustomerAction } from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div style={{ fontSize: "3rem" }}>Баланс: {cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять co счетa
        </button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => addCash(Number(prompt()))}>
          Удалить клиента
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: "5px",
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fornSize: "2rem", marginTop: "1rem" }}>
          Клиенты отсуствуют!
        </div>
      )}
    </div>
  );
}

export default App;
