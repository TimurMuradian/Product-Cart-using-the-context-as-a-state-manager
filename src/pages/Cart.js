import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import useCart from "../hooks/useCart";

const Cart = () => {

    const {
      removeFromCart,
      state: { products },
    } = useCart();

    return (
      <TableContainer component={Paper}>
      <Table size="small" aria-label="cart table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Price</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.count}</TableCell>
              <TableCell align="right">{product.price}</TableCell>
              <TableCell align="right">
                {product.price * product.count}
              </TableCell>
              <TableCell align="right">
                <Button
                  color="secondary"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Cart;
