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
    { id: '4', name: 'Button 4', color: 'yellow' },
    { id: '5', name: 'Button 5', color: 'purple' },
    { id: '6', name: 'Button 6', color: 'orange' },
    { id: '7', name: 'Button 7', color: 'pink' },
    { id: '8', name: 'Button 8', color: 'brown' },
    { id: '9', name: 'Button 9', color: 'black' },
    { id: '10', name: 'Button 10', color: 'white' },
    { id: '11', name: 'Button 11', color: 'gray' },
    { id: '12', name: 'Button 12', color: 'cyan' },
    { id: '13', name: 'Button 13', color: 'magenta' },
    { id: '14', name: 'Button 14', color: 'lime' },
    { id: '15', name: 'Button 15', color: 'teal' },
    { id: '16', name: 'Button 16', color: 'lavender' },
    { id: '17', name: 'Button 17', color: 'maroon' },
    { id: '18', name: 'Button 18', color: 'navy' },
    { id: '19', name: 'Button 19', color: 'olive' },
    { id: '20', name: 'Button 20', color: 'silver' },
];

export async function GET(request: Request) {
        return new Response(JSON.stringify(
            data[Math.floor(Math.random() * data.length)]), {
            })
}