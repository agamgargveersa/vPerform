import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Link,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./AppraisalCycleTable.css";
import emptyRecordsIcon from "../../../assets/images/emptyRecordsIcon.svg";
import manageAppraiseeIcon from "../../../assets/images/manageAppraiseeIcon.svg";
import editButton from "../../../assets/images/editActionButton.svg";
import deleteButton from "../../../assets/images/deleteActionButton.svg";
import gearIcon from "../../../assets/images/configuration.svg";
import searchIcon from "../../../assets/images/searchIcon.svg";

interface AppraisalCycle {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  status: string;
}

interface AppraisalCycleTableProps {
  cycles: AppraisalCycle[];
}

const AppraisalCycleTable = () => {
  const cycles = [
    {
      id: 1,
      name: "Jan-June 2024 review",
      startDate: "2024-01-01",
      endDate: "2024-06-30",
      status: "pending",
    },
    {
      id: 2,
      name: "Jan-June 2024 review",
      startDate: "2024-07-01",
      endDate: "2024-12-31",
      status: "pending",
    },
    {
      id: 2,
      name: "Jan-June 2024 review",
      startDate: "2024-07-01",
      endDate: "2024-12-31",
      status: "pending",
    },
  ];

  const tableHeaders = [
    "Name of the Appraisal",
    "Manage Appraisee",
    "Start Date",
    "End Date",
    "Status",
    "Actions",
  ];

  return (
    <>
      <div className="mainContainer">
        <div className="headerContainer">
          <TextField
            placeholder="Search"
            id="search"
            InputProps={{
              startAdornment: (
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
          <button className="configureButton">
            <div className="buttonContainer">
              <img src={gearIcon} alt="" />
              <p>Configure Appraisal Cycle</p>
            </div>
          </button>
        </div>

        {cycles.length === 0 ? (
          <>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow className="tableHeader">
                    {tableHeaders.map((header, index) => (
                      <TableCell key={index}>{header}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
              </Table>
            </TableContainer>

            <div className="emptyRecordsContainer">
              <img src={emptyRecordsIcon} alt="emptyTableIcon" />
              <p>
                No records available, configure appraisal cycle to initiate the
                process
              </p>
            </div>
          </>
        ) : (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow className="tableHeader">
                  {tableHeaders.map((header, index) => (
                    <TableCell className="tableCell" key={index}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody className="tableContent">
                {cycles.map((cycle) => (
                  <TableRow key={cycle.id}>
                    <TableCell>
                      <Link>{cycle.name}</Link>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <div>
                          <img src={manageAppraiseeIcon} alt="" />
                        </div>
                      </IconButton>
                    </TableCell>
                    <TableCell>{cycle.startDate}</TableCell>
                    <TableCell>{cycle.endDate}</TableCell>
                    <TableCell>
                      <div className="appraisalStatusDiv">{cycle.status}</div>
                    </TableCell>
                    <TableCell>
                      <div className="actionButtonContainer">
                        <button className="editButton">
                          <img src={editButton} alt="" />
                        </button>
                        <button className="deleteButton">
                          <img src={deleteButton} alt="" />
                        </button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </>
  );
};

export default AppraisalCycleTable;
