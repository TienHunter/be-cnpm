import Joi from "joi";
import { Gender } from "../../constant.js";
const getList = {
   query: Joi.object({
      limit: Joi.number().integer().min(1).optional(),
      offset: Joi.number().integer().min(1).optional(),
      keyword: Joi.string().optional().allow(""),
      minAge: Joi.number().integer().min(0).optional(),
      maxAge: Joi.number().integer().min(0).optional(),
      gender: Joi.string()
         .valid(...Object.values(Gender))
         .optional(),
   }),
};
const getResidentByHouseholdCode = {
   params: Joi.object({
      householdCode: Joi.string().lowercase().required().trim(),
   }),
};
const getResidentByID = {
   params: Joi.object({
      residentID: Joi.number().positive().required(),
   }),
};
const createResident = {
   body: Joi.object({
      maNhanKhau: Joi.string().trim().optional().allow(""),
      hoTen: Joi.string().trim().optional().allow(""),
      bietDanh: Joi.string().trim().optional().allow(""),
      namSinh: Joi.string().trim().optional().allow(""),
      gioiTinh: Joi.string().trim().optional().allow(""),
      soCMT: Joi.string().trim().optional().allow(""),
      ngayCap: Joi.string().trim().optional().allow(""),
      noiCap: Joi.string().trim().optional().allow(""),
      noiSinh: Joi.string().trim().optional().allow(""),
      nguyenQuan: Joi.string().trim().optional().allow(""),
      danToc: Joi.string().trim().optional().allow(""),
      tonGiao: Joi.string().trim().optional().allow(""),
      quocTich: Joi.string().trim().optional().allow(""),
      soHoChieu: Joi.string().trim().optional().allow(""),
      noiThuongTru: Joi.string().trim().optional().allow(""),
      diaChiHienNay: Joi.string().trim().optional().allow(""),
      trinhDoHocVan: Joi.string().trim().optional().allow(""),
      trinhDoChuyenMon: Joi.string().trim().optional().allow(""),
      bietTiengDanToc: Joi.string().trim().optional().allow(""),
      trinhDoNgoaiNgu: Joi.string().trim().optional().allow(""),
      ngheNghiep: Joi.string().trim().optional().allow(""),
      noiLamViec: Joi.string().trim().optional().allow(""),
      tienAn: Joi.string().trim().optional().allow(""),
      ngayChuyenDen: Joi.string().trim().optional().allow(""),
      lyDoChuyenDen: Joi.string().trim().optional().allow(""),
      ngayChuyenDi: Joi.string().trim().optional().allow(""),
      lyDoChuyenDi: Joi.string().trim().optional().allow(""),
      diaChiMoi: Joi.string().trim().optional().allow(""),
      ghiChu: Joi.string().trim().optional().allow(""),
   }),
};
const updateResident = {
   params: Joi.object({
      residentID: Joi.number().integer().required(),
   }),
   body: Joi.object({
      maNhanKhau: Joi.string().trim().optional().allow(""),
      hoTen: Joi.string().trim().optional().allow(""),
      bietDanh: Joi.string().trim().optional().allow(""),
      namSinh: Joi.string().trim().optional().allow(""),
      gioiTinh: Joi.string().trim().optional().allow(""),
      soCMT: Joi.string().trim().optional().allow(""),
      ngayCap: Joi.string().trim().optional().allow(""),
      noiCap: Joi.string().trim().optional().allow(""),
      noiSinh: Joi.string().trim().optional().allow(""),
      nguyenQuan: Joi.string().trim().optional().allow(""),
      danToc: Joi.string().trim().optional().allow(""),
      tonGiao: Joi.string().trim().optional().allow(""),
      quocTich: Joi.string().trim().optional().allow(""),
      soHoChieu: Joi.string().trim().optional().allow(""),
      noiThuongTru: Joi.string().trim().optional().allow(""),
      diaChiHienNay: Joi.string().trim().optional().allow(""),
      trinhDoHocVan: Joi.string().trim().optional().allow(""),
      trinhDoChuyenMon: Joi.string().trim().optional().allow(""),
      bietTiengDanToc: Joi.string().trim().optional().allow(""),
      trinhDoNgoaiNgu: Joi.string().trim().optional().allow(""),
      ngheNghiep: Joi.string().trim().optional().allow(""),
      noiLamViec: Joi.string().trim().optional().allow(""),
      tienAn: Joi.string().trim().optional().allow(""),
      ngayChuyenDen: Joi.string().trim().optional().allow(""),
      lyDoChuyenDen: Joi.string().trim().optional().allow(""),
      ngayChuyenDi: Joi.string().trim().optional().allow(""),
      lyDoChuyenDi: Joi.string().trim().optional().allow(""),
      diaChiMoi: Joi.string().trim().optional().allow(""),
      ghiChu: Joi.string().trim().optional().allow(""),
   }),
};
export {
   getResidentByHouseholdCode,
   getResidentByID,
   createResident,
   updateResident,
   getList,
};
