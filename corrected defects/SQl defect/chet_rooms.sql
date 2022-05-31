-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 31, 2022 at 04:34 PM
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
-- Table structure for table `chet_rooms`
--

DROP TABLE IF EXISTS `chet_rooms`;
CREATE TABLE IF NOT EXISTS `chet_rooms` (
  `IdCh` int(11) NOT NULL AUTO_INCREMENT,
  `IdSm` int(11) DEFAULT NULL,
  `IdCl` int(11) DEFAULT NULL,
  `IdClTag` int(11) DEFAULT NULL,
  `IdKor_OD` int(11) DEFAULT NULL,
  `IdKor_KA` int(11) DEFAULT NULL,
  `Text` varchar(255) DEFAULT NULL,
  `PDF` longblob,
  `IMG` longblob,
  `LinkTag` tinyint(4) DEFAULT NULL,
  `time_send` time DEFAULT NULL,
  `seen` int(11) DEFAULT '0',
  PRIMARY KEY (`IdCh`),
  KEY `FK_IdS_C_idx` (`IdSm`),
  KEY `FK_idP_C_idx` (`IdCl`),
  KEY `FK_idPT_C_idx` (`IdClTag`),
  KEY `FK_IdKOd_idx` (`IdKor_OD`),
  KEY `FK_IdKKa_C_idx` (`IdKor_KA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `chet_rooms`
--
ALTER TABLE `chet_rooms`
  ADD CONSTRAINT `FK_IdKKa_C` FOREIGN KEY (`IdKor_KA`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdKOd_C` FOREIGN KEY (`IdKor_OD`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdPT_C` FOREIGN KEY (`IdClTag`) REFERENCES `classes` (`idC`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdP_C` FOREIGN KEY (`IdCl`) REFERENCES `classes` (`idC`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdS_C` FOREIGN KEY (`IdSm`) REFERENCES `smerovi` (`IdSmr`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
