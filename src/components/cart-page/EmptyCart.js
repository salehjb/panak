import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";

function EmptyCart() {
  return (
    <Box>
      <Container
        maxWidth="xl"
        sx={{ ...flexCenter, flexDirection: "column", mt: 6 }}
      >
        <Box>
          <Image
            src={"/vectors/empty-cart-vector.png"}
            width="180px"
            height="170px"
          />
        </Box>
        <Box mt={3}>
          <Typography color="primary" sx={{ fontSize: "18px", fontWeight: "400" }}>
            شما هنوز هیچ دوره ای را خریداری نکرده اید
          </Typography>
        </Box>
        <Box mt={3}>
          <Link href="/courses">
            <MuiLink
              sx={{
                backgroundColor: "secondary.main",
                ...flexCenter,
                width: "130px",
                height: "48px",
                color: "white",
                borderRadius: "8px",
                "&:hover": {
                  backgroundColor: "secondary.dark",
                },
              }}
            >
              دوره ها
            </MuiLink>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default EmptyCart;
