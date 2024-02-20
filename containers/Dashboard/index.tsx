"use client";

import Paginate from "@/components/compound/Paginate";
import Profile from "@/components/compound/Profile";
import Table from "@/components/compound/Table";
import { IUser } from "@/interface";
import { handleSlicePage } from "@/utils/Paginate";
import { useState } from "react";

const LIMIT = 10;

interface IDashBoardProps {
    data: IUser[];
}

export default function Dashboard({ data }: IDashBoardProps) {
    const [user, setUser] = useState<IUser>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const handleShowUser = (id: number) => {
        const targetUser = data.find((user) => user.id === id);
        setUser(targetUser);
    };
    const handleChangePage = (page: number): void => {
        setCurrentPage(page);
    };
    if (!(data.length > 0)) {
        return <p>Loading</p>;
    }
    return (
        <div className="px-2">
            <section className="p-4">
                <Profile data={user || data[0]} />
            </section>
            <section className="p-4">
                <Table
                    data={handleSlicePage({
                        data,
                        page: currentPage,
                        limit: LIMIT,
                    })}
                    onShow={handleShowUser}
                />
                <Paginate<IUser>
                    onChange={handleChangePage}
                    currentPage={currentPage}
                    data={data}
                    limit={LIMIT}
                />
            </section>
        </div>
    );
}
