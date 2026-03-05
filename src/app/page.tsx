import { PageLayout } from '@/components/layout'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <PageLayout>
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            本网站正在建设中...
          </h1>
          <p className="text-xl text-gray-400">
            网站内容正在努力丰富中，敬请期待。
          </p>
        </div>
      </div>
      <Footer />
    </PageLayout>
  )
}
