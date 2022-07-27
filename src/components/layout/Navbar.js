import Link from "next/link";
import { useRouter } from "next/router";
// MUI
import {
  AppBar,
  Container,
  Toolbar,
  Tabs,
  Tab,
  useTheme,
  Box,
} from "@mui/material";
import LaptopIcon from "@mui/icons-material/Laptop";
// datas
import { PAGES } from "../../datas";
// icons
import { SearchIcon, ShoppingCartIcon } from "../../shared/Icons";

function Navbar() {
  const pathname = useRouter().pathname;
  const activeLink = PAGES.findIndex((item) => item.href === pathname);

  // styles
  const theme = useTheme();
  const styles = {
    appbar: {
      backgroundColor: theme.palette.common.white,
      boxShadow:
        "0px 16px 40px rgba(0, 0, 0, 0.1), inset 51.0333px -51.0333px 51.0333px rgba(194, 194, 194, 0.1), inset -51.0333px 51.0333px 51.0333px rgba(255, 255, 255, 0.1)",
      color: theme.palette.primary.contrastText,
      backdropFilter: "blur(102.067px)",
      position: "sticky",
      top: 0,
    },
    tabIndicator: {
      height: "6px",
      borderRadius: "8px",
      backgroundColor: theme.palette.secondary.main,
    },
    pagesLink: {
      color: theme.palette.primary.contrastText,
      fontSize: "17px",
    },
    icon: {
      width: "50px",
      height: "48px",
      ml: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ECEFF1",
      borderRadius: "8px",
      cursor: "pointer",
    },
    authButton: {
      width: "152px",
      height: "48px",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "8px",
    },
  };

  return (
    <AppBar sx={styles.appbar}>
      <Container maxWidth="xl">
        <Toolbar sx={{ minHeight: "80px !important" }}>
          <LaptopIcon sx={{ ml: 6 }} />
          <Tabs
            variant="fullWidth"
            value={activeLink}
            sx={{ flexGrow: 1 }}
            TabIndicatorProps={{ style: styles.tabIndicator }}
          >
            {PAGES.map((page, index) => (
              <Link href={page.href} key={index}>
                <Tab
                  sx={{ margin: "0 0.3rem" }}
                  label={<a style={styles.pagesLink}>{page.text}</a>}
                  disableRipple
                />
              </Link>
            ))}
          </Tabs>
          <Box sx={styles.icon}>
            <SearchIcon />
          </Box>
          <Box sx={styles.icon}>
            <ShoppingCartIcon />
          </Box>
          <Link href="/signup">
            <a style={styles.authButton}>ثبت نام / ورود</a>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
