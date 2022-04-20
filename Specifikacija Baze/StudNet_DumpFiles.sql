CREATE DATABASE  IF NOT EXISTS `studnet` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `studnet`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: studnet
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `idAdmin` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(45) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chet_rooms`
--

DROP TABLE IF EXISTS `chet_rooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chet_rooms` (
  `IdCh` int NOT NULL AUTO_INCREMENT,
  `IdSm` int DEFAULT NULL,
  `IdCl` int DEFAULT NULL,
  `IdClTag` int DEFAULT NULL,
  `IdKor_OD` int DEFAULT NULL,
  `IdKor_KA` int DEFAULT NULL,
  `Text` varchar(255) DEFAULT NULL,
  `PDF` longblob,
  `IMG` longblob,
  `LinkTag` tinyint DEFAULT NULL,
  PRIMARY KEY (`IdCh`),
  KEY `FK_IdS_C_idx` (`IdSm`),
  KEY `FK_idP_C_idx` (`IdCl`),
  KEY `FK_idPT_C_idx` (`IdClTag`),
  KEY `FK_IdKOd_idx` (`IdKor_OD`),
  KEY `FK_IdKKa_C_idx` (`IdKor_KA`),
  CONSTRAINT `FK_IdKKa_C` FOREIGN KEY (`IdKor_KA`) REFERENCES `korisnik` (`IdKor`) ON UPDATE CASCADE,
  CONSTRAINT `FK_IdKOd_C` FOREIGN KEY (`IdKor_OD`) REFERENCES `korisnik` (`IdKor`) ON UPDATE CASCADE,
  CONSTRAINT `FK_IdP_C` FOREIGN KEY (`IdCl`) REFERENCES `classes` (`idC`) ON UPDATE CASCADE,
  CONSTRAINT `FK_IdPT_C` FOREIGN KEY (`IdClTag`) REFERENCES `classes` (`idC`) ON UPDATE CASCADE,
  CONSTRAINT `FK_IdS_C` FOREIGN KEY (`IdSm`) REFERENCES `smerovi` (`IdSmr`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chet_rooms`
--

LOCK TABLES `chet_rooms` WRITE;
/*!40000 ALTER TABLE `chet_rooms` DISABLE KEYS */;
/*!40000 ALTER TABLE `chet_rooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `idC` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `IdSmr` int NOT NULL,
  PRIMARY KEY (`idC`),
  KEY `FK_IdS_Classes_idx` (`IdSmr`),
  CONSTRAINT `FK_IdS_Classes` FOREIGN KEY (`IdSmr`) REFERENCES `smerovi` (`IdSmr`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fakultet`
--

DROP TABLE IF EXISTS `fakultet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fakultet` (
  `IdF` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `IdUni` int NOT NULL,
  PRIMARY KEY (`IdF`),
  KEY `FK_IdUni_Fakultet_idx` (`IdUni`),
  CONSTRAINT `FK_IdUni_Fakultet` FOREIGN KEY (`IdUni`) REFERENCES `univerzitet` (`IdUni`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fakultet`
--

LOCK TABLES `fakultet` WRITE;
/*!40000 ALTER TABLE `fakultet` DISABLE KEYS */;
/*!40000 ALTER TABLE `fakultet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `frindlist`
--

DROP TABLE IF EXISTS `frindlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `frindlist` (
  `IdFL` int NOT NULL AUTO_INCREMENT,
  `IdM` int NOT NULL,
  `IdF` int NOT NULL,
  PRIMARY KEY (`IdFL`),
  KEY `FK_IdKor_FL2_idx` (`IdF`),
  KEY `FK_IdKor_FL_idx` (`IdM`),
  CONSTRAINT `FK_IdKor_FL` FOREIGN KEY (`IdM`) REFERENCES `student` (`IdStud`) ON UPDATE CASCADE,
  CONSTRAINT `FK_IdKor_FL2` FOREIGN KEY (`IdF`) REFERENCES `student` (`IdStud`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `frindlist`
--

LOCK TABLES `frindlist` WRITE;
/*!40000 ALTER TABLE `frindlist` DISABLE KEYS */;
/*!40000 ALTER TABLE `frindlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `korisnik`
--

DROP TABLE IF EXISTS `korisnik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `korisnik` (
  `IdKor` int NOT NULL AUTO_INCREMENT,
  `Ime` varchar(20) NOT NULL,
  `Prezime` varchar(20) NOT NULL,
  `Date_of_birth` datetime DEFAULT NULL,
  `City` varchar(20) NOT NULL,
  `E-mail` varchar(45) NOT NULL,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(45) NOT NULL,
  `Last_login` datetime DEFAULT NULL,
  PRIMARY KEY (`IdKor`),
  UNIQUE KEY `Username_UNIQUE` (`Username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `korisnik`
--

LOCK TABLES `korisnik` WRITE;
/*!40000 ALTER TABLE `korisnik` DISABLE KEYS */;
/*!40000 ALTER TABLE `korisnik` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `licence`
--

DROP TABLE IF EXISTS `licence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `licence` (
  `Datum` datetime NOT NULL,
  `IdU` int NOT NULL,
  `IdA` int NOT NULL,
  PRIMARY KEY (`IdU`,`IdA`),
  KEY `FK_IdA_Licence_idx` (`IdA`),
  CONSTRAINT `FK_IdA_Licence` FOREIGN KEY (`IdA`) REFERENCES `admin` (`idAdmin`) ON UPDATE CASCADE,
  CONSTRAINT `FK_IdU_Licence` FOREIGN KEY (`IdU`) REFERENCES `univerzitet` (`IdUni`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `licence`
--

LOCK TABLES `licence` WRITE;
/*!40000 ALTER TABLE `licence` DISABLE KEYS */;
/*!40000 ALTER TABLE `licence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `moderator`
--

DROP TABLE IF EXISTS `moderator`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `moderator` (
  `IdMod` int NOT NULL,
  `IdFacM` int NOT NULL,
  PRIMARY KEY (`IdMod`),
  KEY `FK_IdF_Moderator_idx` (`IdFacM`),
  CONSTRAINT `FK_IdF_Moderator` FOREIGN KEY (`IdFacM`) REFERENCES `fakultet` (`IdF`),
  CONSTRAINT `FK_IdKor_Moderator` FOREIGN KEY (`IdMod`) REFERENCES `korisnik` (`IdKor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `moderator`
--

LOCK TABLES `moderator` WRITE;
/*!40000 ALTER TABLE `moderator` DISABLE KEYS */;
/*!40000 ALTER TABLE `moderator` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reklamer`
--

DROP TABLE IF EXISTS `reklamer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reklamer` (
  `IdRek` int NOT NULL,
  `num_of_ads` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdRek`),
  CONSTRAINT `FK_IdKor_Reklamer` FOREIGN KEY (`IdRek`) REFERENCES `korisnik` (`IdKor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reklamer`
--

LOCK TABLES `reklamer` WRITE;
/*!40000 ALTER TABLE `reklamer` DISABLE KEYS */;
/*!40000 ALTER TABLE `reklamer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servis`
--

DROP TABLE IF EXISTS `servis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servis` (
  `IdSer` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`IdSer`),
  UNIQUE KEY `IdSer_UNIQUE` (`IdSer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servis`
--

LOCK TABLES `servis` WRITE;
/*!40000 ALTER TABLE `servis` DISABLE KEYS */;
/*!40000 ALTER TABLE `servis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `smerovi`
--

DROP TABLE IF EXISTS `smerovi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `smerovi` (
  `IdSmr` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  `Num_of_class` int NOT NULL DEFAULT '0',
  `IdFak` int NOT NULL,
  PRIMARY KEY (`IdSmr`),
  KEY `FK_IdF_Smerovi_idx` (`IdFak`),
  CONSTRAINT `FK_IdF_Smerovi` FOREIGN KEY (`IdFak`) REFERENCES `fakultet` (`IdF`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `smerovi`
--

LOCK TABLES `smerovi` WRITE;
/*!40000 ALTER TABLE `smerovi` DISABLE KEYS */;
/*!40000 ALTER TABLE `smerovi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `IdStud` int NOT NULL AUTO_INCREMENT,
  `Faculty` varchar(45) NOT NULL,
  `Course` varchar(45) NOT NULL,
  `IdGod` int NOT NULL,
  `IdNum` int NOT NULL,
  `Penalty_points` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`IdStud`),
  CONSTRAINT `FK_IdKor_Stud` FOREIGN KEY (`IdStud`) REFERENCES `korisnik` (`IdKor`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `univerzitet`
--

DROP TABLE IF EXISTS `univerzitet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `univerzitet` (
  `IdUni` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Date_of_est` datetime DEFAULT NULL,
  `Country` varchar(45) NOT NULL,
  `E-mail` varchar(50) NOT NULL,
  `Sertifikat` tinyint NOT NULL,
  PRIMARY KEY (`IdUni`),
  UNIQUE KEY `E-mail_UNIQUE` (`E-mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `univerzitet`
--

LOCK TABLES `univerzitet` WRITE;
/*!40000 ALTER TABLE `univerzitet` DISABLE KEYS */;
/*!40000 ALTER TABLE `univerzitet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `zahteva_licencu`
--

DROP TABLE IF EXISTS `zahteva_licencu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `zahteva_licencu` (
  `IdUni` int NOT NULL,
  `IdSer` int NOT NULL,
  `Datum_zahteva` datetime DEFAULT NULL,
  PRIMARY KEY (`IdUni`),
  KEY `FK_IdS_ZL_idx` (`IdSer`),
  CONSTRAINT `FK_IdS_ZL` FOREIGN KEY (`IdSer`) REFERENCES `servis` (`IdSer`) ON UPDATE CASCADE,
  CONSTRAINT `FK_IdU_ZL` FOREIGN KEY (`IdUni`) REFERENCES `univerzitet` (`IdUni`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `zahteva_licencu`
--

LOCK TABLES `zahteva_licencu` WRITE;
/*!40000 ALTER TABLE `zahteva_licencu` DISABLE KEYS */;
/*!40000 ALTER TABLE `zahteva_licencu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'studnet'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-19 19:52:05
