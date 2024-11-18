import SidebarLayout from "./components/SidebarLayout";

export default function Home() {
  return (
    <main className="flex flex-col h-screen space-y-4">
      <SidebarLayout>
        <div>
          {/* Add your project grid here */}
        </div>
      </SidebarLayout>
    </main>
  );
}