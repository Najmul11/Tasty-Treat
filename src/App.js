import {RouterProvider} from 'react-router-dom'
import { router } from './router/Routes';
import './styles/app.scss'
import './styles/Nav.scss'
import './styles/Home.scss'
import './styles/Founder.scss'
import './styles/Menu.scss'
import './styles/Footer.scss'
import './styles/Contact.scss'
import './styles/About.scss'
import './styles/Cart.scss'
import './styles/Shipping.scss'
import './styles/ConfirmOrder.scss'
import './styles/PaymentSuccess.scss'
import './styles/Login.scss'
import './styles/Profile.scss'
import './styles/MyOrders.scss'
import './styles/Dashboard.scss'








function App() {
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
