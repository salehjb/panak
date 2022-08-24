import { Button } from "@mui/material";

export function OutlinedButton({
  children,
  width,
  height,
  onClick,
  borderColor,
  color,
  margin,
  type,
}) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      type={type ? type : ""}
      sx={{
        borderColor: borderColor ? borderColor : "secondary.main",
        color: color ? color : "secondary.main",
        width: width ? width : "100%",
        height: height ? height : "48px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        margin: margin,
        p: 1,
        "&:hover": {
          borderColor: borderColor ? borderColor : "secondary.main",
        },
      }}
    >
      {children}
    </Button>
  );
}

export function ContainedButton({
  children,
  width,
  height,
  onClick,
  bgColor,
  margin,
  type,
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type ? type : ""}
      sx={{
        backgroundColor: bgColor ? bgColor : "secondary.main",
        color: "white",
        width: width ? width : "100%",
        height: height ? height : "48px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        margin: margin,
        p: 1,
        "&:hover": {
          backgroundColor: bgColor ? bgColor : "secondary.dark",
        },
      }}
    >
      {children}
    </Button>
  );
}
