function endResponse(res, response = { status: false, message: '', data: {} }) {
    console.log('=>', response);
    res.end(JSON.stringify({
        status: response.status,
        message: response.message,
        data: response.data
    }));
}

module.exports = endResponse;