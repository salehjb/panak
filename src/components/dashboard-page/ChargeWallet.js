import { Box, Grid, Typography } from "@mui/material";
// components
import Input from "shared/Input";
import PaymentMethod from "shared/PaymentMethod";
import { ContainedButton } from "shared/Button";
// datas
import { PAYMENT_GATEWAYS } from "datas";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function ChargeWallet() {
  return (
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          p: 2,
          mb: { xs: 4, md: 0 },
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px",
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center" }}
        >
          شارژ کیف پول
        </Typography>
        <Box sx={{ width: "100%", mt: 4 }}>
          <Input item={{ type: "text", label: "مبلغ ( تومان )" }} />
        </Box>
        <Box mt={4}>
          <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
            انتخاب روش پرداخت
          </Typography>
          <PaymentMethod gatewaysArray={PAYMENT_GATEWAYS} />
        </Box>
        <Box sx={{ width: "100%" }}>
          <ContainedButton margin="2rem 0 0 0">پرداخت</ContainedButton>
        </Box>
      </Box>
    </Grid>
  );
}

export default ChargeWallet;
