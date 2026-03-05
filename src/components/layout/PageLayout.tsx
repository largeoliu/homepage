interface PageLayoutProps {
  children: React.ReactNode
  className?: string
}

const PageLayout = ({ children, className = "min-h-screen bg-black flex flex-col justify-between" }: PageLayoutProps) => {
  return (
    <main className={className}>
      {children}
    </main>
  )
}

export default PageLayout
