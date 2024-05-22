import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortedData, setSortedData] = useState([]);
  const [booksData, setBooksData] = useState([]);
  const [originalBooksData, setOriginalBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState("dashboard");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(10);
  const navigate = useNavigate();

  const handleClick = (tab) => {
    setSelected(tab);
  };

  const fetchBooksTotalData = async () => {
    try {
      let res = await axios.get(
        `https://openlibrary.org/search.json?q=search+terms`
      );
      setTotalPage(Math.ceil(res.data.docs.length / rowPerPage));
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBooksData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        searchTerm
          ? `https://openlibrary.org/search.json?q=${searchTerm}`
          : `https://openlibrary.org/search.json?q=search+terms&limit=${rowPerPage}&page=${currentPage}`
      );
      if (res.data.docs.length === 0) {
        alert("No book found");
        return;
      }
      setBooksData(res.data.docs);
      setOriginalBooksData(res.data.docs);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSortAsc = () => {
    const sortData = booksData.sort(
      (a, b) => a.first_publish_year - b.first_publish_year
    );
    setSortedData(sortData);
  };
  const handleSortDsc = () => {
    const sortData = booksData.sort(
      (a, b) => b.first_publish_year - a.first_publish_year
    );
    setSortedData(sortData);
  };
  const handleResetData = () => {
    setSortedData([]);
    console.log("reset")
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    navigate("/");
  };

  useEffect(() => {
    fetchBooksTotalData();
    fetchBooksData();
  }, [rowPerPage,currentPage,sortedData]);

  useEffect(() => {
    let res = [];
    if (searchTerm.length > 3) {
      // setTimeout(() => {
      res = booksData?.filter((item, i) => {
        if (
          item?.author_name?.[0]
            ?.toLowerCase()
            ?.includes(searchTerm?.toLowerCase())
        ) {
          return item;
        }
      });
      // }, 1000);
    }
    if (res.length > 0) {
      setBooksData(res);
    } else {
      setBooksData(originalBooksData);
    }
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
          <button className="bottom-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </LeftSide>
      <RightSide>
        <div className="header">
          <h2>Dashboard</h2>
          <img
            src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-1024.png"
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
            <button onClick={handleSortAsc}>Ascending</button>
            <button onClick={handleSortDsc}>Descending</button>
            <button onClick={handleResetData}>Reset</button>
          </div>
          <div className="downloadData">
            <button>Download Book </button>
          </div>
        </div>
        <div className="tableData">
          <table border={"1px"}>
            <thead>
              <tr>
                <th>Rating Average</th>
                <th>Author Name</th>
                <th>Title</th>
                <th>First Publish Year</th>
                <th>Subject</th>
                <th>Author Birth Date</th>
                <th>Author Top Work</th>
              </tr>
            </thead>
            <tbody>
              {(booksData.length > 0 || sortedData.length > 0) &&
              sortedData.length > 0
                ? sortedData.map((item, i) => (
                    <tr key={i}>
                      <th>{item.ratings_average}</th>
                      <th>{item.author_name ? item.author_name[0] : ""}</th>
                      <th>{item.title}</th>
                      <th>
                        {" "}
                        {item.first_publish_year
                          ? item.first_publish_year
                          : "publish year not present"}
                      </th>

                      <th>{item.subject}</th>
                      <th>{item.birth_date ? item.birth_date : ""}</th>
                      <th>{item.top_work ? item.top_work : ""}</th>
                    </tr>
                  ))
                : booksData.map((item, i) => (
                    <tr key={i} className="PerbookData">
                      <th>{item.ratings_average}</th>
                      <th>{item.author_name ? item.author_name[0] : ""}</th>
                      <th>{item.title}</th>
                      <th>
                        {" "}
                        {item.first_publish_year
                          ? item.first_publish_year
                          : "publish year not present"}
                      </th>

                      <th>{item.subject}</th>
                      <th>{item.birth_date ? item.birth_date : ""}</th>
                      <th>{item.top_work ? item.top_work : ""}</th>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        <div className="PaginationAndRowperpage">
            <div className="rowPerPage">
            <span>Row per page </span>
            <select onChange={(e) => setRowPerPage(e.target.value)}>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            </div>
            <PaginationDiv>
              <button
                className="prev-button"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Pre
              </button>
              <pre> {currentPage} </pre>
              <button
                className="next-button"
                disabled={currentPage === totalPage}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </button>
            </PaginationDiv>
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
    height: 85vh;
    .bottom-button {
      position: absolute;
      margin-bottom: 10px;
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
  width: 81.8%;
  .header {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: #0e0c0cd5;
    img{
      &:hover{
        cursor: pointer;
      }
    }
    h2 {
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
  .tableData {
    height: 68vh;
    overflow-y: auto;
    table {
      border-collapse: collapse;
      width: 100%;
      td {
        padding: 0.5rem;
      }
    }
  }
  .PaginationAndRowperpage{
    display: flex;
    width: 30%;
    justify-content: space-around;
    margin: 15px auto;
    .rowPerPage{
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 40%;
      span{
        margin-bottom: 3px;
      }
      select{
        padding: 0px;
      }
    }
  }
`;
const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;
  .prev-button,
  .next-button {
    background-color: #f18070 ;
    color: #0e0c0cd5 ;
    font-weight: bolder;
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .prev-button:hover,
  .next-button:hover {
    background-color: #0e0c0cd5;
    color: #f18070;
  }
`;

