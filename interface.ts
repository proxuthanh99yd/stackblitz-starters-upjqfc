export interface IUser {
    id: number;
    image: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    address: IAddress;
    company: ICompany;
    bank: IBank;
}

export interface IAddress {
    address: string;
    city: string;
}

export interface ICompany {
    name: string;
    address: IAddress;
    department: string;
}

export interface IBank {
    cardExpire: string;
    cardNumber: number;
    cardType: string;
}
