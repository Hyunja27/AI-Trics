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
        <InputZone type="text" onChange={handleText} />
        { autoComplete.length === 0 ? null : (
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
  height: "100vh",
  width: "100vw",
  margin: "auto",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const InputZone = styled("input", {
  height: "2em",
  width: "40em",
});

const DropDownList = styled("ul", {
  height: "2em",
  display: "absolute",
  position: "relative",
  backgroundColor: "white",
  border: "1px solid rgba(0, 0, 0, 0.3)",
  boxShadow: "0 10px 10px rgb(0, 0, 0, 0.3)",
  zIndex: "3"
});

const DropDownItem = styled("li", {
});
