import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


export default function Footer() {
  return (
  
      <Grid container spacing={3} paddingTop="150px"  >
        <Grid item xs >
          <Typography  variant="body1" gutterBottom align='center'>
             Contact
          </Typography>
          <Typography  variant="body2" gutterBottom align='center'>
          support@esportspro.gg
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <Typography  variant="body1" gutterBottom align='center'>
             About
          </Typography>
          <Typography  variant="body2" gutterBottom align='center'>
             About Us
          </Typography>
          <Typography  variant="body2" gutterBottom align='center'>
             List your brand
          </Typography>
          <Typography  variant="body2" gutterBottom align='center'>
             How It Works
          </Typography>
        </Grid>
        <Grid item xs>
        <Typography  variant="body1" gutterBottom align='center'>
             Help
          </Typography>
          <Typography  variant="body2" gutterBottom align='center'>
          Terms & Conditions
          </Typography>
          <Typography  variant="body2" gutterBottom align='center'>
          Privacy Policy
          </Typography>
          <Typography  variant="body2" gutterBottom align='center'>
          Feed Back
          </Typography>
          
        </Grid>
      </Grid>

      
    
  );
}