import "typeface-roboto";
import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { Button, List, ListItem, ListItemText } from "@mui/material";
import {BrowserRouter as Router, Route,  Routes, Link} from "react-router-dom";
import First from './First';
import Second from './Second';
import Third from './Third';
function App({ links }) {
  const [open, setOpen] = useState(false);

  function toggleDrawer({ type, key }) {
    if (type === "keydown" && (key === "Tab" || key === "Shift")) {
      return;
    }

    setOpen(!open);
  }
//thay component bằng element trong Route
  return (
    <Router>
      <Button onClick={toggleDrawer}>Open Nav</Button>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
      </Routes>
      <Drawer open={open} onClose={toggleDrawer}>
        <div
          style={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {links.map((link) => (
              <ListItem button key={link.url} component={Link} to={link.url}>
                <Routes>
                  <Route
                    exact
                    path={link.url}
                    render={() => (
                      <ListItemText
                        primary={link.name}
                        primaryTypographyProps={{ color: "primary" }}
                      />
                    )}
                  />
                  <Route
                    path="/"
                    render={() => <ListItemText primary={link.name} />}
                  />
                </Routes>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </Router>
  );
}

App.defaultProps = {
  links: [
    {url: "/first", name: "First Page"},
    {url: "/second", name: "Second Page"},
    {url: "/third", name: "Third Page"},
  ]
};

export default App;
