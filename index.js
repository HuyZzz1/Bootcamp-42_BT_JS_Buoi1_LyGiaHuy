//Bài tập 1: Tính tiền lương nhân viên
// Input: Nhập vào số ngày làm việc:
let soNgayLam = 30;

//Output: kết quả lương của nhân viên
const LUONG_1_NGAY = 100000;

let luong = soNgayLam * LUONG_1_NGAY;

console.log("Lương nhân viên:", luong + " VND");

//Bài tập 2: Tính giá trị trung bình của 5 số thực
//Input: nhập vào 5 số thực
let a = 10;
let b = 20;
let c = 30;
let d = 40;
let e = 50;

//Output: Kết quả trung bình cộng của 5 số thực đã nhập
let sum = a + b + c + d + e;
let average = sum / 5;

console.log("Trung bình cộng của 5 số  là:", average);

//Bài tập 3: Tính số tiền USD quy đổi sang VND
//Input: nhập vào số tiền USD
let soTienUsd = 10;

// Output: Số tiền được quy đổi sang VNĐ
const GIA_USD = 23500;

let quyDoi = soTienUsd * GIA_USD;

console.log("Số tiền sau khi quy đổi từ USD sang VND là:", quyDoi + " VND");

//Bài tập 4: Tính diện tích và chu vi hình chữ nhật
//Input: Nhập vào chiều dài và chiều rộng của hình chữ nhật
let chieuDai = 10;
let chieuRong = 5;

//Output: Kết quả chu vi và diện tích hình chữ nhật
let chuVi = (chieuDai + chieuRong) * 2;
let dienTich = chieuDai * chieuRong;

console.log("Chu vi hình chữ nhật là: ", chuVi);
console.log("Diện tích hình chữ nhật là: ", dienTich);

//Bài tập 5: Tính tổng 2 ký số
//Input: Nhập vào 1 số có 2 ký số
let m = 19;

//Output: Kết quả tổng của 2 ký số
let so_hang_chuc = Math.floor(m / 10);
let so_hang_dv = Math.floor(m % 10);

let tong = so_hang_chuc + so_hang_dv;

console.log("Tổng 2 ký số là: ", tong);
