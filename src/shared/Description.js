import { Typography } from "@mui/material";

function Description({ children }) {
  return (
    <Typography sx={{ color: "#546E7A", fontSize: "16px" }}>
      {children}
    </Typography>
  );
}

export default Description;
