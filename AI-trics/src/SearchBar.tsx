import { styled } from "@stitches/react";
import { useState } from "react";
import data from './data/data.json';

interface Data {
  id: number;
  name: string;
}

export default function SearchBar() {
  const [autoComplete, setAutoComplete] = useState<Data[]>([]);
  let tmpList: Data[] = []

  const handleText = (e:any) => {
    tmpList = [];
    setAutoComplete(tmpList);
    data.forEach(function (elem) {
      if (e.target.value && elem.name.startsWith(e.target.value)) {
        tmpList.push(elem);
        setAutoComplete(tmpList);
      };
    });
  }

  const handleClick = (e:any) => {
    console.log(e);
  }

  return (
      <PageContainer>
        <SearchBarContainer>
          <InputZone type="text" onChange={handleText} />
          { autoComplete.length === 0 ? null : (
            <DropDownList>
              {(autoComplete.map((elem) => {
                return (
                  <DropDownItem key={elem.id} onClick={handleClick} >
                    {elem.name}
                  </DropDownItem>
                );
              }))}
            </DropDownList>
          )}
        </SearchBarContainer>
      </PageContainer>

  );
}

const PageContainer = styled("div", {
  height: "100vh",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const SearchBarContainer = styled("div", {
});

const InputZone = styled("input", {
  height: "2em",
  width: "40em",
  margin: "0",
  padding: "0",
  fontSize: "1.2em",
  textIndent: "1em",
});

const DropDownList = styled("ul", {
  width: "40em",
  margin: "auto",
  padding: "0",
  position: "absolute",
  backgroundColor: "white",
  border: "1px solid rgba(0, 0, 0, 0.3)",
  boxShadow: "0 10px 10px rgb(0, 0, 0, 0.3)",
  listStyle: "none",
  fontSize: "1.2em",
});

const DropDownItem = styled("li", {
  padding: "0",
  paddingTop: "1em",
  paddingBottom: "1em",
  "&:hover": {
    background: "rgb(0, 0, 0, 0.05)",
    boxShadow: "0 10px 10px rgb(0, 0, 0, 0.3)",
  },
  textIndent: "1em",
});
