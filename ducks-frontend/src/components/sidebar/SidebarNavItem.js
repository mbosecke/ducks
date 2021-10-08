import React from 'react';
import {Link} from "@chakra-ui/react";
import styles from "./SidebarNavItem.css";
import {NavLink} from "react-router-dom";

export default function SidebarNavItem({to, children}) {
    return (
        <Link
            className={styles.navLink}
            as={NavLink}
            to={to}
            padding={2}
            color='gray.900'
            borderRadius='sm'
        >
            {children}
        </Link>
    )
}