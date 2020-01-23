CREATE DATABASE  IF NOT EXISTS `GuessGame` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `GuessGame`;
-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: GuessGame
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `created_on` datetime DEFAULT CURRENT_TIMESTAMP,
  `min_number` int(11) NOT NULL,
  `max_number` int(11) NOT NULL,
  `user_number` int(11) NOT NULL,
  `computer_guess` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (1,'kris','2020-01-23 13:41:55',1,59,17,'40,58'),(2,'kris','2020-01-23 13:56:05',1,7,1,'1'),(3,'hiiiii','2020-01-23 13:58:20',1,11,10,'5'),(4,'hiiiii','2020-01-23 13:58:26',1,11,10,'5'),(5,'maya','2020-01-23 14:04:24',4,20,7,'17,14,9'),(6,'www','2020-01-23 14:05:22',3,79,10,'67,16'),(7,'oner','2020-01-23 14:07:16',2,11,4,'7,5'),(8,'kris','2020-01-23 14:17:48',2,590,22,'196,85,47'),(9,'kris','2020-01-23 14:20:21',6,17,10,'14,12'),(10,'kris','2020-01-23 14:24:33',1,8,1,'6,1,6'),(11,'kris','2020-01-23 14:26:15',3,11,3,'10'),(12,'kris','2020-01-23 14:27:20',1,7,2,'4'),(13,'kris','2020-01-23 15:05:54',6,17,6,'10,7,7'),(14,'kris','2020-01-23 15:06:54',4,12,4,'9,8'),(15,'kris','2020-01-23 15:18:03',4,12,5,'6,5'),(16,'kris','2020-01-23 15:19:01',2,9,2,'2'),(17,'k','2020-01-23 16:15:36',1,2,1,'1,1'),(18,'k','2020-01-23 16:15:38',1,2,2,'1,1,1'),(19,'k','2020-01-23 16:15:39',1,2,2,'1,1,1,2,2'),(20,'כריס','2020-01-23 16:16:27',1,2,2,'2'),(21,'כריס','2020-01-23 16:16:32',1,2,2,'2,2,1,1,1,1,1'),(22,'kris','2020-01-23 16:27:07',8,17,8,'16,12,8'),(23,'kris','2020-01-23 16:30:44',8,20,9,'15,13,13'),(24,'kris','2020-01-23 16:34:23',2,8,5,'8'),(25,'kris','2020-01-23 16:45:12',1,2,1,'2,1');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-23 16:51:54
