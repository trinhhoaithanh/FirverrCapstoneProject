import NguoiDung from './Pages/Admin/quanLy/NguoiDung'
import CongViec from './Pages/Admin/quanLy/CongViec'
import LoaiCongViec from './Pages/Admin/quanLy/LoaiCongViec'
import ThueCongViec from './Pages/Admin/quanLy/ThueCongViec.jsx'
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
        },
        {
            path:'loai_cong_viec',
            element: <LoaiCongViec />,
            title: 'Quản lý loại công việc',
            key: 'loai_cong_viec'
        },
        {
            path:'dich_vu',
            element: <ThueCongViec />,
            title: 'Quản lý dịch vụ',
            key: 'dich_vu'
        },
    ]
}
export default router