import { useAuth0 } from '@auth0/auth0-react';
import Chatra from '@chatra/chatra';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { useEffect, useState } from 'react';

import { PrivateRoute } from './components/private-routes';
import ScrollToTop from './components/Scrollsave';
import { CartPage } from './pages/CartPage';
import { Checkout } from './pages/Checkout';
import { Failed } from './pages/Failed';
import { HomePage } from './pages/HomePage';
import { Loading } from './pages/Loading';
import { Login } from './pages/Login';
import { PageNotFound } from './pages/PageNotFound';
import { ProductsList } from './pages/ProductsList';
import { Profile } from './pages/Profile';
import { SingleProduct } from './pages/SingleProduct';
import { Success } from './pages/Success';
import { Popup } from './components/Popup/Popup';

let ChatraConfig = {
  ID: "iB5hukYTSofAHKpRR"
}

const queryClient = new QueryClient()

function App() {

  const { isLoading } = useAuth0();

  const [showPopup, setShowPopup] = useState(false)

  Chatra('init', ChatraConfig)

  useEffect(() => {
    setShowPopup(true)
  }, [])

  const ClosePopup = () => {
    setShowPopup(false)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop>
          {showPopup && <Popup ClosePopup={ClosePopup} />}
          <Routes>
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            {/* все страницы внутри PrivateRoute потребуют входа пользователя */}
            <Route element={<PrivateRoute />} >
              <Route path="profile" element={<Profile />} />
            </Route>
            <Route path="/order/success" element={<Success />} />
            <Route path="/order/fail" element={<Failed />} />
            <Route path="/order/loading" element={<Loading />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/products/all" element={<ProductsList />} />
            <Route path="/products/:category" element={<ProductsList />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
