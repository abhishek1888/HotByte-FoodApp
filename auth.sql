-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: auth
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `addressid` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `postal_code` int NOT NULL,
  `street1` varchar(255) DEFAULT NULL,
  `street2` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`addressid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'Pune','Bibwewadi',421001,'Naadbramha Idli','Bibwewadi'),(2,'Pune','Bibwewadi',421001,'Yenna Dosa','Bibwewadi'),(3,'Pune','Katraj',421001,'Joshi Wadewale','Katraj'),(4,'Pune','Bibwewadi',421001,'Chitale Bandhu Mithaiwale','Bibwewadi'),(5,'Pune','Shivajinagar',421001,'Roopali Restaurant - FC Road','Shivajinagar'),(7,'Pune','Swargate',421001,'Kaka Halwai','Swargate'),(8,'Dehradun','Chukkuwala',248001,'NIC Ice Creams','Chukkuwala'),(9,'Dehradun','Ballupur',248001,'Walk In Woods','Ballupur'),(10,'Dehradun','Majri',248001,'Gokul Pure Veg','Majri'),(11,'Dehradun','Nawada',248001,'Wendy\'s Burgers','Nawada'),(12,'Dehradun','Nawada',248001,'Hyderabadi Biryani House','Nawada'),(13,'Dehradun','Rispana',248001,'Delhi Kitchen','Rispana'),(14,'Pune','near GHI',421001,'Bibwewadi','Bibwewadi');
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `FKd8vlurk7shm472n9yil1tyvym` (`role_id`),
  CONSTRAINT `FKd8vlurk7shm472n9yil1tyvym` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'ankitmahalpure@gmail.com','$2a$10$OLNUKdc8RLxC.LVYdFexQ.3k/Jl9Jpk5cnXMnqhi/EZyJquOH55Om','ankit',3);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotel`
--

DROP TABLE IF EXISTS `hotel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotel` (
  `hotel_id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `hotel_contact_number` varchar(255) DEFAULT NULL,
  `hotel_description` varchar(255) DEFAULT NULL,
  `hotel_end_timing` time(6) DEFAULT NULL,
  `hotel_images_list` varbinary(255) DEFAULT NULL,
  `hotel_is_active` bit(1) NOT NULL,
  `hotel_name` varchar(255) DEFAULT NULL,
  `hotel_rating` int NOT NULL,
  `hotel_start_timing` time(6) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`hotel_id`),
  UNIQUE KEY `UK_3p8hpnp751jb9892sxkjmi7bq` (`email`),
  UNIQUE KEY `UK_2nggm6ki4jrxfdcr5o196o79k` (`username`),
  UNIQUE KEY `UK_owt8iiq4d3dff6uvmdyjbmmar` (`address_id`),
  KEY `FKk9dn8sia9pkq2k30rcugaj3eo` (`role_id`),
  CONSTRAINT `FK48m0ei7s6biikxbrku04slp0s` FOREIGN KEY (`address_id`) REFERENCES `address` (`addressid`),
  CONSTRAINT `FKk9dn8sia9pkq2k30rcugaj3eo` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotel`
--

LOCK TABLES `hotel` WRITE;
/*!40000 ALTER TABLE `hotel` DISABLE KEYS */;
INSERT INTO `hotel` VALUES (1,'naadbramha@gmail.com','9876543210','Naadbramha Idli\nSouth Indian','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0w_112t\0h_112t\0\'c_fill/37f105d0d8fd40f8f2bf828b2c39f911x',_binary '','Naadbramha Idli',4,'08:00:00.000000','$2a$10$YQBUGIP/Ri87IDIaFi5n.uMOcnSHOlKW7XB5LQRVJ4G7LcsDxWxGG','Naadbramha',1,2),(2,'YennaDosa@gmail.com','9876543210','Yenna Dosa\nSouth Indian','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0\Zw_660/fyg9qf4t8vuzpa5fvyn8x',_binary '','Yenna Dosa',4,'08:00:00.000000','$2a$10$ItwF8F8OWJMiE50q/2RaYOGWnWKT6cWtqBMNgLMFHAqg.0R6FMhA.','YennaDosa',2,2),(3,'JoshiWade@gmail.com','9876543213','Joshi Wadewale\nSouth Indian, Snacks','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0\Zw_660/ykxzeiojvyqyexjjskxcx',_binary '','Joshi Wadewale',4,'08:00:00.000000','$2a$10$ilsMIuuQxKNWkS3eIqVddOT.pSHQ3U917d.OTYDaSXlaLSYpEaJHO','JoshiWade',3,2),(4,'ChitaleBan@gmail.com','9876543215','Chitale Bandhu Mithaiwale\nSweets','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0&w_660/f52f262138c2a0a1c06d35f8fbcb126ax',_binary '','Chitale Bandhu Mithaiwale',4,'08:00:00.000000','$2a$10$3QZKzB.sER.b6Yno3dKfa.28EoPgvNQCN6fmEksXGTd97uUve4Bi.','ChitaleBan',4,2),(5,'RoopaliFC@gmail.com','9876543217','South Indian, North Indian\nShivajinagar','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0\Zw_660/ngmsdg7jvwbbg1rmxze7x',_binary '','Roopali Restaurant - FC Road',5,'08:00:00.000000','$2a$10$JiQ54WYOxWN8xLyAj9AO8upg5X5wHM56cB.7authRGl6PvK1d208y','RoopaliFC',5,2),(7,'KakaHalwai@gmail.com','9876543219','Street Food Sweets','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0\Zw_660/thizj1sd8couaei2odzzx',_binary '','Kaka Halwai',5,'08:00:00.000000','$2a$10$WCIpaWQxZbZv/K.Si3Ba4OQC3O3zjx1iZhLZ.i9j5vX6p5tg5TTwm','KakaHalwai',7,2),(8,'NICIceCream@gmail.com','9876543212','Ice Cream, Desserts','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0\'w_1024/7857df1597058220319252ad7d882939x',_binary '','NIC Ice Creams',4,'12:00:00.000000','$2a$10$ygIBFVo4Oj63A2iiooBGvOtI9zer8pmUev/qXr9Ls7yZxbEtJNx72','NICIceCream',8,2),(9,'WIW@gmail.com','9876543212','North Indian, Chinese','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0\Zw_660/vllxur6kewwfe4p43igqx',_binary '','Walk In Woods',4,'12:00:00.000000','$2a$10$rIdHscOgXvg6RI84CQIWaOR6xRCfipS1jcMSsxFdhalcqL5ltMZGi','WalkInWoods',9,2),(10,'GokulPure@gmail.com','9876543216','North Indian, Chinese','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0&w_660/5f45285cd2b7884d6f6ae81b48fac86dx',_binary '','Gokul Pure Veg',4,'12:00:00.000000','$2a$10$QZgk6mT3R3CloYXkHjf0XOudl1brTcqg.4.Nq/povez8YvJ2gGa1G','GokulPure',10,2),(11,'Wendyburger@gmail.com','9876543219','Burgers, American','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0&w_660/f1aa621021a2826088089b89842d4e7cx',_binary '','Wendy\'s Burgers',4,'12:00:00.000000','$2a$10$M5v3rbknbD0MULbxLvUX5.gER7q7EOF/ncK/KxxMNukbMHm8CkcCq','Wendyburger',11,2),(12,'BiryaniHou@gmail.com','9876543213','North Indian','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0&w_660/fcad94af696fcae690cf0cccec9e2a2fx',_binary '','Hyderabadi Biryani House',4,'12:00:00.000000','$2a$10$OjJXz7nVEraORxSeLXbpiem3rk5nio5oz5uFpn13yYbmgjNwZ8ATS','BiryaniHou',12,2),(13,'DelhiKit@gmail.com','9876543215','North Indian, Chinese','22:00:00.000000',_binary '¨\Ì\0sr\0java.util.ArrayListxÅ\“ô\«aù\0I\0sizexp\0\0\0w\0\0\0t\0<https://media-assets.swiggy.com/swiggy/image/upload/fl_lossyt\0f_autot\0q_autot\0&w_660/ee0c86496cd11e53724dda5ca6067fadx',_binary '','Delhi Kitchen',4,'12:00:00.000000','$2a$10$CIOMxU5qYSQQSH1eAXEIP.h/oExf0LWXXOMTIpqADyzjKjSv1JgAa','DelhiKit',13,2);
/*!40000 ALTER TABLE `hotel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menu_item`
--

DROP TABLE IF EXISTS `menu_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu_item` (
  `menu_itemid` bigint NOT NULL AUTO_INCREMENT,
  `hotelid` int NOT NULL,
  `is_veg` varchar(255) DEFAULT NULL,
  `menu_item_description` varchar(255) DEFAULT NULL,
  `menu_item_image` varchar(255) DEFAULT NULL,
  `menu_item_name` varchar(255) DEFAULT NULL,
  `menu_item_price` float NOT NULL,
  `menu_item_rating` int NOT NULL,
  `menu_item_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`menu_itemid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu_item`
--

LOCK TABLES `menu_item` WRITE;
/*!40000 ALTER TABLE `menu_item` DISABLE KEYS */;
INSERT INTO `menu_item` VALUES (1,1,'No','Soft & fluffy steamed, Served with Sambar & Chutney.','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/421c9c150b75ed516882a74c680be6c8','Idli Chutney Samber [3 Pcs]',65,5,'Breakfast'),(2,1,'Yes','Thatte Ghee Masala Idli Delicious With Samber.','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f974abb449d1c5c95d69a9ef69eab762','Thatte Ghee Masala Idli',95,5,'Breakfast'),(3,1,'Yes','Button Ghee Masala Idli Delicious Chutney With Samber.','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/75d5fac9413c11d7216ddfa15021c648','Button Ghee Masala Idli',110,4,'Breakfast'),(4,1,'Yes','Soft & fluffy steamed, Served with Sambar & Chutney.','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/01858f9eb89364dd615a0eae87232ff9','Idli Chutney Samber [6 Pcs]',110,5,'Breakfast'),(5,1,'Yes','Idli 1 Plates + Medu Wada 2 Plates + Thatte Idli 2 Plates','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/f62524036feece0491144b15cfd74c9b','Idli 1 Plates + Medu Wada 2 Plates + Thatte Idli 2 Plates',350,4,'Lunch'),(6,1,'Yes','Tea Is Loaded With Goodness Of Lot Of Herbs That Helps Detoxify Body And Mind.','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/5fae45e4b77f3043751e5df04cfcf28f','Tea',25,5,'Breakfast,Lunch,Dinner'),(7,1,'Yes','The Aroma Is A Tantalizing Mix Of Earthy Tea Undertones And The Vibrant, Citrusy Fragrance Of Lemons.','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d1f20c95d90cae6a876ac27e916717c3','Lemon Tea',15,5,'Breakfast'),(8,1,'Yes','Crispy & tasty Served with the Coconut chutney & Sambar','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/bb1de8254eed338f4390bbee9b0cc6fa','Medu Wada Samber [2 Pcs ]',40,7,'Breakfast,Lunch'),(9,3,'Yes','Single Batata Wada','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/mdbdau8txjdegc7yzkng','Single Batata Wada',27,5,'Breakfast,Lunch,Dinner'),(10,3,'Yes','Special Misal Pav','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/jxe3jw4u9zog9actny9v','Special Misal Pav',99,4,'Breakfast,Lunch,Dinner'),(11,3,'Yes','Batata Vada Sambar (2 Pcs)\n2 pav + 2 wada','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pxdmnkayvmjl7vcmdbd4','Batata Vada Sambar (2 Pcs)',90,4,'Breakfast'),(12,3,'Yes','Batata Bhaji ( serves 1 )','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/k0h3kyxpnbp6xtwk8boa','Batata Bhaji',50,5,'Breakfast'),(13,3,'Yes','Serves 1 | Sweet lassi','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/qjjrvhuf4xshn6htstwo','Mango Lassi',79,4,'Breakfast,Lunch,Dinner'),(14,3,'Yes','Sol Kadhi','https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/flwfyrpzj0ezdalsff2r','Sol Kadhi',50,4,'Breakfast,Lunch,Dinner');
/*!40000 ALTER TABLE `menu_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `order_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `menu_item_id` bigint NOT NULL,
  PRIMARY KEY (`order_id`,`menu_item_id`),
  CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`orderid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
INSERT INTO `order_items` VALUES (1,1,4),(1,1,6),(1,1,8),(2,1,5),(3,1,5),(4,2,9),(4,2,11),(5,1,14),(6,1,9),(7,1,9),(8,1,12);
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `statusid` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`statusid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `orderid` int NOT NULL AUTO_INCREMENT,
  `amount` float NOT NULL,
  `delivery_time` datetime(6) DEFAULT NULL,
  `is_paid` bit(1) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_status` int NOT NULL,
  `order_time` datetime(6) DEFAULT NULL,
  `hotel_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`orderid`),
  KEY `FK7v7mxivk2fv6l9rukvy2uy352` (`hotel_id`),
  KEY `FKel9kyl84ego2otj2accfd8mr7` (`user_id`),
  CONSTRAINT `FK7v7mxivk2fv6l9rukvy2uy352` FOREIGN KEY (`hotel_id`) REFERENCES `hotel` (`hotel_id`),
  CONSTRAINT `FKel9kyl84ego2otj2accfd8mr7` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES (1,175,'2024-03-16 23:19:34.278506',_binary '\0','medium spicy',4,'2024-03-12 22:57:18.800729',1,1),(2,350,'2024-03-16 23:21:08.187664',_binary '\0','medium spicy',2,'2024-03-14 12:09:56.264267',1,1),(3,700,'2024-03-14 12:33:01.163301',_binary '\0','medium spicy',1,'2024-03-14 12:33:01.163301',1,1),(4,934,'2024-03-15 10:39:49.545221',_binary '\0','medium spicy',1,'2024-03-15 10:39:49.545221',3,1),(5,50,'2024-03-16 18:00:18.304203',_binary '\0','medium spicy',1,'2024-03-16 18:00:18.305337',3,1),(6,77,'2024-03-16 18:00:44.985399',_binary '\0','medium spicy',1,'2024-03-16 18:00:44.985399',3,1),(7,104,'2024-03-16 18:04:51.246103',_binary '\0','medium spicy',1,'2024-03-16 18:04:51.246103',3,1),(8,154,'2024-03-16 18:12:01.118750',_binary '\0','More crunchy',1,'2024-03-16 18:12:01.118750',3,1);
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `role_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'USER'),(2,'HOTEL'),(3,'ADMIN');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT,
  `cart_total` double NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `user_contact_number` varchar(255) DEFAULT NULL,
  `user_gender` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `role_id` bigint DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`),
  UNIQUE KEY `UK_sb8bbouer5wak8vyiiy4pf2bx` (`username`),
  UNIQUE KEY `UK_dhlcfg8h1drrgu0irs1ro3ohb` (`address_id`),
  KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`),
  CONSTRAINT `FKddefmvbrws3hvl5t0hnnsv8ox` FOREIGN KEY (`address_id`) REFERENCES `address` (`addressid`),
  CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,154,'ankitmahalpure@gmail.com','$2a$10$uvTCDU7re1ygGjQHRXA2eOjA6l9CmeJy3mKtu4G/Vwpxm3iTinTnu','9511972196','male','Ankit2001',14,1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_cart`
--

DROP TABLE IF EXISTS `user_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_cart` (
  `user_id` bigint NOT NULL,
  `quantity` int DEFAULT NULL,
  `menu_item_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`menu_item_id`),
  CONSTRAINT `FKsrduvvrrxxek0h3bcpsb5aij7` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_cart`
--

LOCK TABLES `user_cart` WRITE;
/*!40000 ALTER TABLE `user_cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_cart` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-18  9:33:26
