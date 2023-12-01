window.onload = function () {
    calcTime()
}


dollar_to_yen_rate = 149.79
euro_to_yen_rate = 149.79
X_to_yen_rate = 100  // その他地域の為替レート

function clearNumber(formnum) {
    formnum.reset();
    calcSum();
}

function calcTime() {
    var ret = "";
    let area = input_form.area.value;
    let length_stay = parseInt(input_form.length_stay.value);
    let period = parseInt(input_form.period.value);
    let flight_fare = parseInt(input_form.flight_fare.value);
    let registration_fee = parseInt(input_form.registration_fee.value);
    let transportation = parseInt(input_form.transportation.value);
    let insurance = parseInt(input_form.insurance.value);
    let eSIM = parseInt(input_form.eSIM.value);
    let VISA = parseInt(input_form.VISA.value);


    daily_pay = parseInt(calc_daily_pay(area, period));
    accommodation_fee = parseInt(calc_accommodation_fee(area, length_stay));

    ret += '############################################';
    ret += "\n"
    ret += '日当　　　　　　　：';
    ret += daily_pay;
    ret += "円\n"
    ret += '宿泊費（基準値）　：';
    ret += accommodation_fee;
    ret += "円\n"
    ret += '航空券　　　　　　：';
    ret += flight_fare;
    ret += "円\n"
    ret += 'その他交通費　　　：';
    ret += transportation;
    ret += "円\n"
    ret += '学会参加費　　　　：';
    ret += registration_fee;
    ret += "円\n"
    ret += '海外旅行保険　　　：';
    ret += insurance;
    ret += "円\n"
    ret += 'eSIM代　　 　　 　：';
    ret += eSIM;
    ret += "円\n"
    ret += '電子ビザ発行手数料：';
    ret += VISA;
    ret += "円\n"
    ret += '--------------------------------------------';
    ret += "\n"
    ret += '合計　　　　　　　：';
    ret += daily_pay + accommodation_fee + flight_fare + registration_fee + insurance + eSIM + VISA + transportation;
    ret += "円\n"
    ret += '############################################';
    ret += "\n"

    input_form.result.value = ret;

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