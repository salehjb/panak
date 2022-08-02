import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Box,
  Stack,
  Link as MuiLink,
  InputBase,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { RiShoppingCartLine, RiSearchLine } from "react-icons/ri";
// datas
import { PAGES } from "datas";
// mui => theme
import { flexAlignCenter, flexCenter } from "mui/theme/commonStyles";

function Navbar() {
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
              position: "relative",
              width: "57px",
              height: "58px",
            }}
          >
            <Image
              src={"/logos/logo-red.png"}
              alt="logo"
              objectFit="contain"
              layout="fill"
            />
          </Box>
          <Stack direction="row" spacing={5} flexGrow={1}>
            {PAGES.map((page, index) => (
              <Box>
                <Link href={page.href} key={index}>
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
                      <RiSearchLine />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Box>
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
                  <RiShoppingCartLine fontSize="1.3rem" />
                </MuiLink>
              </Link>
            </Box>
            <Box
              mr={3}
              sx={{
                ...flexCenter,
                backgroundColor: (theme) => theme.palette.secondary.main,
                width: "130px",
                height: "48px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              <Link href="/signup">
                <MuiLink sx={{ color: "white" }}>ثبت نام / ورود</MuiLink>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
