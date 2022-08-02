// MUI
import { Grid } from "@mui/material";
// components
import Sidebar from "./Sidebar";

function DashboardLayout({ children }) {
  return (
    <Grid container>
      <Grid item xs={2.5}><Sidebar /></Grid>
      <Grid item xs={9.5}>{children}</Grid>
    </Grid>
  )
}

export default DashboardLayout