import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './pages/List.jsx';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<List />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;