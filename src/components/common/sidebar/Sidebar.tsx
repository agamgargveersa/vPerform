import * as React from 'react';
import {Link} from 'react-router-dom'
import {Box,Drawer,ListItemIcon,List,Divider,ListItem,ListItemButton  } from '@mui/material'
import VeersaLogo from '../../../assets/Images/LogoVeersa.svg';
import Shownav from '../../../assets/Images/ShowNav.svg'
import Collapse from '../../../assets/Images/Collapse.svg';
import Logout from '../../../assets/Images/Logout.svg'
import Home from '../../../assets/Images/Home.svg';
import Performance from '../../../assets/Images/Performance.svg';
import Settings from '../../../assets/Images/Settings.svg'
import Appraisalcycle from '../../../assets/Images/AppraisalCycle.svg'
import Appraiseeview from '../../../assets/Images/AppraiseeView.svg';
import fullLogo from '../../../assets/Images/VeersaFullLogo.svg'
import "./Sidebar.css";
type Anchor = 'left' ;

export default function Sidebar() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [selectedOption,setSelectedOption] = React.useState<String|null>(null);


  interface Navelements{
    logo:any,
    title:String | null
    to:URL
  }
  const navElements : Array<Navelements>= [
    {logo:Home,title:'Dashboard',to:''},
    {logo:Appraisalcycle,title:'Appraisal Cycle',to:'appraisalCycle'},
    {logo:Appraiseeview,title:'Appraisee View',to:'appraiseeView'},
    {logo:Performance,title:'Performance Module',to:'performanceModule'},
    {logo:Settings,title:'Settings',to:'settings'}
  ]


  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{overflow:'hidden', width: 360,height:'100vh',display:'flex',flexDirection:'row' }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
      sx={{ width: 85,backgroundColor:"#4264D0" }}>
        <List>
          <ListItem >
            <ListItemIcon>
              <img src={VeersaLogo}/>
            </ListItemIcon>
          </ListItem>
        </List>
        
        <List sx={{marginTop:"2rem",display:'flex',alignItems:'center',flexDirection:'column'}} disablePadding> {/* .navSmall*/}
          {navElements.map((item, index) => (
            <ListItem onClick={()=>setSelectedOption(item.title)} sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'spaced-evenly',borderRadius:"0.5rem",width:"90%",backgroundColor:`${selectedOption===item.title?'#728DE4':'none'}`}} key={index} >
              <Link to={item.to} >
                <ListItemButton>
                  <ListItemIcon className='navListItem-general'>
                    <Link to={item.to}><img src={item.logo} /></Link>
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        
        <List sx={{marginTop:"5rem"}} >
          
            <ListItem onClick={toggleDrawer('left', true)}  className='navListItem-general' disablePadding>
              <ListItemButton>
                <ListItemIcon className='navListItem-general'>
                  <a><img src={Collapse}  /></a>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem className='navListItem-general' disablePadding>
              <ListItemButton>
                <ListItemIcon className='navListItem-general'>
                  <a><img src={Logout}  /></a>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          
        </List>
      </Box>
      <Box sx={{width:"275px"}}>
        <List>
            <ListItem>
              <ListItemIcon >
                <img src={fullLogo}/>
              </ListItemIcon>
            </ListItem>
            
        </List>
        <Divider sx={{backgroundColor:"#ECEFFA",width:'100vw'}}/>
        <List sx={{marginTop:"2rem"}} disablePadding>
          {navElements.map((item, index) => (
            <ListItem onClick={()=>setSelectedOption(item.title)} sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'spaced-evenly',padding:'0.61rem 0rem'}} key={index} >
              <ListItemButton  >
                <ListItemIcon className='navListItem-general'>
                  <Link to={item.to} className='linkText'>{item.title}</Link>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <List sx={{marginTop:"5rem"}}>
          <ListItem onClick={toggleDrawer('left', true)}  sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'spaced-evenly'}} disablePadding>
                <ListItemButton > 
                  <ListItemIcon sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'spaced-evenly'}}>
                    <a className='linkText'>Collapse</a>
                  </ListItemIcon>

                </ListItemButton>
          </ListItem>
          <ListItem  sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'spaced-evenly',}} disablePadding>
                <ListItemButton > 
                  <ListItemIcon sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'spaced-evenly'}}>
                    <a style={{color:'#DE2B04'}} className='linkText'>Logout</a>
                  </ListItemIcon>

                </ListItemButton>
          </ListItem>
          
        </List>
      </Box>
    </Box>
  );

  React.useEffect(()=>{
    const currentPath = window.location.pathname;
    const segments = currentPath.split('/');
    const lastSegment = (segments[segments.length - 1]);
    const currentPage =  navElements.find(obj => obj.to === lastSegment)?.title
    setSelectedOption(currentPage)
  },[])

  return (
    <div className='navContainer'>
      <Box
      sx={{ width: 85,backgroundColor:"#4264D0",height:'100vh' }}>
        <List>
          <ListItem >
            <ListItemIcon>
              <img src={VeersaLogo}/>
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider sx={{backgroundColor:"white"}}/>
        <List sx={{marginTop:"2rem",display:'flex',alignItems:'center',flexDirection:'column'}} disablePadding>
          {navElements.map((item, index) => (
            <ListItem onClick={()=>setSelectedOption(item.title)} sx={{display:'flex',flexDirection:'column',alignItems:'center',borderRadius:"0.5rem",width:"90%",justifyContent:'spaced-evenly',backgroundColor:`${selectedOption===item.title?'#728DE4':'none'}`}}  key={index} >
              <Link to={item.to} >
                <ListItemButton >
                  <ListItemIcon className='navListItem-general'>
                    <img src={item.logo} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider sx={{marginTop:"4rem",backgroundColor:"white"}} />
        <List  sx={{marginTop:"1rem"}}>
          
            <ListItem onClick={toggleDrawer('left', true)}  className='navListItem-general' disablePadding>
              <ListItemButton>
                <ListItemIcon className='navListItem-general'>
                  <a><img src={Shownav}  /></a>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem className='navListItem-general' disablePadding>
              <ListItemButton>
                <ListItemIcon className='navListItem-general'>
                  <a><img src={Logout}  /></a>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          
        </List>
      </Box>
      
        <React.Fragment >
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
        </React.Fragment>
      
    </div>
  );
}