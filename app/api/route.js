import { NextResponse } from 'next/server'

const data = require('../assets/Data/data.json')

export async function GET() {
    return NextResponse.json(data)
}
