import { IUser } from "@/interface";

export function handleSlicePage({
    data,
    limit,
    page,
}: {
    data: IUser[];
    limit: number;
    page: number;
}): IUser[] {
    return data.slice((page - 1) * limit, page * limit);
}
