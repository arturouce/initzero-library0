export interface IBookFiles {
    id: string;
    fileName: string;
    file: BinaryData;
    description: string;
    isActive: boolean;
    createdAt: Date;
}