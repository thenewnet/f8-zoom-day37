import { HashRouter, Routes, Route } from 'react-router';
import Profile from '@/pages/Profile';
import ModalDemo from '@/pages/ModalDemo';
import ScrollDemo from '@/pages/ScrollDemo';
import Home from '@/pages/Home';
import DefaultLayout from '@/layouts/DefaultLayout';
import PerformanceDemo from '@/pages/PerformanceDemo';
import FocusDemo from '@/pages/FocusDemo';
import HOCDemo from '@/pages/HOCDemo';
import RenderPropsDemo from '@/pages/RenderPropsDemo';
import CustomHooksDemo from '@/pages/CustomHooksDemo';

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal-demo" element={<ModalDemo />} />
                    <Route path="/scroll-demo" element={<ScrollDemo />} />
                    <Route path="/performance-demo" element={<PerformanceDemo />} />
                    <Route path="/focus-demo" element={<FocusDemo />} />
                    <Route path="/hoc-demo" element={<HOCDemo />} />
                    <Route path="/render-props-demo" element={<RenderPropsDemo />} />
                    <Route path="/custom-hooks-demo" element={<CustomHooksDemo />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;