interface IHeading {
    title: string;
    color: string;
}

export interface IStore {
    count: number;
    counterColor: string;
    heading: IHeading;
}
