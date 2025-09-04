import { 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Divider 
} from "@mui/material";
import { Link } from "react-router-dom";

export default function MobileMenu({ handleDrawerClose }) {
  return (
    <div>
      <List>
        {/* Removed Assignments and Study Materials buttons */}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton 
            component={Link} 
            to="/profile"
            onClick={handleDrawerClose}
          >
            <ListItemText primary="My Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}