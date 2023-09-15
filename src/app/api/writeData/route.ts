import { NextResponse } from "next/server";
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const jsonDirectory = path.join(process.cwd(), 'data.json');
        const fileContents = await fs.readFile(jsonDirectory, 'utf8');
        const data = await req.json()
        const { name, email, age, phone, language } = data
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
        return NextResponse.json(updatedData)
    } catch (error) {
        return NextResponse.json(error)
    }
}