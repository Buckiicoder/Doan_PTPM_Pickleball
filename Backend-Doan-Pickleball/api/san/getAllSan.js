import { db } from "../../config/db.js";

export async function getAllSan(req, res) {
  try {
    // 1️⃣ Lấy tất cả thông tin sân
    const [sanRows] = await db.execute(`
      SELECT MaSan, TenSan, LoaiSan, GiaThueTruoc16, GiaThueSau16, TrangThai
      FROM tbl_san
    `);

    // 2️⃣ Lấy toàn bộ thông tin đặt sân (đặt theo ngày giảm dần)
    const [datSanRows] = await db.execute(`
      SELECT 
        MaDatSan, MaSan, MaKH, MaNV, NgayLap, GioVao, GioRa,
        TongGio, TongTien, GiamGia, TongTienThuc, 
        GhiChu, TrangThai, LoaiDat
      FROM tbl_datsan
      ORDER BY NgayLap DESC
    `);

    // 3️⃣ Gom dữ liệu theo từng sân
    const result = sanRows.map((san) => {
      const bookedSlots = datSanRows
        .filter((ds) => ds.MaSan === san.MaSan)
        .map((ds) => ({
          MaDatSan: ds.MaDatSan,
          MaKH: ds.MaKH,
          MaNV: ds.MaNV,
          NgayLap: ds.NgayLap,
          GioVao: ds.GioVao,
          GioRa: ds.GioRa,
          TongGio: ds.TongGio,
          TongTien: ds.TongTien,
          GiamGia: ds.GiamGia,
          TongTienThuc: ds.TongTienThuc,
          GhiChu: ds.GhiChu,
          TrangThai: ds.TrangThai,
          LoaiDat: ds.LoaiDat,
        }));

      return {
        MaSan: san.MaSan,
        TenSan: san.TenSan,
        LoaiSan: san.LoaiSan,
        GiaThueTruoc16: san.GiaThueTruoc16,
        GiaThueSau16: san.GiaThueSau16,
        TrangThai: san.TrangThai,
        bookedSlots, // danh sách các khung giờ đã được đặt
      };
    });

    // 4️⃣ Trả về kết quả JSON
    res.json(result);
  } catch (err) {
    console.error("❌ Lỗi khi lấy danh sách sân:", err);
    res.status(500).json({
      message: "Lỗi khi lấy danh sách sân",
      error: err.message,
    });
  }
}
