for ( let i = 2022; i >= 1930; i--){
    var option = `<option value="${i}">${i}</option>`
    $('#year').append(option)
}

for ( let i = 1; i <= 12; i++){
    var option = `<option value="${i}">${i}</option>`
    $('#month').append(option)
}

for ( let i = 1; i <= 31; i++){
    var option = `<option value="${i}">${i}</option>`
    $('#day').append(option)
}
