-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 30, 2022 at 02:54 PM
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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `surname` varchar(45) DEFAULT NULL,
  `username` varchar(20) DEFAULT NULL,
  `PASSWORD` varchar(30) DEFAULT NULL,
  `img` longblob,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  PRIMARY KEY (`IdCh`),
  KEY `FK_IdS_C_idx` (`IdSm`),
  KEY `FK_idP_C_idx` (`IdCl`),
  KEY `FK_idPT_C_idx` (`IdClTag`),
  KEY `FK_IdKOd_idx` (`IdKor_OD`),
  KEY `FK_IdKKa_C_idx` (`IdKor_KA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
CREATE TABLE IF NOT EXISTS `classes` (
  `idC` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `IdSmr` int(11) NOT NULL,
  PRIMARY KEY (`idC`),
  KEY `FK_IdS_Classes_idx` (`IdSmr`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `fakultet`
--

DROP TABLE IF EXISTS `fakultet`;
CREATE TABLE IF NOT EXISTS `fakultet` (
  `IdF` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `IdUni` int(11) DEFAULT NULL,
  PRIMARY KEY (`IdF`),
  KEY `FK_IdUni_Fakultet` (`IdUni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `frindlist`
--

DROP TABLE IF EXISTS `frindlist`;
CREATE TABLE IF NOT EXISTS `frindlist` (
  `IdFL` int(11) NOT NULL AUTO_INCREMENT,
  `IdM` int(11) NOT NULL,
  `IdF` int(11) NOT NULL,
  PRIMARY KEY (`IdFL`),
  KEY `FK_IdKor_FL2_idx` (`IdF`),
  KEY `FK_IdKor_FL_idx` (`IdM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `korisnik`
--

DROP TABLE IF EXISTS `korisnik`;
CREATE TABLE IF NOT EXISTS `korisnik` (
  `IdKor` int(11) NOT NULL AUTO_INCREMENT,
  `Ime` varchar(20) DEFAULT NULL,
  `Prezime` varchar(20) DEFAULT NULL,
  `Date_of_birth` date DEFAULT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `E-mail` varchar(45) DEFAULT NULL,
  `Username` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Last_login` datetime DEFAULT NULL,
  `img` longblob,
  PRIMARY KEY (`IdKor`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`IdKor`, `Ime`, `Prezime`, `Date_of_birth`, `Country`, `E-mail`, `Username`, `Password`, `Last_login`, `img`) VALUES
(15, 'EtfSeljaaas', NULL, NULL, 'Montenegro', 'EtfSelja2@gmail.com', 'EtfSelja2', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `licence`
--

DROP TABLE IF EXISTS `licence`;
CREATE TABLE IF NOT EXISTS `licence` (
  `Datum` datetime NOT NULL,
  `IdU` int(11) NOT NULL,
  `IdA` int(11) NOT NULL,
  PRIMARY KEY (`IdU`,`IdA`),
  KEY `FK_IdA_Licence_idx` (`IdA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `moderator`
--

DROP TABLE IF EXISTS `moderator`;
CREATE TABLE IF NOT EXISTS `moderator` (
  `IdMod` int(11) NOT NULL,
  `IdFacM` int(11) NOT NULL,
  PRIMARY KEY (`IdMod`),
  KEY `FK_IdF_Moderator_idx` (`IdFacM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `reklamer`
--

DROP TABLE IF EXISTS `reklamer`;
CREATE TABLE IF NOT EXISTS `reklamer` (
  `IdRek` int(11) NOT NULL,
  `num_of_ads` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdRek`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `servis`
--

DROP TABLE IF EXISTS `servis`;
CREATE TABLE IF NOT EXISTS `servis` (
  `IdSer` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`IdSer`),
  UNIQUE KEY `IdSer_UNIQUE` (`IdSer`),
  UNIQUE KEY `IdSer` (`IdSer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `smerovi`
--

DROP TABLE IF EXISTS `smerovi`;
CREATE TABLE IF NOT EXISTS `smerovi` (
  `IdSmr` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Num_of_class` int(11) NOT NULL DEFAULT '0',
  `IdFak` int(11) NOT NULL,
  PRIMARY KEY (`IdSmr`),
  KEY `FK_IdF_Smerovi_idx` (`IdFak`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `Faculty` varchar(45) NOT NULL,
  `Course` varchar(45) NOT NULL,
  `IdGod` int(11) NOT NULL,
  `IdNum` int(11) NOT NULL,
  `Penalty_points` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `IdStud` int(11) NOT NULL,
  PRIMARY KEY (`IdStud`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `univerzitet`
--

DROP TABLE IF EXISTS `univerzitet`;
CREATE TABLE IF NOT EXISTS `univerzitet` (
  `Sertifikat` tinyint(4) DEFAULT NULL,
  `IdUni` int(11) NOT NULL,
  PRIMARY KEY (`IdUni`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `univerzitet`
--

INSERT INTO `univerzitet` (`Sertifikat`, `IdUni`) VALUES
(1, 15);

-- --------------------------------------------------------

--
-- Table structure for table `zahteva_licencu`
--

DROP TABLE IF EXISTS `zahteva_licencu`;
CREATE TABLE IF NOT EXISTS `zahteva_licencu` (
  `IdUni` int(11) NOT NULL,
  `IdSer` int(11) NOT NULL,
  `Datum_zahteva` datetime DEFAULT NULL,
  PRIMARY KEY (`IdUni`),
  KEY `FK_IdS_ZL_idx` (`IdSer`)
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

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `FK_IdS_Classes` FOREIGN KEY (`IdSmr`) REFERENCES `smerovi` (`IdSmr`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fakultet`
--
ALTER TABLE `fakultet`
  ADD CONSTRAINT `FK_IdUni_Fakultet` FOREIGN KEY (`IdUni`) REFERENCES `univerzitet` (`IdUni`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `frindlist`
--
ALTER TABLE `frindlist`
  ADD CONSTRAINT `FK_IdKor_FL` FOREIGN KEY (`IdM`) REFERENCES `student` (`IdStud`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdKor_FL2` FOREIGN KEY (`IdF`) REFERENCES `student` (`IdStud`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `licence`
--
ALTER TABLE `licence`
  ADD CONSTRAINT `FK_IdA_Licence` FOREIGN KEY (`IdA`) REFERENCES `admin` (`idAdmin`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdU_Licence` FOREIGN KEY (`IdU`) REFERENCES `univerzitet` (`IdUni`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `moderator`
--
ALTER TABLE `moderator`
  ADD CONSTRAINT `FK_IdF_Moderator` FOREIGN KEY (`IdFacM`) REFERENCES `fakultet` (`IdF`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdKor_Moderator` FOREIGN KEY (`IdMod`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reklamer`
--
ALTER TABLE `reklamer`
  ADD CONSTRAINT `FK_IdKor_Reklamer` FOREIGN KEY (`IdRek`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `smerovi`
--
ALTER TABLE `smerovi`
  ADD CONSTRAINT `FK_IdF_Smerovi` FOREIGN KEY (`IdFak`) REFERENCES `fakultet` (`IdF`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `FK_IdKor_Stud` FOREIGN KEY (`IdStud`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `univerzitet`
--
ALTER TABLE `univerzitet`
  ADD CONSTRAINT `FK_IdK_Univerzitet` FOREIGN KEY (`IdUni`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `zahteva_licencu`
--
ALTER TABLE `zahteva_licencu`
  ADD CONSTRAINT `FK_IdS_ZL` FOREIGN KEY (`IdSer`) REFERENCES `servis` (`IdSer`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdU_ZL` FOREIGN KEY (`IdUni`) REFERENCES `univerzitet` (`IdUni`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
