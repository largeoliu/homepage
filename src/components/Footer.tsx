const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900/50 backdrop-blur-sm border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-sm text-gray-400">
          <p>
            Copyright &copy; {currentYear} 版权所有
          </p>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >

              蜀ICP备2026009671号

            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center"
            >
              {/* 这里通常会放置一个公安的图标，这里为了简单暂时省略或使用占位 */}
              公安备案号 申请中

            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
