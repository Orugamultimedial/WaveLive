-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 18-05-2020 a las 18:12:00
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `wavelive`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `music`
--

CREATE TABLE `music` (
  `id` int(100) NOT NULL,
  `name` varchar(535) COLLATE utf8mb4_spanish_ci NOT NULL,
  `author` varchar(535) COLLATE utf8mb4_spanish_ci NOT NULL,
  `author2` varchar(535) COLLATE utf8mb4_spanish_ci NOT NULL,
  `author3` varchar(535) COLLATE utf8mb4_spanish_ci NOT NULL,
  `genere` varchar(535) COLLATE utf8mb4_spanish_ci NOT NULL,
  `url` varchar(535) COLLATE utf8mb4_spanish_ci NOT NULL,
  `dateofchange` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `music`
--

INSERT INTO `music` (`id`, `name`, `author`, `author2`, `author3`, `genere`, `url`, `dateofchange`) VALUES
(1, 'Canon in D', 'Pachelbel', '', '', 'Baroque', 'canon_in_d-pachelbel.mp3', '2020-05-18'),
(2, 'Overcomer', 'Mandisa', '', '', 'Christian Music', 'overcomer-mandisa.mp3', '2020-05-18'),
(3, 'Cuando Me enamoro', 'Juan Luis Guerra', 'Enrique Iglesias', '', 'Bachata', 'cuando_me_enamoro-enrique_Iglesias-juan_luis_guerra.mp3', '2020-05-18'),
(4, 'Tengo tu love', 'Sie7e', '', '', 'pop', 'tengo_tu_love-sie7e.mp3', '2020-05-18'),
(5, 'Speak Life', 'TobyMac', '', '', 'pop', 'speak_life-tobymac.mp3', '2020-05-18');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `music`
--
ALTER TABLE `music`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `music`
--
ALTER TABLE `music`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
