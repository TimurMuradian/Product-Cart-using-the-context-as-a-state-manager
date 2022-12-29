import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from "@mui/material/Button";
import useCart from "../hooks/useCart";

const Header = () => {

    const {
      state: { amount },
    } = useCart();

    return (
        <Box mb={2}>
            <AppBar position="static">
                <Toolbar>
                    <Button to="/" component={NavLink} color="inherit">
                        Products
                    </Button>
                    <Button to="/cart" component={NavLink} color="inherit">
                        Cart
                    </Button>

                    <ShoppingCartIcon />
                    <Typography>{amount} items</Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );

};

export default Header;