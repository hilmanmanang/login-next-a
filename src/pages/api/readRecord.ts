import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
    const jsonDirectory = path.join(process.cwd(), 'data.json');
    const fileContents = await fs.readFile(jsonDirectory, 'utf8');
    res.status(200).json(fileContents);
}