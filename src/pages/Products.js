import { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import useCart from "../hooks/useCart";

const Products = () => {
  const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    const { addToCart } = useCart();

  const getProducts = () => fetch("https://fakestoreapi.com/products");

  useEffect(() => {
    getProducts()
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

    return (
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={6}>
            <Card variant="outlined">
              <CardContent>
                <Typography color="textSecondary" gutterBottom>
                  {product.title}
                </Typography>

                <Typography variant="h5">Price: {product.price}</Typography>
              </CardContent>

              <CardActions>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
};

export default Products;
