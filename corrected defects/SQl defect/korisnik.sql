-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 31, 2022 at 04:00 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studnet`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

DROP TABLE IF EXISTS `korisnik`;
CREATE TABLE IF NOT EXISTS `korisnik` (
  `IdKor` int(11) NOT NULL AUTO_INCREMENT,
  `Ime` varchar(40) DEFAULT NULL,
  `Prezime` varchar(20) DEFAULT NULL,
  `Date_of_birth` date DEFAULT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `E-mail` varchar(45) DEFAULT NULL,
  `Username` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Last_login` datetime DEFAULT NULL,
  `img` longblob,
  `Active` int(11) DEFAULT '0',
  PRIMARY KEY (`IdKor`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`IdKor`, `Ime`, `Prezime`, `Date_of_birth`, `Country`, `E-mail`, `Username`, `Password`, `Last_login`, `img`, `Active`) VALUES
(2, 'Djole', 'Popara', '2000-05-09', 'Serbia', 'poparaLegija23@yahoo.com', 'Poparino', 'vebdizajnko?', '2022-05-31 15:48:06', NULL, 0),
(15, 'Univerzitet u Beogradu', NULL, NULL, 'Montenegro', 'BG@gmail.com', 'UniBg', '123', '2022-05-17 17:27:03', NULL, 0),
(16, 'Misko ', 'Krstic', '2000-11-12', NULL, 'Marko@etf.com', 'milovan23', 'Gogle-12@', NULL, NULL, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
