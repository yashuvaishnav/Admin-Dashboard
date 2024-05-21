import React from "react";
import styled from "styled-components";
// import Button from "@mui/material/Button";
import { DataGrid } from '@mui/x-data-grid';


export const AdminDashboard = () => {
  // ratings_average, author name, title, first_publish_year, subject,
  // author_birth_date, author_top_work
const columns = [
  { field: 'ratingAverage', headerName: 'Rating Average', width: 120 },
  { field: 'authorName', headerName: 'Author name', width: 150 },
  {
    field: 'title',headerName: 'Title',
    description: 'This column has a value getter and is not sortable.',sortable: false,width: 200,
  },
  { field: 'firstPublishYear', headerName: 'First Publish Year', width: 130 },
  {
    field: 'subject',headerName: 'Subject',type: 'string',width: 150,},
  { field: 'authorBirthDate', headerName: 'Author Birth Date', width: 120 },
  { field: 'authorTopWork', headerName: 'Author Top Work', width: 180 },

];
const rows = [
  
  { id: 1, title: 'Snow', authorName: 'Jon',ratingAverage : 5, firstPublishYear: 2012, subject:"Math",authorBirthDate : Date.now(),authorTopWork : "yes"},
  { id: 2, title: 'Snow', authorName: 'Aline',ratingAverage : 4, firstPublishYear: 2010, subject:"Economy",authorBirthDate : Date.now(),authorTopWork : "no"},
  { id: 3, title: 'Snow', authorName: 'Ssm',ratingAverage : 2, firstPublishYear: 2018, subject:"Physics",authorBirthDate : Date.now(),authorTopWork : "yes"},
  { id: 4, title: 'Snow', authorName: 'Jullie',ratingAverage : 1, firstPublishYear: 2015, subject:"Scince",authorBirthDate : Date.now(),authorTopWork : "no"},
];

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
          <h3>Nua</h3>
        </div>
        <h1>Dashboard</h1>
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
        <Button variant="contained">Contained</Button>
        <input type="text" placeholder="Search By Author"  />
        {/* <hr /> */}
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
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
  color: black;
  width: 19%;
  border: 1px solid red;
  .header {
    display: flex;
    /* padding: 10px; */
    align-items: center;
    /* justify-content: space-between; */
  }
`;
const RightSide = styled.div`
  color: black;
  /* padding: 5px; */
  width: 80%;
  border: 1px solid blue;
  .header {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
  }
`;
