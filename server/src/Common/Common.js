function RandomNumber(length) {
    // Kiểm tra nếu length > 0 để tránh lỗi
    if (length <= 0) {
      throw new Error('Length must be greater than 0');
    }
    
    // Tạo một số ngẫu nhiên có độ dài theo 'length'
    let randomNumber = Math.floor(Math.random() * Math.pow(10, length));
    
    // Đảm bảo rằng số có độ dài chính xác
    let result = randomNumber.toString();
  
    // Nếu số không có đủ độ dài, thêm số 0 vào đầu
    while (result.length < length) {
      result = '0' + result;
    }
  
    return parseInt(result);  // Chuyển đổi lại thành số nguyên
  }
  
  module.exports = { RandomNumber };
  