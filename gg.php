<html>

<head>

<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.js"></script>

</head>

<body>

<div class="container text-center mt-5">

    <div class="row">

        <div class="col-6 offset-3">

            Hero

        </div>

    </div>
    <div class="row mt-3">

        <div class="col">

            Vous avez gagné !

        </div>

    </div>
    <div class="row mt-3">

        <div class="col-6 offset-3">
            
            <form id="formEmail" method="post">

            <input type="text" name="email" class="form-control mb-3" id="" placeholder="Email">
            
            Entrez votre email pour decouvrir votre cadeau

            </form>

            <button type="button" id="submitForm" class="btn btn-secondary">Jouer !</button>

        </div>

    </div>
    

</div>

</body>

<script>

$(document).ready(function() {

$('#submitForm').click( function() {

    $.ajax({
        url: 'http://localhost:8000/mail.php',
        type: 'post',
        dataType: 'json',
        data: $('#formEmail').serialize(),
        success: function(data) {
                    console.log(data);
                 }
    });

});

});

</script>

</html>