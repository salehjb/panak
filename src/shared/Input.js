import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, IconButton, InputAdornment, InputBase, Typography } from "@mui/material";
import { useState } from "react";

function Input({ item }) {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <Box>
      <Typography mb={0.8} fontSize="15px" fontWeight="400">
        {item.label}
      </Typography>
      <InputBase
        sx={{
          width: "100%",
          height: "48px",
          mb: 2,
          border: "1px solid #CFD8DC",
          borderRadius: "8px",
          pr: 1.5,
        }}
        type={item.type === "password" && (isShowPassword ? "text" : item.type)}
        endAdornment={
          item.type === "password" && (
            <InputAdornment position="end">
              <IconButton
                pr={1}
                onClick={() => setIsShowPassword(!isShowPassword)}
              >
                {isShowPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </Box>
  );
}

export default Input;
