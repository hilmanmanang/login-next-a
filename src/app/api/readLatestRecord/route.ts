import path from 'path';
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

export async function GET() {
    const jsonDirectory = path.join(process.cwd(), 'data.json');
    const fileContents = await fs.readFile(jsonDirectory, 'utf8');
    const dataJson = JSON.parse(fileContents || '[]')
    const latestData = dataJson[dataJson.length - 1]

    return NextResponse.json(latestData)
}