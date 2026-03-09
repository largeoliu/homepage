import { PageLayout } from '@/components/layout'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <PageLayout>
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            6号的思考
          </h1>
          <p className="text-xl text-gray-400">
            思考、记录与分享
          </p>
        </div>
      </div>
      <Footer />
    </PageLayout>
  )
}
