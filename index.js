//Bài tập 1: Tính tiền lương nhân viên
document.getElementById("submit").onclick = function () {
  // Input: lấy giá trị  input  số ngày làm việc và lương ngày
  let soNgayLam = +document.getElementById("so_ngay_lam").value;
  let luongNgay = +document.getElementById("luong_1_ngay").value;

  //Output: In ra kết quả lương của nhân viên
  let luong = (soNgayLam * luongNgay).toLocaleString();
  document.getElementById("message").innerHTML = `${luong} VND`;
};

//Bài tập 2: Tính giá trị trung bình của 5 số thực

document.getElementById("submit_2").onclick = function () {
  //Input: lấy giá trị input nhập vào của 5 số thực
  let number_1 = +document.getElementById("number_1").value;
  let number_2 = +document.getElementById("number_2").value;
  let number_3 = +document.getElementById("number_3").value;
  let number_4 = +document.getElementById("number_4").value;
  let number_5 = +document.getElementById("number_5").value;

  //Output: Kết quả trung bình cộng của 5 số thực đã nhập
  let average = (number_1 + number_2 + number_3 + number_4 + number_5) / 5;
  document.getElementById("message_2").innerHTML = average;
};

//Bài tập 3: Tính số tiền USD quy đổi sang VND
document.getElementById("submit_3").onclick = function () {
  //Input: lấy gía trị input nhập vào số tiền USD
  let soTienUsd = +document.getElementById("money").value;

  // Output: Số tiền được quy đổi sang VNĐ
  const GIA_USD = 23500;

  let quyDoi = soTienUsd * GIA_USD;

  document.getElementById(
    "message_3"
  ).innerHTML = `${soTienUsd.toLocaleString()}$ = ${quyDoi.toLocaleString()} VND`;
};

//Bài tập 4: Tính diện tích và chu vi hình chữ nhật
document.getElementById("submit_4").onclick = function () {
  //Input: lấy giá trị input nhập vào chiều dài và chiều rộng của hình chữ nhật
  let chieuDai = +document.getElementById("chieu_dai").value;
  let chieuRong = +document.getElementById("chieu_rong").value;

  //Output: Kết quả chu vi và diện tích hình chữ nhật
  let chuVi = (chieuDai + chieuRong) * 2;
  let dienTich = chieuDai * chieuRong;

  document.getElementById(
    "message_4"
  ).innerHTML = `Diện tích: ${dienTich}, Chu vi: ${chuVi}`;
};

//Bài tập 5: Tính tổng 2 ký số
document.getElementById("submit_5").onclick = function () {
  //Input: Lấy giá trị input nhập vào 1 số có 2 ký số
  let n = document.getElementById("number_6").value;

  //Output: Kết quả tổng của 2 ký số
  let so_hang_chuc = Math.floor(n / 10);
  let so_hang_dv = Math.floor(n % 10);

  let tong = so_hang_chuc + so_hang_dv;

  document.getElementById("message_5").innerHTML = `Tổng 2 ký số là: ${tong}`;
};
