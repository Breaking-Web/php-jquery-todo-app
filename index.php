<? include 'app/php/includes/header.php'; ?>
<? include 'app/php/logic/db.php'; ?>
<? include 'app/php/logic/functions.php'; ?>
<!-- Parts -->
<div class="container">
  <br>
  <div class="row">
  	<div class="col s10 offset-s1">
		<nav>
			<div class="nav-wrapper light-green lighten-2">
				<a href="#" class="brand-logo center">
					<img class="logo" src="app/sowyer-logo.png">
				</a>
			</div>
		</nav>
  	</div>
  </div>
  <div class="row">
    <? include 'app/php/logic/login_create.php'; ?>
    <? include 'app/php/logic/login_read.php'; ?>
  </div>
</div>
<? include 'app/php/includes/footer.php'; ?>
