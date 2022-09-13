import { Typography } from "@mui/material";

function Description({ children, sx }) {
  return (
    <Typography
      sx={{
        color: "#546E7A",
        fontSize: "16px",
        lineHeight: "2",
        textAlign: "right",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}

export default Description;
