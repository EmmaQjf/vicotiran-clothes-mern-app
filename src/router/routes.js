import HomePage from '../pages/HomePage/HomePage';
import ClothePage from '../pages/ClothePage/ClothePage';
import OrderHistoryPage from '../pages/OrderHistoryPage/OrderHistoryPage';

const routes = [
	{
		Component:HomePage,
		key: 'Home',
		path: '/'
	},
    {
		Component: ClothePage,
		key: 'Clothe',
		path: '/clothe'
	},
	{
		Component: OrderHistoryPage,
		key: 'OrderHistory',
		path: '/orders'
	}
];

export default routes;
