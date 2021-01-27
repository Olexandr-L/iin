function zeros(str, lng) {
    var factlength = str.length;
    if (factlength < lng) {
        for (var i = 0; i < (lng - factlength); i++) {
            str = '0' + str;
        }
    }
    return str;
}

function generate() {
    var birth = zeros(String(Math.floor((Math.random() * 16601)) + 20000), 5);
    var poryadk = zeros(String(Math.floor((Math.random() * 9000))), 4);
    var rezult = birth + poryadk;
    var kontr = String(((
        (-1) * rezult[0] + 5 * rezult[1] + 7 * rezult[2] +
        9 * rezult[3] + 4 * rezult[4] + 6 * rezult[5] +
        10 * rezult[6] + 5 * rezult[7] + 7 * rezult[8]
    ) % 11) % 10);
    rezult = rezult + kontr;

    console.log(rezult);

    return rezult;
}