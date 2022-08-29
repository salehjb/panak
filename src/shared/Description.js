import { Typography } from "@mui/material";

function Description({ children, color, fontSize, align }) {
  return (
    <Typography
      sx={{
        color: color ? color : "#546E7A",
        fontSize: fontSize ? fontSize : "16px",
        lineHeight: "2",
        textAlign: align ? align : "right"
      }}
    >
      {children}
    </Typography>
  );
}

export default Description;
