export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main id="main" className="project-route">
      {children}
    </main>
  );
}
