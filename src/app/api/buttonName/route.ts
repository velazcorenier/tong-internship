import { NextRequest } from 'next/server';

interface Data {
    id: string;
    name: string;
    color: string;
}

const data: Data[] = [
    { id: '1', name: 'Button 1', color: 'red' },
    { id: '2', name: 'Button 2', color: 'blue' },
    { id: '3', name: 'Button 3', color: 'green' },
];

export async function GET(request: Request) {
        return new Response(JSON.stringify(
            data[Math.floor(Math.random() * data.length)]), {
                status: 200,
            })
}