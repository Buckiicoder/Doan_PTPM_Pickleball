import './App.css'
import { Routes, Route } from 'react-router'
import { NhapHang } from './pages/managers/NhapHang'
import { NhanVien } from './pages/managers/NhanVien'
import { DatSan } from './pages/managers/DatSan'
import { XacNhanDatSan } from './pages/managers/XacNhanDatSan'
import { QlyXeVe } from './pages/managers/QlyXeVe'
import { ThemXeVe } from './pages/managers/ThemXeVe'
import { TTXeVe } from './pages/managers/TTXeVe'

function App() {

  return (
    <Routes>
      <Route index element={<DatSan />} />
      <Route path="nhanvien" element={<NhanVien />} />
      <Route path="nhaphang" element={<NhapHang />} />
      <Route path="xacnhansan" element={<XacNhanDatSan />} />
      <Route path="xeve" element={<QlyXeVe />} />
      <Route path="themxeve" element={<ThemXeVe />} />
      <Route path="ttxeve" element={<TTXeVe />} />
    </Routes>
  )
}

export default App
