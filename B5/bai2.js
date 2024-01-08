function kiemTraChanLe(number) {
    if (isNaN(number)) {
        alert("Vui lòng nhập một số.");
    } else if (number % 2 === 0) {
        alert("Số " + number + " là số chẵn");
    } else {
        alert("Số " + number + " là số lẻ");
    }
}