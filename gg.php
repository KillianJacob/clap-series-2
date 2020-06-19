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
<div class="modal" id="email" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Le mail a été envoyé</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Va dans tes mails pour voir ta surprise.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Ok</button>
      </div>
    </div>
  </div>
</div>

</body>

<script>

$(document).ready(function() {

$('#submitForm').click( function() {

    $.ajax({
        url: 'mail.php',
        type: 'post',
        dataType: 'json',
        data: $('#formEmail').serialize(),
        success: function(data) {
                    console.log(data);
                    $('#email').modal('show');
                 }
    });

});

});

</script>

</html>