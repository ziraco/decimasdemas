$(function () {
    $(document).on('click', 'button', subirLaCosa);

    function subirLaCosa() {
        var timestamp = Date.now();
        var url = 'https://api.github.com/repos/ziraco/decimasdemas/contents/_decimas/' + timestamp + '.md';

        var username = $('#username').val();
        var password = $('#password').val();
        console.log(username);
        console.log(password);

        $.ajax({
            url: url,
            type: 'PUT',
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
            },
            data: JSON.stringify({
                content: btoa(getFileContent()),
                message:"New decima in the city: "+timestamp
            })


    })
    }

    function getFileContent() {
        var title = $('#title').val();
        var body = $('#body').val();

        return "---\n" +
            "title: "+title+"\n"+
            "---\n"+
            "\n" +
                body;
    }

});