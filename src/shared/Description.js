import { Typography } from "@mui/material";

function Description({ children, color, fontSize }) {
  return (
    <Typography
      sx={{
        color: color ? color : "#546E7A",
        fontSize: fontSize ? fontSize : "16px",
        lineHeight: "2",
      }}
    >
      {children}
    </Typography>
  );
}

export default Description;
