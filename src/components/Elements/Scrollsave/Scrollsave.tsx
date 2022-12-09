import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { ScrollSaveProps } from './Scrollsave.model'

const ScrollToTop: React.FC<ScrollSaveProps> = ({ children }) => {
	const pathname = usePathname()

	/* заставит окно подниматься при посещении страницы */
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return <>{children}</>
}

export default ScrollToTop
