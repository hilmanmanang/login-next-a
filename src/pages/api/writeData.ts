import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: { method: string; body: { name: any; email: any; age: any; phone: any; language: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
    try {
        const jsonDirectory = path.join(process.cwd(), 'data.json');
        const fileContents = await fs.readFile(jsonDirectory, 'utf8');

        const { name, email, age, phone, language } = req.body
        const newData = {
            name,
            email,
            age,
            phone,
            language
        }

        const jsonFileContent = await JSON.parse(fileContents || '[]')
        jsonFileContent.push(newData)

        const updatedData = JSON.stringify(jsonFileContent);

        await fs.writeFile(jsonDirectory, updatedData);
        res.status(200)
    } catch (error) {
        res.status(500)
    }
}