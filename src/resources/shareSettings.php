<?php

$protocol = $_SERVER['PROTOCOL'] = isset($_SERVER['HTTPS']) && !empty($_SERVER['HTTPS']) ? 'https' : 'http';
$host = $protocol . '://' . $_SERVER['HTTP_HOST'];
$title = '';
$description = '';
$image = $host . '/images/';

// Uncomment the code below and fill in the pages if necessary
$pages = [
	'/' => [
		'title' => 'Кодаков Вадим, Верстальщик/Frontend-разработчик',
		'description' => 'Мне нравится оживлять статические дизайны и превращать их в интерактивные приложения. Чем безумнее идея тем интереснее её реализация. Так-же я люблю заниматься разработкой и дизайном сложных проектов. Имею большой опыт дистанционной коммуникации. Очень мотивирован развиваться в направлении разработки Web-приложения. Почти всё свободное время уделяю обучению и практике.',
		'image' => '/images/share.jpg',
	],
];

$page = @$pages[$_SERVER['REQUEST_URI']];

if ($page) {
	$title = !is_null(@$page['title']) ? $page['title'] : $title;
	$description = !is_null(@$page['description']) ? $page['description'] : $description;
	$image = !is_null(@$page['image']) ? $host . $page['image'] : $image;
}

?>
