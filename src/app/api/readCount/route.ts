import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
        const jsonDirectory = path.join(process.cwd(), 'data.json');
    const fileContents = await fs.readFile(jsonDirectory, 'utf8');

    const count = JSON.parse(fileContents || '[]').length
    return NextResponse.json(count)
}