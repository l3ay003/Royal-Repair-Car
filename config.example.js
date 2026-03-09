// ============================================================
//  config.example.js — ไฟล์ตัวอย่างสำหรับทีม
//  ✅ push ขึ้น GitHub ได้ (ไม่มี key จริง)
//  📋 วิธีใช้: คัดลอกไฟล์นี้ → เปลี่ยนชื่อเป็น config.js → ใส่ค่าจริง
// ============================================================

const APP_CONFIG = {
  // LINE LIFF ID — จาก LINE Developers Console > LIFF
  LIFF_ID: 'YOUR_LIFF_ID',

  // Google Apps Script Web App URL
  // Deploy > New Deployment > Web App > Copy URL
  GAS_URL: 'YOUR_GAS_URL',

  // API Secret — ต้องตรงกับ API_SECRET ใน Code.gs
  // แนะนำ: สร้างรหัสสุ่ม 16+ ตัวอักษร มีตัวเลข + สัญลักษณ์
  API_SECRET: 'YOUR_API_SECRET_KEY',
};
