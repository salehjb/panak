import { Box, Radio, RadioGroup, Typography } from "@mui/material";
// mui => theme
import { flexAlignCenter } from "mui/theme/commonStyles";

function PaymentMethod({ gatewaysArray }) {
  return (
    <RadioGroup sx={{ width: "fit-content" }} defaultValue="zarinpal">
      {gatewaysArray.map((item, index) => (
        <Box mt={5} sx={{ ...flexAlignCenter }} key={index}>
          <Radio
            value={item.value}
            color="secondary"
            sx={{ padding: "0 !important" }}
          />
          <Box mr={1}>
            <img src={item.image} style={{ width: "40px", height: "40px" }} />
          </Box>
          <Box mr={2}>
            <Typography fontWeight="400">{item.name}</Typography>
            <Typography>پرداخت از طریق درگاه {item.name}</Typography>
          </Box>
        </Box>
      ))}
    </RadioGroup>
  );
}

export default PaymentMethod;
