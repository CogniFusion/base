import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    return NextResponse.json({ msg: 'Hello from server' })
}

export async function POST(req: Request) {
    const { prompt } = await req.json()
    console.log(prompt)
    return new Response(prompt)

}