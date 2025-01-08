'use client';

import { Header } from '@/components/layout/Header';
import Image from "next/image";

export default function HomePage() {
  const handleAddTask = () => {
    // Implementation to be added in future story
    console.log('Add task clicked');
  };

  const handleEditTask = () => {
    // Implementation to be added in future story
    console.log('Edit task clicked');
  };

  return (
    <>
      <Header 
        onAddTask={handleAddTask}
        onEditTask={handleEditTask}
      />
      <main className="min-h-screen pt-16 px-4">
        {/* Content will be added in future stories */}
      </main>
    </>
  );
}
