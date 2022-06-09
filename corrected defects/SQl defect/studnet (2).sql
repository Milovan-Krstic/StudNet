-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 09, 2022 at 09:44 AM
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`idAdmin`, `name`, `surname`, `username`, `PASSWORD`, `img`) VALUES
(1, 'Petar', 'Petrovic', 'root', '123', NULL);

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
  `Text` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PDF` longblob,
  `IMG` longblob,
  `LinkTag` tinyint(4) DEFAULT NULL,
  `time_send` datetime DEFAULT NULL,
  `seen` int(11) DEFAULT '0',
  PRIMARY KEY (`IdCh`),
  KEY `FK_IdS_C_idx` (`IdSm`),
  KEY `FK_idP_C_idx` (`IdCl`),
  KEY `FK_idPT_C_idx` (`IdClTag`),
  KEY `FK_IdKOd_idx` (`IdKor_OD`),
  KEY `FK_IdKKa_C_idx` (`IdKor_KA`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chet_rooms`
--

INSERT INTO `chet_rooms` (`IdCh`, `IdSm`, `IdCl`, `IdClTag`, `IdKor_OD`, `IdKor_KA`, `Text`, `PDF`, `IMG`, `LinkTag`, `time_send`, `seen`) VALUES
(2, NULL, 1, NULL, 3, NULL, '23\n', NULL, NULL, NULL, NULL, 0),
(3, NULL, 4, NULL, 3, NULL, 'hello\n', NULL, NULL, NULL, '2022-05-02 14:45:28', 0),
(4, NULL, 1, NULL, 2, NULL, '123\n', NULL, NULL, NULL, '2022-05-17 14:45:51', 0),
(5, NULL, 3, NULL, 3, NULL, 'zdravo \n', NULL, NULL, NULL, '2022-04-19 14:45:47', 0),
(6, NULL, 1, NULL, 16, NULL, 'nesto', NULL, NULL, NULL, '2022-03-07 14:45:44', 0),
(9, NULL, 3, NULL, 16, NULL, 'nesto', NULL, NULL, NULL, '2022-06-01 14:45:09', 0),
(17, NULL, 3, NULL, 3, NULL, 'ksjda', NULL, NULL, NULL, '2022-05-31 14:45:16', 0),
(19, NULL, 3, NULL, 3, NULL, 'os2', NULL, NULL, NULL, '2022-06-03 01:27:26', 0),
(20, NULL, 2, NULL, 16, NULL, 'hello PSI', NULL, NULL, NULL, '2022-06-03 13:21:00', 0),
(21, NULL, 4, NULL, 3, NULL, 'rm2 love', NULL, NULL, NULL, '2022-06-03 14:17:43', 0),
(22, NULL, 4, NULL, 3, NULL, ':D', NULL, NULL, NULL, '2022-06-03 14:17:45', 0),
(23, NULL, 4, NULL, 3, NULL, '💗', NULL, NULL, NULL, '2022-06-03 14:18:13', 0),
(24, NULL, 1, NULL, 16, NULL, 'update', NULL, NULL, NULL, '2022-06-03 15:29:41', 0),
(25, NULL, 1, NULL, 3, NULL, 'update2', NULL, NULL, NULL, '2022-06-03 15:31:13', 0),
(26, NULL, 1, NULL, 3, NULL, 'update3', NULL, NULL, NULL, '2022-06-03 15:34:35', 0),
(27, NULL, 1, NULL, 16, NULL, 'hello kdp', NULL, NULL, NULL, '2022-06-03 15:35:25', 0),
(28, NULL, 1, NULL, 2, NULL, 'djole kdp', NULL, NULL, NULL, '2022-06-03 17:06:25', 0),
(29, NULL, 1, NULL, 16, NULL, 'cao', NULL, NULL, NULL, '2022-06-03 17:09:36', 0),
(30, NULL, 1, NULL, 16, NULL, 'kako si', NULL, NULL, NULL, '2022-06-03 17:09:39', 0),
(31, NULL, 1, NULL, 16, NULL, 'poz', NULL, NULL, NULL, '2022-06-03 17:12:38', 0),
(32, NULL, 1, NULL, 16, NULL, 'yoho', NULL, NULL, NULL, '2022-06-03 17:18:06', 0),
(35, NULL, 1, NULL, 16, NULL, 'poz', NULL, NULL, NULL, '2022-06-03 17:25:57', 0),
(37, NULL, 1, NULL, 2, NULL, 'sta ima', NULL, NULL, NULL, '2022-06-03 17:31:16', 0),
(38, NULL, 2, NULL, 16, NULL, 'helo', NULL, NULL, NULL, '2022-06-03 19:42:34', 0),
(39, NULL, 2, NULL, 16, NULL, 'hello', NULL, NULL, NULL, '2022-06-03 19:50:43', 0),
(40, NULL, 4, NULL, 16, NULL, '💗:smiley: ', NULL, NULL, NULL, '2022-06-03 22:35:06', 0),
(41, NULL, 2, NULL, 3, NULL, 'hey', NULL, NULL, NULL, '2022-06-03 14:29:10', 0),
(42, NULL, 2, NULL, 3, NULL, 'jo', NULL, NULL, NULL, '2022-06-03 14:29:23', 0),
(43, NULL, 2, NULL, 3, NULL, 'ew', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(44, NULL, 2, NULL, 3, NULL, 'nikola', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(45, NULL, 2, NULL, 3, NULL, 'je', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(46, NULL, 2, NULL, 3, NULL, 'hey', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(47, NULL, 2, NULL, 16, NULL, 'hey', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(48, NULL, 2, NULL, 16, NULL, 'who dis', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(49, NULL, 2, NULL, 3, NULL, 'PSI buraz', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(50, NULL, 3, NULL, 3, NULL, 'mac is bether', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(51, NULL, 3, NULL, 3, NULL, 'os', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(52, NULL, 3, NULL, 3, NULL, 'milicev', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(53, NULL, 2, NULL, 3, NULL, 'hwlo', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(54, NULL, 3, NULL, 3, NULL, 'windows', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(55, NULL, 3, NULL, 16, NULL, 'ma da', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(56, NULL, 3, NULL, 16, NULL, 'aha', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(57, NULL, 3, NULL, 16, NULL, 'e buraz', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(58, NULL, 3, NULL, 3, NULL, 'ee', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(59, NULL, 3, NULL, 3, NULL, 'e', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(60, NULL, 3, NULL, 3, NULL, 'nikooooooollaaaaa', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(61, NULL, 3, NULL, 16, NULL, 'budi se', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(62, NULL, 3, NULL, 20, NULL, 'i am dio ', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(63, NULL, 3, NULL, 20, NULL, 'suck my dick', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(64, NULL, 5, NULL, 20, NULL, 'or aora roarnoaroaroaoraoroar', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(65, NULL, 5, NULL, 20, NULL, 'oraaaaaaaaaaaaaaaa', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(66, NULL, 5, NULL, 20, NULL, 'damu damu damu damu', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(67, NULL, 1, NULL, 16, NULL, 'k', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(68, NULL, 5, NULL, 16, NULL, 'j', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(69, NULL, 4, NULL, 16, NULL, 'n', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(70, NULL, 2, NULL, 16, NULL, 'fgg', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(71, NULL, 1, NULL, 16, NULL, '5465', NULL, NULL, NULL, '0000-00-00 00:00:00', 0),
(72, NULL, 3, NULL, 16, NULL, 'misko', NULL, NULL, NULL, '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
CREATE TABLE IF NOT EXISTS `classes` (
  `idC` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) DEFAULT NULL,
  `IdSmr` int(11) DEFAULT NULL,
  `semestar` int(4) DEFAULT NULL,
  PRIMARY KEY (`idC`),
  KEY `FK_IdS_Classes_idx` (`IdSmr`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`idC`, `Name`, `IdSmr`, `semestar`) VALUES
(1, 'KDP', 1, 6),
(2, 'PSI', 1, 6),
(3, 'OS1', 1, 4),
(4, 'RM2', 1, 2),
(5, 'PS', 1, 2),
(6, 'Mata1', 2, 1),
(7, 'fiziologija', 3, 1);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fakultet`
--

INSERT INTO `fakultet` (`IdF`, `Name`, `IdUni`) VALUES
(1, 'Elektrotehnicki fakultet', 15),
(2, 'fakultet Organizacionih  nauka', 15),
(3, 'TIMS fakultet za psho i sort', 15);

-- --------------------------------------------------------

--
-- Table structure for table `frindlist`
--

DROP TABLE IF EXISTS `frindlist`;
CREATE TABLE IF NOT EXISTS `frindlist` (
  `IdFL` int(11) NOT NULL AUTO_INCREMENT,
  `IdM` int(11) NOT NULL,
  `IdF` int(11) NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`IdFL`),
  KEY `FK_IdKor_FL2_idx` (`IdF`),
  KEY `FK_IdKor_FL_idx` (`IdM`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `frindlist`
--

INSERT INTO `frindlist` (`IdFL`, `IdM`, `IdF`, `status`) VALUES
(1, 16, 3, 1);

-- --------------------------------------------------------

--
-- Table structure for table `inbox`
--

DROP TABLE IF EXISTS `inbox`;
CREATE TABLE IF NOT EXISTS `inbox` (
  `IdKor_OD` int(11) NOT NULL,
  `IdKor_KA` int(11) NOT NULL,
  `notify` int(11) NOT NULL,
  PRIMARY KEY (`IdKor_OD`,`IdKor_KA`),
  KEY `FK_IdKor_OD_idx` (`IdKor_OD`),
  KEY `FK_IdKor_KA_idx` (`IdKor_KA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `Email` varchar(45) DEFAULT NULL,
  `Username` varchar(45) DEFAULT NULL,
  `Password` varchar(45) DEFAULT NULL,
  `Last_login` datetime DEFAULT NULL,
  `Active` int(11) DEFAULT '0',
  `img` varchar(256) DEFAULT NULL,
  `bio` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`IdKor`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `korisnik`
--

INSERT INTO `korisnik` (`IdKor`, `Ime`, `Prezime`, `Date_of_birth`, `Country`, `Email`, `Username`, `Password`, `Last_login`, `Active`, `img`, `bio`) VALUES
(2, 'Djole', 'Popara', '2000-05-09', 'Serbia', 'poparaLegija23@yahoo.com', 'Poparino', 'vebdizajnko?', '2022-05-31 15:48:06', 0, 'StudNet Profile Picture Default.svg', NULL),
(3, 'Nikola', 'uze', '2000-05-03', 'Rumunija', 'Uze@gmail.com', 'nikola', '123', '2022-05-31 21:40:46', 0, '3_user.jpg', NULL),
(4, 'neko', 'neko', NULL, 'Serbia', NULL, 'mod', '123', '2022-05-31 22:16:48', 0, 'StudNet Profile Picture Default.svg', NULL),
(5, 'rekl', 'rekl', NULL, NULL, NULL, 'rekl', '123', '2022-05-31 22:17:40', 0, 'StudNet Profile Picture Default.svg', NULL),
(15, 'Univerzitet u Beogradu', NULL, NULL, 'Montenegro', 'BG@gmail.com', 'UniBg', '123', '2022-05-17 17:27:03', 0, 'StudNet Profile Picture Default.svg', NULL),
(16, 'Misko ', 'Krstic', '2000-11-12', 'Serbia', 'Marko@etf.com', 'milovan23', '123', NULL, 0, '16_user.jpg', NULL),
(20, 'Mladen', 'Lulic', '2000-06-14', 'SSSR', 'Staljin234@yahoo.com', 'Muladen', '123', '2022-06-02 19:53:09', 0, '20_user.jpg', NULL);

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

--
-- Dumping data for table `moderator`
--

INSERT INTO `moderator` (`IdMod`, `IdFacM`) VALUES
(4, 1);

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

--
-- Dumping data for table `reklamer`
--

INSERT INTO `reklamer` (`IdRek`, `num_of_ads`) VALUES
(5, 10);

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `smerovi`
--

INSERT INTO `smerovi` (`IdSmr`, `Name`, `Num_of_class`, `IdFak`) VALUES
(1, 'SI', 50, 1),
(2, 'ISI', 50, 2),
(3, 'SP', 40, 3);

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
CREATE TABLE IF NOT EXISTS `student` (
  `Faculty` varchar(45) NOT NULL,
  `Course` varchar(45) NOT NULL,
  `IdGod` varchar(256) NOT NULL,
  `IdNum` varchar(256) NOT NULL,
  `Penalty_points` int(10) UNSIGNED NOT NULL DEFAULT '0',
  `IdStud` int(11) NOT NULL,
  PRIMARY KEY (`IdStud`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`Faculty`, `Course`, `IdGod`, `IdNum`, `Penalty_points`, `IdStud`) VALUES
('Elektrotehnicki fakultet', 'SI', '2019', '456', 0, 2),
('Elektrotehnicki fakultet', 'SI', '2019', '556', 0, 3),
('Elektrotehnicki fakultet', 'SI', '2019', '709', 0, 16),
('Elektrotehnicki fakultet', 'SI', '2019', '482', 0, 20);

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
-- Constraints for table `inbox`
--
ALTER TABLE `inbox`
  ADD CONSTRAINT `FK_IdKor_KA` FOREIGN KEY (`IdKor_KA`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_IdKor_OD` FOREIGN KEY (`IdKor_OD`) REFERENCES `korisnik` (`IdKor`) ON DELETE CASCADE ON UPDATE CASCADE;

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
