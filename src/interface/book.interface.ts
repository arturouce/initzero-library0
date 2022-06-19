import { IUser } from 'src/interface/user.interface';
export interface IBook extends Document{
    id: string;
    isbn: string;
    title: string;
    author: string;
    publicationDate: number;
    editorial: string;
    edition: number;
    status: string;
    isActive: boolean;
    takenBy: IUser;
    registrationDate: Date;
    numPages: number;
    city: string;
    bookFile: string;
}