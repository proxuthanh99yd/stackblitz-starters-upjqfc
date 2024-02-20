"use client";

import Dashboard from "@/containers/Dashboard";
import { IUser } from "@/interface";
import React, { useEffect, useState } from "react";

export default function DashboardPage() {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        const http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const { users } = JSON.parse(this.response);
                setUsers(users);
            }
        };
        http.open("GET", "https://dummyjson.com/users");
        http.send();
    }, []);
    return <Dashboard data={users} />;
}
