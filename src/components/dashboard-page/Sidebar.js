import Link from "next/link";
import { useRouter } from "next/router";
// MUI
import {
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { ExitToApp } from "@mui/icons-material";
// datas
import { DASHBOARD_SIDEBAR_ITEMS } from "datas";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";
import { signOut } from "next-auth/react";
// utils
import { getURL } from "utils/functions";

function Sidebar() {
  const pathname = useRouter().pathname;
  const activeLink = DASHBOARD_SIDEBAR_ITEMS.findIndex(
    (item) => item.href === pathname
  );

  return (
    <Box
      sx={{
        position: "sticky",
        top: "0",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={12} sx={{ px: 2, ...flexAlignCenter }}></Grid>
          <Grid item xs={12} mt={4}>
            <List component="nav">
              {DASHBOARD_SIDEBAR_ITEMS.map((item, index) => {
                const CustomIcon = item.icon;
                return (
                  <Link href={item.href} key={index}>
                    <MuiLink
                      sx={{
                        ...flexAlignCenter,
                        color: "primary.contrastText",
                      }}
                    >
                      <ListItemButton
                        key={index}
                        sx={{
                          mb: 1,
                          borderRadius: "8px",
                        }}
                      >
                        <ListItemIcon
                          sx={
                            activeLink !== index
                              ? {
                                  width: "30px",
                                  height: "50px",
                                  backgroundColor: "#e1e1e1",
                                  ...flexCenter,
                                  borderRadius: "8px",
                                }
                              : {
                                  width: "30px",
                                  height: "50px",
                                  backgroundColor: "#0E363F",
                                  color: "white",
                                  ...flexCenter,
                                  borderRadius: "8px",
                                }
                          }
                        >
                          <CustomIcon sx={{ fontSize: "1.6rem" }} />
                        </ListItemIcon>
                        <Typography
                          mr={3}
                          sx={activeLink === index ? { fontWeight: "400" } : {}}
                        >
                          {item.text}
                        </Typography>
                      </ListItemButton>
                    </MuiLink>
                  </Link>
                );
              })}
              <Link href={`/api/auth/signout?callbackUrl=${getURL()}/login`}>
                <MuiLink
                  sx={{
                    ...flexAlignCenter,
                  }}
                  onClick={() => signOut()}
                >
                  <ListItemButton>
                    <ListItemIcon
                      sx={{
                        ...flexCenter,
                        width: "30px",
                        height: "50px",
                        backgroundColor: "error.main",
                        color: "white",
                        borderRadius: "8px",
                      }}
                    >
                      <ExitToApp sx={{ fontSize: "1.6rem", color: "white" }} />
                    </ListItemIcon>
                    <Typography sx={{ mr: 2, color: "error.main" }}>
                      خروج از حساب
                    </Typography>
                  </ListItemButton>
                </MuiLink>
              </Link>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Sidebar;
