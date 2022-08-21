import Link from "next/link";
import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import Image from "next/image";
// mui => theme
import { flexCenter } from "mui/theme/commonStyles";
// components
import { ContainedButton } from "shared/Button";

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
            <MuiLink>
              <ContainedButton width="138px">
                دوره ها
              </ContainedButton>
            </MuiLink>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default EmptyCart;
