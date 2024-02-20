import { IUser } from "@/interface";
import { memo } from "react";

interface ITableProps {
    data: IUser[];
    onShow: (id: number) => void;
}
const Table = memo(function Table({ data, onShow }: ITableProps) {
    return (
        <table className="border-separate border shadow w-full rounded">
            <thead>
                <tr>
                    <th className="border border-slate-300">Name</th>
                    <th className="border border-slate-300">Email</th>
                    <th className="border border-slate-300">Company name</th>
                    <th className="border border-slate-300">Department</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({ id, firstName, lastName, email, company }) => (
                    <tr
                        key={id}
                        onClick={() => onShow(id)}
                        className="hover:bg-slate-200 cursor-pointer"
                    >
                        <td className="border border-slate-300">
                            {firstName} {lastName}
                        </td>
                        <td className="border border-slate-300">{email}</td>
                        <td className="border border-slate-300">
                            {company.name}
                        </td>
                        <td className="border border-slate-300">
                            {company.department}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
});
export default Table;
