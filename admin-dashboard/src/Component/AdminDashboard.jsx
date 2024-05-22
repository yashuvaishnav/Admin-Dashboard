import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export const AdminDashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState("dashboard");

  const columns = [
    { field: "ratingAverage", headerName: "Rating Average", width: 120 },
    { field: "authorName", headerName: "Author name", width: 150 },
    {
      field: "title",
      headerName: "Title",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    { field: "firstPublishYear", headerName: "First Publish Year", width: 130 },
    {
      field: "subject",
      headerName: "Subject",
      type: "string",
      width: 150,
    },
    { field: "authorBirthDate", headerName: "Author Birth Date", width: 120 },
    { field: "authorTopWork", headerName: "Author Top Work", width: 180 },
  ];
  const rows = [
    {
      id: 1,
      title: "Snow",
      authorName: "Jon",
      ratingAverage: 5,
      firstPublishYear: 2012,
      subject: "Math",
      authorBirthDate: Date.now(),
      authorTopWork: "yes",
    },
    {
      id: 2,
      title: "Snow",
      authorName: "Aline",
      ratingAverage: 4,
      firstPublishYear: 2010,
      subject: "Economy",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 3,
      title: "Snow",
      authorName: "Ssm",
      ratingAverage: 2,
      firstPublishYear: 2018,
      subject: "Physics",
      authorBirthDate: Date.now(),
      authorTopWork: "yes",
    },
    {
      id: 4,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 5,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 6,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 7,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 8,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 9,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 10,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 11,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 12,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 13,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 14,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 15,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
    {
      id: 16,
      title: "Snow",
      authorName: "Jullie",
      ratingAverage: 1,
      firstPublishYear: 2015,
      subject: "Scince",
      authorBirthDate: Date.now(),
      authorTopWork: "no",
    },
  ];

  const handleClick = (tab) => {
    setSelected(tab);
  };

  const fetchBooksData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        searchTerm
          ? `https://openlibrary.org/search.json?q=${searchTerm}`
          : "https://openlibrary.org/search.json?q=search+terms"
      );
      if (res.data.docs.length === 0) {
        alert("No book found");
        return;
      }
      console.log(res.data.docs);
      setBooksData(res);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const changeBookData = async () => {
    try {
      const res = await axios.put("", "data");
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooksData();
  }, [searchTerm]);

  // if(isLoading){
  //   return <h1>Loading...</h1>
  // }

  return (
    <MainDiv>
      <LeftSide>
        <div className="header">
          <img
            src="https://image.pitchbook.com/0RTMFsKcFhgnhzwWpdz6hRVf3nk1643023238823_200x200"
            width={"70px"}
            height={"70px"}
            alt=""
          />
          <h2>Nua</h2>
        </div>
        <div className="overview">
          <Button
            selected={selected === "dashboard"}
            onClick={() => {
              handleClick("dashboard");
            }}
          >
            Dashboard
          </Button>
        </div>
        <div className="container">
          <button className="bottom-button">Logout</button>
        </div>
      </LeftSide>
      <RightSide>
        <div className="header">
          <h2>Dashboard</h2>
          <img
            src="https://th.bing.com/th/id/R.65c93fce16c1532b3e15a4a52f3ef7f6?rik=nzRaktT%2fUnQRqw&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2f011.jpg&ehk=gJKh7A8T2u3z4vSqk7O6KLmxjgWQ6OsIxQN3fUiN%2bAM%3d&risl=&pid=ImgRaw&r=0"
            width={"50px"}
            height={"50px"}
            alt="profile"
          />
        </div>
        <div className="searchAndsort">
          <div className="searchAuthor">
            <input
              type="text"
              placeholder="Search By Author"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
          <div className="sortBtnAndResetBtn">
            <button>Ascending </button>
            <button>Descending </button>
            <button>Reset</button>
          </div>
          <div className="downloadData">
            <button onClick={changeBookData}>Download Book </button>
          </div>
        </div>

        {/* <hr /> */}
        <div style={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5,50,100]}
            checkboxSelection
          />
        </div>
      </RightSide>
    </MainDiv>
  );
};

const MainDiv = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  background-color: #0e0c0cd5;
  width: 18%;
  border: 1px solid red;
  .header {
    display: flex;
    padding: 0px 20px;
    align-items: center;
    justify-content: space-between;
    h2 {
      color: #f18070;
    }
  }
  .container {
    position: relative;
    height: 80vh;
    .bottom-button {
      position: absolute;
      bottom: 0;
      left: 40%;
      padding: 8px 20px;
      border-radius: 5px;
      background-color: #f18070;
      color: #0e0c0cd5;
      font-weight: bold;
      border: none;
    }
  }
`;
const Button = styled.button`
  display: block;
  padding: 0.5rem;
  width: 100%;
  background-color: ${(props) => (props.selected ? "#f18070" : "#0e0c0cac")};
  color: ${(props) => (props.selected ? "#0e0c0cd5" : "#f18070")};
  border: none;
  margin: 0.8rem auto;
  font-weight: bold;
  &:hover {
    background-color: #0e0c0cd5;
    color: #f18070;
    cursor: pointer;
  }
`;

const RightSide = styled.div`
  color: black;
  /* padding: 5px; */
  width: 81.5%;
  /* background-color: #0e0c0cd5; */

  /* border: 1px solid blue; */
  .header {
    /* border : 1px solid black; */
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #0e0c0cd5;

    h2{
      color: #f18070;
    }
  }
  .searchAndsort {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 20px;
  background-color: #0e0c0cd5;

    .searchAuthor {
      input {
        padding: 7px 5px 7px 10px;
        border-radius: 5px;
        outline: none;
        border: none;
      }
    }
    .sortBtnAndResetBtn {
      /* border: 2px solid red; */
      padding: 5px;
      button {
        padding: 7px 15px;
        margin: 0px 5px;
        background-color: #f18070;
        color: #0e0c0cd5;
        border: none;
        border-radius: 5px;
        &:hover {
          color: #f18070;
          background-color: #0e0c0cd5;
          cursor: pointer;
        }
      }
    }
    .downloadData {
      padding: 5px;
      button {
        padding: 7px 15px;
        margin: 0px 5px;
        background-color: #f18070;
        color: #0e0c0cd5;
        border: none;
        border-radius: 5px;
        &:hover {
          color: #f18070;
          background-color: #0e0c0cd5;
          cursor: pointer;
        }
      }
    }
  }
`;

