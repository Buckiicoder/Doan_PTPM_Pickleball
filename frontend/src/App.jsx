import './App.css'
import { Routes, Route } from 'react-router'
import { NhapHang } from './pages/managers/NhapHang'
import { NhanVien } from './pages/managers/NhanVien'
import { DatSan } from './pages/managers/DatSan'
import { XacNhanDatSan } from './pages/managers/XacNhanDatSan'

function App() {

  return (
    <Routes>
      <Route index element={<DatSan />} />
      <Route path="nhanvien" element={<NhanVien />} />
      <Route path="nhaphang" element={<NhapHang />} />
      <Route path="xacnhansan" element={<XacNhanDatSan />} />
    </Routes>
  )
}

export default App
