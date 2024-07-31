import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Fab,
  LinearProgress,
} from "@mui/material";
import {
  Home,
  Headset,
  MenuBook,
  FormatQuote,
  Layers,
  Menu,
  LooksOne,
  LooksTwo,
  Looks3,
  Looks4,
  Looks5,
  Looks6,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const GreenBarWithProgress = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    setProgress(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", icon: <Home />, path: "/" },
    { label: "Memorizing", icon: <Layers />, path: "/memorizing" },
    { label: "Listening", icon: <Headset />, path: "/listening" },
    {
      label: "Reading",
      icon: <MenuBook />,
      path: "/reading",
      subItems: [
        { label: "Level 01", path: "/reading/level01", icon: <LooksOne /> },
        { label: "Level 02", path: "/reading/level02", icon: <LooksTwo /> },
        { label: "Level 03", path: "/reading/level03", icon: <Looks3 /> },
        { label: "Level 04", path: "/reading/level04", icon: <Looks4 /> },
        { label: "Level 05", path: "/reading/level05", icon: <Looks5 /> },
        { label: "Level 06", path: "/reading/level06", icon: <Looks6 /> },
      ],
    },
    {
      label: "Salaf Quotes",
      icon: <FormatQuote />,
      path: "/narrationsAboutSalaf",
    },
  ];

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navigationItems.map((item, index) =>
          item.subItems ? (
            <React.Fragment key={index}>
              <ListItem
                button
                component={Link}
                to={item.path}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItem>
              {item.subItems.map((subItem, subIndex) => (
                <ListItem
                  button
                  component={Link}
                  to={subItem.path}
                  key={subIndex}
                  sx={{ pl: 4 }}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemIcon>{subItem.icon}</ListItemIcon>
                  <ListItemText primary={subItem.label} />
                </ListItem>
              ))}
            </React.Fragment>
          ) : (
            <ListItem
              button
              component={Link}
              to={item.path}
              key={index}
              onClick={toggleDrawer(false)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
        <LinearProgress
          color="success"
          variant="determinate"
          value={progress}
        />
        <Box
          sx={{
            pt: "1rem",
            pl: "1rem",
            bgcolor: "#57C12C",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>{children}</Box>
        </Box>
      </Box>
      <Box sx={{ mt: "4rem" }}></Box>
      <Fab
        color="primary"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: "#57C12C",
          "&:hover": { bgcolor: "#45A420" },
        }}
      >
        <Menu />
      </Fab>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </>
  );
};

export default GreenBarWithProgress;
