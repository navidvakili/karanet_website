
import React from 'react';

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  heroImage: string;
  longDescription: string;
  process: { title: string; description: string }[];
  features: string[];
}
