<html>

<head>

<link rel="stylesheet" type="text/css" href="css/bootstrap.css">
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/Combo.js"></script>
<script src="js/Combos/Flush.js"></script>
<script src="js/Combos/Full.js"></script>
<script src="js/Combos/Brelan.js"></script>
<script src="js/Combos/Pair.js"></script>
<script src="js/orderCards.js"></script>
</head>

<body>



</body>

<script>

var cards = ["As", "As", "Js", "Qs", "Ah"];

var combo = new Combo();

console.log(combo.getCombo(cards).getValue());

</script>