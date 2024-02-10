import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState();
  const [showOTPForm, setShowOTPForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP sent on", number);
    setShowOTPForm(true);
  };

  const handlePhoneSUbmit = (e) => {
    setNumber(e.target.value);
  };

  return (
    <>
      <div className="">
        {!showOTPForm ? (
          <>
            <h1>Enter your number</h1>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={number}
                onChange={handlePhoneSUbmit}
              />
              <button type="submit">Send OTP</button>
            </form>
          </>
        ) : (
          <div>
            <h1>Enter OTP</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
