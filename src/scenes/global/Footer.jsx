import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import logo from "../../imgg/c-logo.png"
import './Navbar.css'
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
    const {
        palette: { neutral },
    } = useTheme();
    return (
        <Box marginTop="70px" padding="40px 0" backgroundColor="#E3E6F3">
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
                color="#088178"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography
                        variant="h4"
                        fontWeight="bold"
                        mb="30px"

                    >
                        <div className="logoo"> <img src={logo} alt="" /></div>
                    </Typography>
                    <div>
                    We are Crown, here we give you a lot of variety of clothes, shoes, and many other products, and we want to see happiness in your face always 
                    </div>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        About Us
                    </Typography>
                    <Typography mb="30px">Careers</Typography>
                    <Typography mb="30px">Our Stores</Typography>
                    <Typography mb="30px">Terms & Conditions</Typography>
                    <Typography mb="30px">Privacy Policy</Typography>
                </Box>

                <Box>
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Customer Care
                    </Typography>
                    <Typography mb="30px">Help Center</Typography>
                    <Typography mb="30px">Track Your Order</Typography>
                    <Typography mb="30px">Corporate & Bulk Purchasing</Typography>
                    <Typography mb="30px">Returns & Refunds</Typography>
                </Box>

                <Box width="clamp(20%, 25%, 30%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px">
                        Contact Us
                    </Typography>
                    <Typography mb="30px">
                    Al Teraa Street, Mansoura (Section 2), Mansoura, Dakahlia
                    </Typography>
                    <Typography mb="30px" sx={{ wordWrap: "break-word" }}>
                        Email: crown.1.121212@gmail.com
                    </Typography>
                    <Typography mb="30px"><InstagramIcon />crownbrand7</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;