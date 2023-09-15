import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
    const jsonDirectory = path.join(process.cwd(), 'data.json');
    const fileContents = await fs.readFile(jsonDirectory, 'utf8');
    return NextResponse.json(fileContents)
}