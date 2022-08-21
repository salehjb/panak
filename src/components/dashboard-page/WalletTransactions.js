import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
// datas
import { TRANSACTIONS } from "datas";
import { flexJustifyCenter } from "mui/theme/commonStyles";

function WalletTransactions() {
  return (
    <Grid item xs={12} mt={7}>
      <Typography sx={{ fontSize: "16px", fontWeight: "400" }}>
        تراکنش ها
      </Typography>
      <TableContainer
        sx={{ border: "1px solid #ECEFF1", borderRadius: "8px", mt: 4 }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right" sx={styles.tableHeadCells}>
                شماره تراکنش
              </TableCell>
              <TableCell align="right" sx={styles.tableHeadCells}>
                مبلغ ( تومان )
              </TableCell>
              <TableCell align="right" sx={styles.tableHeadCells}>
                تاریخ و ساعت
              </TableCell>
              <TableCell align="right" sx={styles.tableHeadCells}>
                وضعیت
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TRANSACTIONS.map((transaction, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:nth-child(even)": { backgroundColor: "#F5F5F5" },
                  "& td, & th": { borderBottom: "none" },
                }}
              >
                <TableCell align="right" sx={styles.tableCell}>
                  {transaction.transactionId}
                </TableCell>
                <TableCell align="right" sx={styles.tableCell}>
                  {transaction.amount}
                </TableCell>
                <TableCell align="right" sx={styles.tableCell}>
                  {transaction.date}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    color: transaction.status === "موفق" ? "green" : "red",
                  }}
                >
                  {transaction.status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

const styles = {
  tableHeadCells: {
    color: "#B0BEC5",
  },
  tableCell: {
    color: "primary.contrastText",
    fontSize: "15px",
  },
};

export default WalletTransactions;
