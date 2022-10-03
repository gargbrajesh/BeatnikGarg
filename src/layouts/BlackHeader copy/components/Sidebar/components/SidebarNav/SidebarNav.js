import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
} from "@material-ui/core";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  root: {},
  listItem: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  navLink: {
    "&:hover": {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: "auto",
  },
  closeIcon: {
    justifyContent: "flex-end",
    cursor: "pointer",
  },
  menu: {
    display: "flex",
  },
  menuItem: {
    marginRight: theme.spacing(8),
    "&:last-child": {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: "uppercase",
  },
  divider: {
    width: "100%",
  },
}));

const SidebarNav = (props) => {
  const { pages, onClose, className, ...rest } = props;
  console.log("pages", pages);
  const classes = useStyles();
  return (
    <List {...rest} className={clsx(classes.root, className)}>
      <ListItem button>
        <Link href="/">
          <ListItemText primary="Home" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/browse-portfolio">
          <ListItemText primary="Portfolios" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/upcoming">
          <ListItemText primary="Upcoming Features" />
        </Link>
      </ListItem>

      <ListItem button>
        <Link href="/letTalk">
          <ListItemText primary="Let's Talk" />
        </Link>
      </ListItem>

      <Divider />
      <ListItem button>
        <Link href="/signup">
          <ListItemText primary="Sign Up" />
        </Link>
      </ListItem>
      <ListItem button>
        <Link href="/signin">
          <ListItemText primary="Login " />
        </Link>
      </ListItem>
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
  onClose: PropTypes.func,
};

export default SidebarNav;
