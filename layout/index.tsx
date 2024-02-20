import { ReactNode } from "react";

interface ILayoutProps {
    children?: ReactNode;
}
export default function Layout({ children }: ILayoutProps) {
    return <main>{children}</main>;
}
