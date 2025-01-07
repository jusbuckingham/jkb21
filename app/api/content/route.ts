import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getSignedUrlForContent } from '@/lib/s3';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const content = await prisma.content.findUnique({ where: { id: parseInt(params.id) } });

    if (!content) {
        return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }

    const signedUrl = await getSignedUrlForContent(content.key);

    return NextResponse.json({ ...content, url: signedUrl });
}