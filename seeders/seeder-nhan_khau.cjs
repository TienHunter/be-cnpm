"use strict";
// const { hashString } = require("../src/middlewares/bcrypt.cjs");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
   up: async (queryInterface) =>
      queryInterface.bulkInsert(
         "Resident",
         [
            {
               maNhanKhau: null,
               hoTen: "Trinh Văn An",
               bietDanh: "",
               namSinh: new Date("1990-12-07"),
               gioiTinh: "Nam",
               noiSinh: null,
               nguyenQuan: "Hà Nội",
               danToc: "Kinh",
               tonGiao: "Không",
               quocTich: "việt Nam",
               soHoChieu: "",
               noiThuongTru: "Số 1 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội",
               diaChiHienNay: "Số 1 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội",
               trinhDoHocVan: "12/12 chính quy",
               trinhDoChuyenMon: "thạc sỹ",
               bietTiengDanToc: "không",
               trinhDoNgoaiNgu: "Anh trình độ B",
               ngheNghiep: "Giáo viên",
               noiLamViec: "Trường THCS Chu Văn An",
               tienAn: null,
               ngayChuyenDen: null,
               lyDoChuyenDen: null,
               ngayChuyenDi: null,
               lyDoChuyenDi: null,
               diaChiMoi: null,
               ngayTao: new Date("2019-12-08"),
               idNguoiTao: 1,
               ngayXoa: null,
               idNguoiXoa: null,
               lyDoXoa: null,
               ghiChu: null,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               maNhanKhau: null,
               hoTen: "Trần Thanh Duyên",
               bietDanh: "",
               namSinh: new Date("1997-12-23"),
               gioiTinh: "Nữ",
               noiSinh: null,
               nguyenQuan: "Hải Phòng",
               danToc: "Kinh",
               tonGiao: "Không",
               quocTich: "việt Nam",
               soHoChieu: "",
               noiThuongTru:
                  "Số 3, đường Đình Đông, phường Đình Đông, quận Ngô Quyền, Hải Phòng",
               diaChiHienNay: "Số 2 Tạ Quang Bưu, Hai Bà Trưng, Hà Nội",
               trinhDoHocVan: "12/12 chính quy",
               trinhDoChuyenMon: "thạc sỹ",
               bietTiengDanToc: "không",
               trinhDoNgoaiNgu: "Anh trình độ D",
               ngheNghiep: "Nhân viên văn phòng",
               noiLamViec: "Công ty ABC",
               tienAn: null,
               ngayChuyenDen: null,
               lyDoChuyenDen: null,
               ngayChuyenDi: null,
               lyDoChuyenDi: null,
               diaChiMoi: null,
               ngayTao: new Date("2019-12-08"),
               idNguoiTao: 1,
               ngayXoa: null,
               idNguoiXoa: null,
               lyDoXoa: null,
               ghiChu: null,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      ),

   async down(queryInterface, Sequelize) {
      /**
       * Add commands to revert seed here.
       *
       * Example:
       * await queryInterface.bulkDelete('People', null, {});
       */
   },
};
