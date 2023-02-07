import NguoiDung from './Pages/Admin/quanLy/NguoiDung'
import CongViec from './Pages/Admin/quanLy/CongViec'
const router = {
    admin: [
        {
            path: 'nguoi_dung',
            element: <NguoiDung />,
            title: 'Quản lý người dùng',
            key: 'nguoi_dung'
        },
        {
            path:'cong_viec',
            element: <CongViec />,
            title: 'Quản lý công việc',
            key: 'cong_viec'
        }
    ]
}
export default router