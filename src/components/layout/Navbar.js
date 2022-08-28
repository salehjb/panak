import { useState } from "react";
import Link from "next/link";
import {
  Container,
  Box,
  Stack,
  Link as MuiLink,
  InputBase,
  InputAdornment,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from "@mui/material";
import { Leaderboard } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { getAllCarts } from "../../redux/cart/cartSlice";
import { useSession } from "next-auth/react";
// datas
import { PAGES } from "datas";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";
// components
import { ContainedButton } from "shared/Button";

const menuItems = [
  { text: "داشبورد", href: "/dashboard", icon: Leaderboard },
  { text: "داشبورد", href: "/dashboard", icon: Leaderboard },
  { text: "داشبورد", href: "/dashboard", icon: Leaderboard },
  { text: "داشبورد", href: "/dashboard", icon: Leaderboard },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const carts = useSelector(getAllCarts);

  const { data: session, status } = useSession();

  function handleMenu(e) {
    setOpen(!open);
  }
  
  return (
    <Box
      sx={{
        minHeight: 80,
        boxShadow:
          "0px 16px 40px rgba(0, 0, 0, 0.1), inset 51.0333px -51.0333px 51.0333px rgba(194, 194, 194, 0.1), inset -51.0333px 51.0333px 51.0333px rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ ...flexAlignCenter, minHeight: 80 }}>
          <Box
            ml={4}
            sx={{
              width: "57px",
              height: "58px",
            }}
          >
            <img src={"/logos/logo-red.png"} alt="logo" />
          </Box>
          <Stack direction="row" spacing={5} flexGrow={1}>
            {PAGES.map((page, index) => (
              <Box key={index}>
                <Link href={page.href}>
                  <MuiLink>{page.text}</MuiLink>
                </Link>
              </Box>
            ))}
          </Stack>
          <Box sx={{ ...flexAlignCenter }}>
            <Box ml={2}>
              <InputBase
                type="text"
                placeholder="دنبال چی میگردی ؟"
                sx={{
                  width: "250px",
                  height: "48px",
                  pr: 2,
                  backgroundColor: "#dbddde",
                  borderRadius: "8px",
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <img src="/icons/search-icon.svg" alt="search icon" />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Badge
              badgeContent={carts.length}
              color="secondary"
              showZero={true}
            >
              <Link href="/shopping-cart">
                <MuiLink
                  sx={{
                    ...flexCenter,
                    backgroundColor: "#dbddde",
                    width: "48px",
                    height: "48px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src="/icons/shopping-cart-icon.svg"
                    alt="shopping cart icon"
                  />
                </MuiLink>
              </Link>
            </Badge>
            <Box mr={3}>
              {!session && status === "unauthenticated" && (
                <Link href="/signup">
                  <MuiLink>
                    <ContainedButton width="130px">
                      ثبت نام / ورود
                    </ContainedButton>
                  </MuiLink>
                </Link>
              )}
              {session && status === "authenticated" && (
                <Box>
                  <Avatar
                    src={session.user.image}
                    onClick={handleMenu}
                    sx={{ cursor: "pointer" }}
                  />
                  <Menu
                    open={open}
                    onClose={handleMenu}
                    sx={{ mt: "3rem", p: 0 }}
                    id="menu-appbar"
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    keepMounted
                  >
                    {menuItems.map((item, index) => {
                      const CustomIcon = item.icon;
                      return (
                        <>
                          <Link href={item.href}>
                            <MuiLink>
                              <MenuItem
                                sx={{
                                  color: "primary.main",
                                  ...flexAlignCenter,
                                  py: 1
                                }}
                              >
                                <CustomIcon sx={{ ml: 2 }} />
                                <Typography>{item.text}</Typography>
                              </MenuItem>
                            </MuiLink>
                          </Link>
                          {index + 1 !== menuItems.length && (
                            <Divider variant="fullWidth" />
                          )}
                        </>
                      );
                    })}
                  </Menu>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
