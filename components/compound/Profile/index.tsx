import { IUser } from "@/interface";
import Image from "next/image";
import { memo } from "react";
interface IProfileProps {
    data: IUser;
}
const Profile = memo(function Profile({ data }: IProfileProps) {
    const {
        address,
        age,
        bank,
        company,
        email,
        id,
        image,
        firstName,
        lastName,
    } = data;
    return (
        <>
            <div className="flex gap-4 items-center shadow rounded">
                <div className="p-2">
                    <div className="relative w-32 aspect-square rounded-full overflow-hidden">
                        <Image
                            src={image || "/"}
                            alt=""
                            priority
                            fill
                            sizes="100%"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="">
                    <ul>
                        <li>
                            Name: {firstName} {lastName}
                        </li>
                        <li>Age: {age}</li>
                        <li>Email: {email}</li>
                        <li>
                            Address: {address.address} {address.city}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-4 grid grid-cols-2 justify-between gap-8">
                <div className="shadow rounded-lg p-2">
                    <ul className="space-y-2">
                        <li>Card Number: {bank.cardNumber}</li>
                        <li>Card Type: {bank.cardType}</li>
                        <li>Card Expire: {bank.cardExpire}</li>
                    </ul>
                </div>
                <div className="shadow rounded-lg p-2">
                    <ul className="space-y-2">
                        <li>Company name: {company.name}</li>
                        <li>
                            Company Address: {company.address.address}{" "}
                            {company.address.city}
                        </li>
                        <li>Department: {company.department}</li>
                    </ul>
                </div>
            </div>
        </>
    );
});
export default Profile;
