import { Button } from "@mui/material";

export function OutlinedButton({ children, style, type, onClick }) {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      type={type ? type : ""}
      sx={{
        borderColor: "secondary.main",
        color: "secondary.main",
        width: "100%",
        height: "48px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        p: 1,
        "&:hover": {
          borderColor: "secondary.main",
        },
        ...style,
      }}
    >
      {children}
    </Button>
  );
}

export function ContainedButton({ children, style, type, onClick }) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type ? type : ""}
      sx={{
        backgroundColor: "secondary.main",
        color: "white",
        width: "100%",
        height: "48px",
        borderRadius: "8px",
        cursor: "pointer",
        fontSize: "15px",
        p: 1,
        "&:hover": {
          backgroundColor: "secondary.dark",
        },
        ...style,
      }}
    >
      {children}
    </Button>
  );
}
