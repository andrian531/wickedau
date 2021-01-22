function switchVisible() {
    if (document.getElementById('muncul')) {

        if (document.getElementById('muncul').style.display == 'none') {
            document.getElementById('muncul').style.display = 'block';
            document.getElementById('hilang').style.display = 'none';
        }
        else {
            document.getElementById('muncul').style.display = 'none';
            document.getElementById('hilang').style.display = 'block';
        }
    }
}