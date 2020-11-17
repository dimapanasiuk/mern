import React, { useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Button } from "reactstrap";

const Places = () => {
  const [rows, setRows] = useState([]);

  return (
    <div className="App">
      <GooglePlacesAutocomplete
        placeholder="Type in an address"
        inputStyle={{
          height: 40,
          fontSize: 28,
        }}
        suggestionsStyles={{
          container: {
            padding: 16,
            background: "#efefef",
          },
          suggestion: {
            background: "#eee",
            cursor: "pointer",
          },
          suggestionActive: {
            background: "#bbb",
          },
        }}
        onSelect={(result) => {
          // eslint-disable-next-line camelcase
          const { description, place_id } = result;

          setRows([{ description, place_id }, ...rows]);
        }}
      />
      <br />

      <div
        style={{
          textAlign: "left",
        }}
      >
        {rows.map((row) => (
          <div key={row.place_id} style={{ padding: "8px 0" }}>
            <div style={{ fontSize: 12, color: "#bbb" }}>{row.description}</div>
            <div>
              {row.place_id}&nbsp;
              <CopyToClipboard text={row.place_id}>
                <Button>Copy</Button>
              </CopyToClipboard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
