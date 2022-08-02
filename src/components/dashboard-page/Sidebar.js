import Link from "next/link";
import { useRouter } from "next/router";
// MUI
import {
  Avatar,
  Box,
  Container,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  Typography,
  Link as MuiLink,
} from "@mui/material";
// datas
import { DASHBOARD_SIDEBAR_ITEMS } from "datas";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";

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
        pt: 3,
        color: (theme) => theme.palette.primary.main,
      }}
    >
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ px: 2, ...flexAlignCenter }}
          >
            <Avatar src="https://assets-prd.ignimgs.com/2021/11/30/cq5dam-web-1200-675-1638302563149.jpg" />
            <Typography fontSize="15px" fontWeight="400" mr={2}>
              خوش اومدی، امیلیا عزیز
            </Typography>
          </Grid>
          <Grid item xs={12} mt={4}>
            <List component="nav">
              {DASHBOARD_SIDEBAR_ITEMS.map((item, index) => {
                const CustomIcon = item.icon;
                return (
                  <ListItemButton
                    key={index}
                    sx={{
                      mb: 1,
                      borderRadius: "8px",
                    }}
                  >
                    <Link href={item.href}>
                      <MuiLink
                        sx={{
                          ...flexAlignCenter,
                          color: (theme) => theme.palette.primary.contrastText,
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
                          sx={activeLink === index && { fontWeight: "400" }}
                        >
                          {item.text}
                        </Typography>
                      </MuiLink>
                    </Link>
                  </ListItemButton>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Sidebar;
