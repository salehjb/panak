import { Button } from "@mui/material";

export function OutlinedButton({
  children,
  width,
  height,
  onClick,
  borderColor,
  color,
  margin
}) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{
        borderColor: borderColor ? borderColor : "secondary.main",
        color: color ? color : "secondary.main",
        width: width ? width : "100%",
        height: height ? height : "48px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        margin: margin,
        "&:hover": {
          borderColor: borderColor ? borderColor : "secondary.main",
        },
      }}
    >
      {children}
    </Button>
  );
}

export function ContainedButton({ children, width, height, onClick, bgColor, margin }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        backgroundColor: bgColor ? bgColor : "secondary.main",
        color: "white",
        width: width ? width : "100%",
        height: height ? height : "48px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        margin: margin,
        "&:hover": {
          backgroundColor: bgColor ? bgColor : "secondary.dark",
        },
      }}
    >
      {children}
    </Button>
  );
}
