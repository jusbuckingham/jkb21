import React, { useEffect, useState } from 'react';

interface ContentItem {
    id: number;
    title: string;
    type: 'video' | 'audio' | 'image' | 'pdf';
    url: string;
}

const ContentList: React.FC = () => {
    const [content, setContent] = useState<ContentItem[]>([]);

    useEffect(() => {
        const fetchContent = async () => {
            const res = await fetch('/api/content');
            const data = await res.json();
            setContent(data);
        };

        fetchContent();
    }, []);

    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-6">Available Content</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {content.map((item) => (
                    <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-4">
                            <h2 className="font-semibold text-lg mb-2">{item.title}</h2>
                            {item.type === 'video' && <video controls src={item.url} className="w-full"></video>}
                            {item.type === 'audio' && <audio controls src={item.url} className="w-full"></audio>}
                            {item.type === 'image' && <img src={item.url} alt={item.title} className="w-full" />}
                            {item.type === 'pdf' && (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                    View PDF
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ContentList;