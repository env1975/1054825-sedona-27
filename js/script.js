function change(id, start, end, step) {
    let element = document.getElementById(id);
    let num = parseInt(element.value);
    num += step;
    if (num < start || num > end)
        return;
    element.value = num;
}