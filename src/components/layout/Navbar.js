import Link from "next/link";
import {
  Container,
  Box,
  Link as MuiLink,
  Badge,
  Avatar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { getAllCarts } from "../../redux/cart/cartSlice";
import { useSession } from "next-auth/react";
// datas
import { PAGES } from "datas";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";
// components
import { ContainedButton, OutlinedButton } from "shared/Button";
import NavDrawer from "./NavDrawer";

function Navbar() {
  const carts = useSelector(getAllCarts);

  const { data: session, status } = useSession();

  return (
    <Box
      sx={{
        minHeight: 80,
        boxShadow:
          "0px 16px 40px rgba(0, 0, 0, 0.1), inset 51.0333px -51.0333px 51.0333px rgba(194, 194, 194, 0.1), inset -51.0333px 51.0333px 51.0333px rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            minHeight: 80,
            ...flexAlignCenter,
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <NavDrawer />
          </Box>
          <Link href="/">
            <MuiLink
              sx={{ ml: { xs: 0, md: 4 }, width: "57px", height: "57px" }}
            >
              <img
                src={"/logos/logo-red.png"}
                alt="logo"
                width="100%"
                height="100%"
              />
            </MuiLink>
          </Link>
          <Box flexGrow={1} sx={{ display: { xs: "none", md: "flex" } }}>
            {PAGES.map((page, index) => (
              <Box key={index} sx={{ ml: 4 }}>
                <Link href={page.href}>
                  <MuiLink>{page.text}</MuiLink>
                </Link>
              </Box>
            ))}
          </Box>
          <Box sx={{ ...flexAlignCenter, display: { xs: "none", md: "flex" } }}>
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
          </Box>
          <Box
            sx={{ mr: { xs: 0, md: 3 }, display: { xs: "none", md: "flex" } }}
          >
            {!session && status === "unauthenticated" && (
              <Link href="/signup">
                <MuiLink>
                  <Box sx={{ width: "138px" }}>
                    <ContainedButton width="fit-content">
                      <Typography>ثبت نام / ورود</Typography>
                    </ContainedButton>
                  </Box>
                </MuiLink>
              </Link>
            )}
            {session && status === "authenticated" && (
              <Link href="/dashboard">
                <MuiLink>
                  <Avatar src={session.user.image} />
                </MuiLink>
              </Link>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
