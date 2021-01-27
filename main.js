function zeros(str, lng) {
    let factlength = str.length;
    if (factlength < lng) {
        for (var i = 0; i < (lng - factlength); i++) {
            str = '0' + str;
        }
    }
    return str;
}

function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function generate() {
    let birth = zeros(String(Math.floor((Math.random() * 16601)) + 20000), 5);
    let poryadk = zeros(String(Math.floor((Math.random() * 9000))), 4);
    let result = birth + poryadk;
    let kontr = String(((
        (-1) * result[0] + 5 * result[1] + 7 * result[2] +
        9 * result[3] + 4 * result[4] + 6 * result[5] +
        10 * result[6] + 5 * result[7] + 7 * result[8]
    ) % 11) % 10);
    result = result + kontr;

    const gender = result[8] % 2 ? 'Man' : 'Woman';

    const startDate = new Date('1899-12-31').getTime();
    const addTime = Math.floor(result / 100000) * 86400000;
    const birthday = new Date(startDate + addTime);

    document.getElementById('code').innerText = result;
    document.getElementById('gender').innerText = gender;
    document.getElementById('age').innerText = calculateAge(birthday);
    document.getElementById('birthday').innerText = birthday.toDateString();
}


generate();
