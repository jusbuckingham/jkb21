import { NextResponse } from 'next/server';
import { getSignedUrlForContent } from '@/utils/s3';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const contentId = params.id;

    // Fetch content metadata from your database
    // Example: Fetch the S3 key for the content
    const content = {
        id: contentId,
        title: 'Sample Video',
        type: 'video',
        key: 'videos/sample.mp4', // S3 key
    };

    // Generate signed URL
    const signedUrl = await getSignedUrlForContent(content.key);

    return NextResponse.json({
        ...content,
        url: signedUrl,
    });
}