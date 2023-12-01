// window.onload = function () {
//     setLunchTime()
// }


dollar_to_yen_rate = 149.79
euro_to_yen_rate = 149.79
X_to_yen_rate = 100  // その他地域の為替レート

function clearNumber(formnum) {
    formnum.reset();
    calcSum();
}

function calcTime(formnum) {
    var ret = "";
    let area = formnum.area.value;
    let length_stay = formnum.length_stay.value;
    let period = formnum.period.value;
    let flight_fare = formnum.flight_fare.value;
    let registration_fee = formnum.registration_fee.value;
    let transportation = formnum.transportation.value;
    let insurance = formnum.insurance.value;
    let eSIM = formnum.eSIM.value;
    let VISA = formnum.VISA.value;


    daily_pay = parseInt(calc_daily_pay(area, period));
    accommodation_fee = parseInt(calc_accommodation_fee(area, length_stay));

    ret += '############################################';
    ret += '日当　　　　　　　：', daily_pay;
    ret += '宿泊費　　　　　　：', accommodation_fee;
    ret += '航空券　　　　　　：', flight_fare;
    ret += 'その他交通費　　　：', transportation;
    ret += '学会参加費　　　　：', registration_fee;
    ret += '海外旅行保険　　　：', insurance;
    ret += 'eSIM代　　 　　 　：', eSIM;
    ret += '電子ビザ発行手数料：', VISA;
    ret += '--------------------------------------------';
    ret += '合計　　　　　　　：', daily_pay + accommodation_fee + flight_fare + registration_fee + insurance + eSIM + VISA + transportation;
    ret += '############################################';

    sumForm.result.value = ret;

}

function calc_daily_pay(area, period) {

    // 日当の上限額

    if (area == 'usa') {
        return (100 * (period - 1) + 50) * dollar_to_yen_rate
    } else if (area == 'eu') {
        return (100 * (period - 1) + 50) * euro_to_yen_rate
    } else {
        return (50 * (period - 1) + 25) * X_to_yen_rate
    }
}

function calc_accommodation_fee(area, period) {
    if (area == 'usa') {
        return 250 * period * dollar_to_yen_rate
    } else if (area == 'eu') {
        return 200 * period * euro_to_yen_rate
    } else {
        return 150 * period * X_to_yen_rate
    }
}