import React from 'react';

export type Language = 'en' | 'ar';

export type NavItem = {
    id: string;
    label: string; // We will handle translation in the component
    icon: React.ReactNode;
};

export type Project = {
    id: number;
    title: string;
    category: string;
    image: string;
    url: string;
};

export type Service = {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
};