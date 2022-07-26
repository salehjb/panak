import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  Link as MuiLink,
  Button,
} from "@mui/material";
import { Close, ShoppingBagOutlined } from "@mui/icons-material";
// datas
import { PAGES } from "datas";
// mui => theme
import {
  dcFlex,
  flexAlignCenter,
  flexBetweenCenter,
} from "mui/theme/commonStyles";

function NavDrawer() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpenDrawer((prevValue) => !prevValue)}>
        <img src="/icons/menu-icon.svg" width="30px" height="30px" />
      </IconButton>
      <Box
        sx={{
          width: "50%",
          position: "fixed",
          top: "0",
          bottom: "0",
          right: isOpenDrawer ? "0" : "-100%",
          backgroundColor: "white",
          zIndex: "1000",
          ...dcFlex,
          transition: "all 0.5s ease",
          p: 2,
          color: "primary.main",
        }}
      >
        <Box sx={{ ...flexBetweenCenter }}>
          <Typography sx={{ fontWeight: "400", fontSize: "17px" }}>
            منو
          </Typography>
          <IconButton onClick={() => setIsOpenDrawer(false)}>
            <Close />
          </IconButton>
        </Box>
        <Divider variant="fullWidth" sx={{ mt: 1, mb: 2 }} />
        <Box>
          {PAGES.map((item, index) => {
            const CustomIcon = item.icon;
            return (
              <Link href={item.href} key={index}>
                <MuiLink
                  sx={{
                    ...flexAlignCenter,
                    mb: 3,
                  }}
                  onClick={() => setIsOpenDrawer(false)}
                >
                  <CustomIcon />
                  <Typography sx={{ mr: 1 }}>{item.text}</Typography>
                </MuiLink>
              </Link>
            );
          })}
          <Link href="/shopping-cart">
            <MuiLink
              sx={{ ...flexAlignCenter }}
              onClick={() => setIsOpenDrawer(false)}
            >
              <ShoppingBagOutlined />
              <Typography sx={{ mr: 1 }}>سبد خرید</Typography>
            </MuiLink>
          </Link>
        </Box>
        {true && (
          <>
            <Divider variant="fullWidth" sx={{ my: 2 }} />
            <Link href="/signup">
              <MuiLink>
                <Button variant="contained" color="secondary" fullWidth>
                  ثبت نام / ورود
                </Button>
              </MuiLink>
            </Link>
          </>
        )}
      </Box>
    </>
  );
}

export default NavDrawer;
