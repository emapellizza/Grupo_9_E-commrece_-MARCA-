-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: eos_db
-- ------------------------------------------------------
-- Server version	5.7.24

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
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id_brand` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  PRIMARY KEY (`id_brand`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Vans'),(2,'Under Armour'),(3,'Nike'),(4,'Adidas'),(5,'Puma'),(6,'New Balance');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `color` int(11) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_cart`),
  KEY `id_user_idx` (`id_user`),
  KEY `id_productUser_idx` (`id_product`),
  CONSTRAINT `id_products` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_users` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Indumentaria'),(2,'Calzados'),(3,'Accesorios');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id_color` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_color`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Negro'),(2,'Blanco'),(3,'Azul'),(4,'Rojo'),(5,'Amarillo'),(6,'Verde'),(7,'Gris'),(8,'Dorado'),(9,'Celeste'),(10,'Rosa'),(11,'Plateado');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id_genre` int(11) NOT NULL AUTO_INCREMENT,
  `genre` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_genre`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'Femenino'),(2,'Masculino'),(3,'Unisex');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL AUTO_INCREMENT,
  `id_cart` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `items` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `shipping_info` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  KEY `id_carts_idx` (`id_cart`),
  CONSTRAINT `id_carts` FOREIGN KEY (`id_cart`) REFERENCES `cart` (`id_cart`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(45) DEFAULT NULL,
  `id_brand` int(11) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_genre` int(11) DEFAULT NULL,
  `short_description` varchar(45) DEFAULT NULL,
  `long_description` varchar(9999) DEFAULT NULL,
  `available` varchar(3) DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  KEY `id_category_idx` (`id_category`),
  KEY `id_genre_idx` (`id_genre`),
  KEY `id_brand_idx` (`id_brand`),
  CONSTRAINT `id_brand` FOREIGN KEY (`id_brand`) REFERENCES `brands` (`id_brand`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_genre` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id_genre`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,'product-1620168174381.jpg',1,'Old Skool',10999,2,3,'Zapatillas Vans Old Skool','Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Son zapatillas de corte bajo confeccionadas con capellada de canvas y cuero suede resistente, tiene punteras reforzadas para añadir durabilidad, la suela de caucho original Vans Wafflesole y cuello acolchado para ofrecer sujeción y confort.','Yes'),(3,'product-1620169046677.JPG',3,'Sportwear',5999,1,1,'Pantalon Nike W NSW FEM','Estilo de sujeción con los pantalones de tiro alto Nike Sportswear. Los coloridos paneles laterales están inspirados en el tapicería mexicana para crear el aspecto de un diseño floral en punto de cruz. Suave y de sujeción. La tela de punto doble brinda una sensación de textura suave','Yes'),(4,'product-1620169264827.JPG',5,'Ess Heather',7999,1,2,'Remera Puma Essencial Heather','La remera Puma Ess Heather posee un diseño elegante y de tendencia urbana inspirada en el deporte. Regular fit, presenta un ajuste perfecto que te ofrece libertad de movimientos.','Yes'),(5,'product-1620169332032.jpg',4,'Superstars',12999,2,3,'Zapatillas Adidas Original Superstar','La leyenda de las zapatillas ADIDAS Superstar ha perdurado por más de cinco décadas, inspirando nuevas maneras de expresión personal en el camino.','Yes'),(6,'product-1620169643947.JPG',2,'Tech 2.0',3799,1,2,'Remera Under Armour Tech 2.0','La remera Under Armour Tech 2.0 SS posee tecnología UA Tech para un secado más rápido, siendo ultra suave y con una sensación más natural para prevenir el crecimiento de microbios que causan el mal olor. Posee un ajuste aerodinámico que acompaña tus movimientos sin distracciones. Una excusa menos para dar el máximo.','Yes'),(7,'product-1620169698811.jpg',2,'Charged Pursuit 2',17999,2,3,'Zapatillas Under Armour Charged Pursuit 2','Para tus días de running son perfectas las Zapatillas Under Armour Charged Pursuit 2 por su diseño te harán rendir mejor en entrenamiento y carrera, mientras amortigua tus pisadas gracias a su media suela en espuma que te da estabilidad y firmeza a la hora de correr.','Yes'),(8,'product-1620169750268.jpeg',6,'574',13499,2,1,'Zapatillas New Balance 574 Mujer Serpent Luxe','Las zapatillas New Balance 574 son famosas por su estilo clásico, materiales duraderos y ligeros, y por su comodidad. Las zapatillas New Balance 574 Serpent Luxe de mujer mantiene todas las características de las originales y añade una llamativa capellada en mesh y gamuza sintética en colores contrastantes con detalles de serpiente.','Yes'),(9,'product-1620169845959.JPG',3,'Heritage',3399,1,2,'Remera Nike Heritage Hombre','La remera Nike Heritage tiene una huella mas elegante, hecha para que tu estilo sea aun mas notable. Confeccionada con algodón 100% brindando al cuerpo una mayor sensacion de comodidad y suavidad.','Yes'),(10,'product-1620169899366.jpg',3,'AIR FORCE 1 REACT',19999,2,2,'Zapatillas Nike AIR FORCE 1 REACT','Entra en un nuevo mundo AF1 con el Nike Air Force 1 React, una cuota de rubor en el diseño de contracultura, con un icónico estilo del básquetbol de Nike.','Yes'),(11,'product-1620169960844.JPG',2,'Huddle Snapback',1999,3,3,'Gorra Under Armour Huddle Snapback','Posee un ajuste reforzado, que mantiene la forma con una visera ligeramente más alta y plana para un diseño moderno. Ajuste regulable.','Yes'),(17,'product-1620598159751.jpg',1,'Classic',2099,1,1,'Remera Classic ','Remera básica de mujer ','Yes');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shipping_information`
--

DROP TABLE IF EXISTS `shipping_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shipping_information` (
  `id_shipping_information` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(45) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `postal_code` varchar(45) DEFAULT NULL,
  `phone_number` varchar(45) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_shipping_information`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shipping_information`
--

LOCK TABLES `shipping_information` WRITE;
/*!40000 ALTER TABLE `shipping_information` DISABLE KEYS */;
/*!40000 ALTER TABLE `shipping_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id_size` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_size`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'XS'),(2,'S'),(3,'M'),(4,'L'),(5,'XL'),(6,'Talle Unico'),(7,'36'),(8,'37'),(9,'38'),(10,'39'),(11,'40'),(12,'41'),(13,'42'),(14,'43'),(15,'44'),(16,'45'),(17,'46'),(18,'47'),(19,'48');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id_stock` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `id_color` int(11) DEFAULT NULL,
  `id_size` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_stock`),
  KEY `id_product_idx` (`id_product`),
  KEY `id_colors_idx` (`id_color`),
  KEY `id_sizes_idx` (`id_size`),
  CONSTRAINT `id_color` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id_color`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_size` FOREIGN KEY (`id_size`) REFERENCES `sizes` (`id_size`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,2,1,7,8),(2,2,1,8,5),(3,2,1,9,2),(4,2,1,10,4),(5,3,2,1,3),(6,3,2,2,3),(7,3,2,5,1),(8,4,1,2,1),(9,4,1,3,1),(10,4,1,4,3),(11,5,2,12,3),(12,5,2,13,3),(13,5,2,14,2),(14,6,1,1,2),(15,6,1,2,2),(16,6,1,3,2),(17,7,1,12,2),(18,7,1,13,2),(19,7,1,14,2),(20,7,2,14,2),(21,7,2,11,2),(22,7,2,10,2),(23,2,2,7,2),(24,2,2,9,3),(25,8,7,7,3),(26,8,7,8,1),(27,8,1,8,1),(28,8,1,7,1),(29,9,2,3,1),(30,9,2,4,4),(31,9,2,5,2),(32,9,4,5,2),(33,10,2,10,2),(34,10,2,11,2),(35,10,10,12,2),(36,10,10,13,2),(37,10,10,15,2),(38,11,1,6,15),(39,17,1,1,1),(40,17,1,3,4);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(45) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `Last_name` varchar(45) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `phone` int(10) DEFAULT NULL,
  `active` tinyint(4) DEFAULT '1',
  `admin` tinyint(4) DEFAULT '0',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'ADMIN',NULL,NULL,'admin@admin.com','admin123',NULL,1,1),(12,NULL,'Mariano','Suarez','1983-03-27','mariano@suarez.com','111111',NULL,1,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-09 20:55:28
