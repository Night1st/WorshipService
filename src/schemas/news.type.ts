export interface INews {
    updated_at: string | number | Date;
    id: number,
    title: string,
    summary: string,
    content: string,
    slug: string,
    image: string,
    public_date: string,
    author: string,
}