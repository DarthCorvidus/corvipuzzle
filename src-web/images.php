<?php
header("Content-Type: text/plain");
class Images {
	private array $images = [];
	function __construct() {
		foreach(glob("images/*") as $value) {
			$this->images[] = basename($value);
		}
	}
	
	function run() {
		echo json_encode($this->images);
	}
}

$images = new Images();
$images->run();