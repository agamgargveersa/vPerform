import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Box, Typography, TextField } from '@mui/material';
import profileImg from '../../../assets/Images/profile 1.svg';
import EmployeeGroup from '../../../assets/Images/employeeCount.svg'
import filterIcon from '../../../assets/Images/filterIcon.svg'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './ManageAppraiseeList.css'

function ManageAppraiseeHeader(){
    return (
        <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',maxHeight:'5.5rem'}}>
            <Box sx={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Typography sx={{padding:'1rem'}}>Filter By</Typography>
                <TextField
                  placeholder='Search'
                    id="search"
                    InputProps={{
                        startAdornment: (
                          <IconButton  type="submit" aria-label="search">
                            <SearchIcon />
                          </IconButton>
                        ),
                        
                      }}
                                   
                />
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',gap:'0.1rem',margin:'1rem'}}>
            <Typography sx={{padding:'1rem',backgroundColor:'#F0F7FF',borderRadius:'0.5rem'}}>254 Selected</Typography>
            <Box sx={{display:'flex',flexDirection:'row',gap:'0.01rem',alignItems:'center'}}>
                <Typography sx={{padding:'1rem'}}>Total Employees(s):</Typography>
                <img src={EmployeeGroup}/>
                <Typography sx={{paddingLeft:'0.5rem',paddingRight:'1rem'}}>254</Typography>
                <img src={filterIcon}/>
            </Box>

            </Box>
        </Box>
    )
}

const cycles = [
    {id:1,employee:"Virat Kohli",reviewer:"M.S Dhoni"},
    {id:2,employee:"Virat Kohli",reviewer:"M.S Dhoni"},
    {id:3,employee:"Virat Kohli",reviewer:"M.S Dhoni"},
    {id:4,employee:"Virat Kohli",reviewer:"M.S Dhoni"},
    {id:5,employee:"Virat Kohli",reviewer:"M.S Dhoni"},
    {id:6,employee:"Virat Kohli",reviewer:"M.S Dhoni"},
    {id:7,employee:"Virat Kohli",reviewer:"M.S Dhoni"},
    
    
  ]

const ManageAppraiseeTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectAll(event.target.checked);
    const ids = cycles.map((cycle) => cycle.id);
    setSelectedRows(event.target.checked ? ids : []);
  };

  const handleSelectRow = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    const selectedIndex = selectedRows.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selectedRows, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selectedRows.slice(1));
    } else if (selectedIndex === selectedRows.length - 1) {
      newSelected = newSelected.concat(selectedRows.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selectedRows.slice(0, selectedIndex),
        selectedRows.slice(selectedIndex + 1)
      );
    }

    setSelectedRows(newSelected);
  };

  const isSelected = (id: number) => selectedRows.indexOf(id) !== -1;

  return (
    <Box sx={{marginLeft:'5.625rem'}}>
        <ManageAppraiseeHeader />
        <TableContainer sx={{maxHeight:'calc(100vh - 6rem)'}}   component={Paper}>
        <Table >
            <TableHead sx={{backgroundColor:'#F0F7FF',height:'4.25rem'}}>
            <TableRow>
                <TableCell >
                <Checkbox
                    checked={selectAll}
                    onChange={handleSelectAll}
                    inputProps={{ 'aria-label': 'select all' }}
                />
                </TableCell>
                <TableCell >Employee</TableCell>
                <TableCell>Reviewer</TableCell>
                
                
            </TableRow>
            </TableHead>
            <TableBody >
            {cycles.map((cycle,index) => (
                <TableRow key={index} sx={{height:'5.25rem',backgroundColor:`${index%2===0?'white':'#F9F9F9'}`}} selected={isSelected(cycle.id)}>
                <TableCell>
                    <Checkbox
                    checked={isSelected(cycle.id)}
                    onChange={(event) => handleSelectRow(event, cycle.id)}
                    />
                </TableCell>
                <TableCell>
                    <Box style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
                        <Box style={{borderRadius:"50%"}}>
                            <img style={{borderRadius:"50%"}} src={profileImg}/>
                        </Box>
                        <Box>
                            <Box>{cycle.employee}</Box>
                            <Box>{cycle.employee}</Box>
                        </Box>
                    </Box>
                </TableCell>
                <TableCell>{cycle.reviewer}</TableCell>
                
                
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
  );
};

export default ManageAppraiseeTable;
