// material-ui
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// project imports
import Search from './Search';
import Profile from './Profile';
import MobileSection from './MobileSection';

// project import

// ==============================|| HEADER - CONTENT ||============================== //

export default function HeaderContent() {
  const downLG = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <>
      {!downLG && <Search />}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}

      {/*<Notification />*/}
      {!downLG && <Profile />}
      {downLG && <MobileSection />}
    </>
  );
}
