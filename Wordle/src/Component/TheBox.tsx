import "./Box.css";

import { Box } from "@primer/react";
import { TextInput } from "@primer/react";

function TheBox() {
  return (
    <>
      <div className="MainBox">
        <div className="InnerBox">
          <input type="text" className="Box1" /> <input type="text" />{" "}
          <input type="text" /> <input type="text" /> <input type="text" />
        </div>
        <div className="InnerBox">
          <input type="text" /> <input type="text" /> <input type="text" />{" "}
          <input type="text" /> <input type="text" />
        </div>
        <div className="InnerBox">
          <input type="text" /> <input type="text" /> <input type="text" />{" "}
          <input type="text" /> <input type="text" />
        </div>
        <div className="InnerBox">
          <input type="text" /> <input type="text" /> <input type="text" />{" "}
          <input type="text" /> <input type="text" />
        </div>
        <div className="InnerBox">
          <input type="text" /> <input type="text" /> <input type="text" />{" "}
          <input type="text" /> <input type="text" />
        </div>
      </div>

      <>
        <div className="MainBox">
          <TextInput
            aria-label="Zipcode"
            name="zipcode"
            placeholder="Zip"
            autoComplete="postal-code"
          />

          <TextInput
            aria-label="Zipcode"
            name="zipcode"
            placeholder="Zip"
            autoComplete="postal-code"
          />
        </div>
      </>
    </>
  );
}

export default TheBox;
