import { Box, Grid, Typography } from "@mui/material";
// components
import Input from "shared/Input";
import PaymentMethod from "shared/PaymentMethod";
import { ContainedButton } from "shared/Button";
// datas
import { PAYMENT_GATEWAYS } from "datas";

function ChargeWallet() {
  return (
    <Grid
      item
      xs={4}
      sx={{
        borderLeft: "1px solid #C7CED1",
        pl: 4,
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
    </Grid>
  );
}

export default ChargeWallet;
