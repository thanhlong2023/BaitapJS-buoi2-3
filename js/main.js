/**
 * ! Bài 1 Tính tiền lương nhân viên
 * Viết chương trình tính tiền lương nhân viên.
 * Lương 1 ngày 100.000
 * Cho người dùng nhập vào số ngày làm.
 * Công thức tính lương: Lương 1 ngày * số ngày làm.
 * 
 */
document.getElementById('btnTinhLuong').onclick = function () {
    // input 
    var soNgayLam = Number(document.getElementById('soNgayLam').value);
    var luongMotNgay = Number(document.getElementById('luongMotNgay').value);
    // output 
    var tongLuong = 0;
    //progress
    tongLuong = soNgayLam * luongMotNgay;
    //in ra màn hình 
    document.getElementById('inTienLuong').innerHTML = "Tiền lương của bạn là: " + tongLuong.toLocaleString() + "  VND đồng";
}

/**
 * ! Bài 2: Tính giá trị trung bình
 * Viết chương trình nhập vào 5 số thực.
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình.
 * 
 */
document.getElementById('btnTB').onclick = function () {
    //input
    var soThuNhat = document.getElementById('soThu1').value;
    var soThuHai = document.getElementById('soThu2').value;
    var soThuBa = document.getElementById('soThu3').value;
    var soThuTu = document.getElementById('soThu4').value;
    var soThuNam = document.getElementById('soThu5').value;
    // output 
    var trungBinh = 0;
    //progress
    trungBinh = (Number(soThuNhat) + Number(soThuHai) + Number(soThuBa) + Number(soThuTu) + Number(soThuNam)) / 5;
    //in ra màn hình
    document.getElementById('inTB').innerHTML = "Giá trị trung bình là: " + trungBinh;
}
/**
 * !Bài 3: Quy đổi tiền
 * Giá USD hiện nay đang là 23.500 vnd
 * Viết chương trình quy đổi từ Usd sang vnd
 * Cho người dùng nhập vào số tiền USD
 * Tính và xuất ra số tiền sau quy đổi VND.
 */
document.getElementById('btnVND').onclick = function () {
    // input 
    var tienDoi = document.getElementById('soTienQuyDoi').value;
    const giaUSD = 23500;
    // output 
    var tienVND;
    // progress 
    tienVND = Number(tienDoi) * giaUSD;
    // in ra màn hình 
    document.getElementById('inVND').innerHTML = tienVND.toLocaleString('vi', { style: 'currency', currency: 'VND' });

}
/**
 * !Bài 4: Tính diện tích, chu vi hình chữ nhật
 * 
 */
document.getElementById('btnBai4').onclick = function () {
    // input 
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    // output
    var chuVi = 0;
    var dienTich = 0;
    //progress
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    dienTich = Number(chieuDai) * Number(chieuRong);
    // in ra màn hình
    document.getElementById('inDienTich').innerHTML = "Diện tích: " + dienTich + "<br>Chu vi :" + chuVi;
}
/**
 * !Bài 5 : Tính tổng 2 kí số
 */
document.getElementById('btnBai5').onclick = function () {
    //input : số có dạng AB
    var so = Number(document.getElementById('kySo').value);
    //output : Tổng của A+B
    var tongKySo = 0;
    //progress
    // tách số hàng chục
    var hangChuc = so / 10;
    //tacgs số hàng đơn vị
    var donVi = so % 10;
    tongKySo = Math.floor(hangChuc) + donVi;
    console.log(hangChuc);
    document.getElementById('inKySo').innerHTML = "Tổng ký số: " + tongKySo;
}