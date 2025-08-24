import ReactDOM from 'react-dom'
import App from './App.tsx'
import './index.css'
import 'leaflet/dist/leaflet.css';

// @ts-ignore - React 19 compatibility
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<App />)
