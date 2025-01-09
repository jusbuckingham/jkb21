import { Signer } from 'aws-cloudfront-sign';

export function getCloudFrontSignedUrl(key: string): string {
    const signer = new Signer(process.env.CLOUDFRONT_KEY_PAIR_ID!, process.env.CLOUDFRONT_PRIVATE_KEY!);

    const url = signer.getSignedUrl({
        url: `https://${process.env.CLOUDFRONT_DOMAIN}/${key}`,
        expires: Math.floor(Date.now() / 1000) + 3600, // 1 hour
    });

    return url;
}