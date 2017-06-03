<? include 'includes/header.php'; ?>
<? include 'db.php'; ?>
<? include 'functions.php'; ?>
<!-- Parts -->
<div class="container">
    <br>
    <div class="row">
    	<div class="col s10 offset-s1">
			<nav>
				<div class="nav-wrapper light-green lighten-2">
					<a href="#" class="brand-logo center">
						<!-- <img class="logo" src="sowyer-logo.png"> -->
						PHP Todo
					</a>
				</div>
			</nav>
    	</div>
    </div>
    <div class="row">


		
        <? include 'login_create.php'; ?>
        <? include 'login_read.php'; ?>
    </div>
</div>
<? include 'includes/footer.php'; ?>
