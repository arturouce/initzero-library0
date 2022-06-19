export interface IUser extends Document {
    id: string;
    fullName: string;
    mail: string;
    phone: string;
    birthDay: Date;
    address: string;
    registrationDate: Date;
}