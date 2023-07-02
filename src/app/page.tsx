import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';

export default function Home() {
  return (
    <main className="grid grid-cols-9 lg:max-w-7xl mx-auto max-h-screen overflow-hidden">
      <Sidebar />
      <Feed />
      <Widgets />
    </main>
  );
}
