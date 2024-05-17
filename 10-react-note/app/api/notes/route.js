import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
const prisma = new PrismaClient()

const NoteSchema = z.object({
    text: z.string().max(100),
    status: z.number().int().min(0).max(1)
})

export async function GET(request) {
    const notes = await prisma.note.findMany()
    console.log(notes)
    return NextResponse.json(notes, { status: 200 })
}
export async function POST(request) {
    const body = await request.json()
    console.log(body)
    const note = NoteSchema.safeParse(body)
    if (!note.success) {
        return NextResponse.json(note.error, { status: 400 })
    }
    const savedNote = await prisma.note.create({ data: body })
    return NextResponse.json(savedNote, { status: 201 })

}