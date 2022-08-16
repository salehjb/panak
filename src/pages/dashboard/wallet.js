import { Box, Grid, Typography } from "@mui/material";
// components
import DashboardLayout from "components/dashboard-page/DashboardLayout";
// components
import ChargeWallet from "components/dashboard-page/ChargeWallet";
import WalletBalance from "components/dashboard-page/WalletBalance";
import WalletTransactions from "components/dashboard-page/WalletTransactions";

function wallet() {
  return (
    <DashboardLayout>
      <Grid container>
        <ChargeWallet />
        <WalletBalance />
        <WalletTransactions />
      </Grid>
    </DashboardLayout>
  );
}

export default wallet;
