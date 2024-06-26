import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
const prisma = new PrismaClient()

const NoteSchema = z.object({
    text: z.string().max(100),
    status: z.number().int().min(0).max(1)
})


const NoteUpdateSchema = z.object({
    id: z.number().int(),
    text: z.string().max(100),
    status: z.number().int().min(0).max(1)
})

const NoteDeleteSchema = z.object({
    id: z.number().int()
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

export async function UPDATE(request) {
    const body = await request.json()
    console.log(body)
    const note = NoteUpdateSchema.safeParse(body)
    if (!note.success) {
        return NextResponse.json(note.error, { status: 400 })
    }
    const result = await prisma.note.update({ where: { id: body.id }, data: body })
    return NextResponse.json(result, { status: 200 })

}

export async function DELETE(request) {
    const body = await request.json()
    console.log(body)
    const note = NoteDeleteSchema.safeParse(body)
    if (!note.success) {
        return NextResponse.json(note.error, { status: 400 })
    }
    const result = await prisma.note.delete({ where: { id: body.id } })
    console.log(result)
    return NextResponse.json({ message: 'Note deleted', result }, { status: 200 })

}