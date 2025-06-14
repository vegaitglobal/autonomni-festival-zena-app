'use client';

import { fetchContactPage } from '@/services/pageService';

import { useResource } from '@/hooks/usePage';
import { ContactPage } from '@/types/apiModels/ContactPage';
import Image from 'next/image';
import './style.scss';
import Markdown from 'react-markdown'

export default function Contact() {
    const { content, loading, error } = useResource<ContactPage>(fetchContactPage);

    console.log(content);

    if (loading) {
        return <div>Loading...</div>;   
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!content) {
        return <div>No content available</div>;
    }

    return (
        <div className="outer__wrapper">
            <div className="container bg">
                <div className="wrapper">
                    <h1 className="title">{content.components[0].title}</h1>
                    <Markdown>{content.components[0].text}</Markdown>
                </div>
            </div>
        </div>
    );
}
