import React from "react";
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";


function Forbidden() {  
 
  return (
<Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  style={{ minHeight: '100vh' }}
>

  <Grid item xs={3}>

  <Typography variant="h3" align="center">
  Acces refusé : 404
      </Typography>
  <Typography variant="h3" align="center">
Désolé, vous n'avez pas accès à cette page
      </Typography>
  <Typography variant="h3" align="center">
  Veuillez contacter l'administrateur de votre organisation pour obtenir l'accès. 
  </Typography>
  </Grid>   
   
</Grid> 
  );
}
export default Forbidden;
