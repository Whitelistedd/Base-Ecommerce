import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ScrollSaveProps } from './Scrollsave.model'

const ScrollToTop: React.FC<ScrollSaveProps> = ({ children }) => {
  const router = useRouter()

  /* заставит окно подниматься при посещении страницы */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [router.pathname])

  return <>{children}</>
}

export default ScrollToTop
