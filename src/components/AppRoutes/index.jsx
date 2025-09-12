import { HashRouter, Routes, Route } from 'react-router';
import Profile from '../../pages/Profile';
import ModalDemo from '../../pages/ModalDemo';
import ScrollDemo from '../../pages/ScrollDemo';
import Home from '../../pages/Home';
import DefaultLayout from '../../layouts/DefaultLayout';

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal-demo" element={<ModalDemo />} />
                    <Route path="/scroll-demo" element={<ScrollDemo />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;