const adminPage = (req, res) => {
    // res.sendFile(path.resolve(__dirname, '../Admin/admin-page/build', 'index.html'));
    res.sendFile(path.resolve(__dirname, '../../Admin/admin-page/build', 'index.html'));
}

module.exports = {adminPage}