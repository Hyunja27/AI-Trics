import { styled } from "@stitches/react";
import { useState } from "react";
import data from './data.json';

export default function SearchBar() {
  const [autoComplete, setAutoComplete] = useState<string[]>([]);
  let tmpList: string[] = []

  const handleText = (e:any) => {
    tmpList = [];
    setAutoComplete(tmpList);
    data.forEach(function (elem) {
      if (e.target.value && elem.name.startsWith(e.target.value)) {
        tmpList.push(elem.name);
        setAutoComplete(tmpList);
      }
    });
  }

  return (
      <SearchBarContainer>
        <input type="text" onChange={handleText} />
        { autoComplete && (
          <DropDownList>
            {(autoComplete.map((elem) => {
              return (
                <DropDownItem>
                  {elem}
                </DropDownItem>
              );
            }))}
          </DropDownList>
        )}
      </SearchBarContainer>

  );
}

const SearchBarContainer = styled("div", {
  height: "100%",
  width: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const DropDownItem = styled("li", {
});

const DropDownList = styled("ul", {
  height: "5px",
  width: "100%",
  display: "block",
  margin: "0 auto",
  padding: "8px 0",
  backgroundColor: "white",
  border: "1px solid rgba(0, 0, 0, 0.3)",
  boxShadow: "0 10px 10px rgb(0, 0, 0, 0.3)",
  zIndex: "3"
});
