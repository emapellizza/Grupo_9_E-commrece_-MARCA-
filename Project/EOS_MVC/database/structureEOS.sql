-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 14, 2021 at 01:58 AM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eos_db`
--
CREATE DATABASE IF NOT EXISTS `eos_db` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `eos_db`;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

CREATE TABLE `brands` (
  `id_brand` int(11) NOT NULL,
  `marca` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id_category` int(11) NOT NULL,
  `categoria` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `colors`
--

CREATE TABLE `colors` (
  `id_color` int(11) NOT NULL,
  `color` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `genres`
--

CREATE TABLE `genres` (
  `id_genre` int(11) NOT NULL,
  `genero` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id_order` int(11) NOT NULL,
  `id_user_product` int(11) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL,
  `items` int(11) DEFAULT NULL,
  `total` varchar(45) DEFAULT NULL,
  `shipping_info` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id_product` int(11) NOT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `precio` decimal(6,2) DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_genre` int(11) DEFAULT NULL,
  `short_description` varchar(45) DEFAULT NULL,
  `long_description` varchar(250) DEFAULT NULL,
  `disponible` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product_color`
--

CREATE TABLE `product_color` (
  `id_product_color` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `id_color` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `product_size`
--

CREATE TABLE `product_size` (
  `id_product_size` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `id_size` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `shipping_information`
--

CREATE TABLE `shipping_information` (
  `id_shipping_information` int(11) NOT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `localidad` varchar(45) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `codigo_postal` varchar(45) DEFAULT NULL,
  `numero_telefono` varchar(45) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sizes`
--

CREATE TABLE `sizes` (
  `id_size` int(11) NOT NULL,
  `talle` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `imagen` varchar(45) DEFAULT NULL,
  `nombre` varchar(45) DEFAULT NULL,
  `apellido` varchar(45) DEFAULT NULL,
  `f_nacimiento` date DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `admin` tinyint(4) DEFAULT NULL,
  `activo` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_product`
--

CREATE TABLE `user_product` (
  `id_user_product` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_product` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `precio` decimal(6,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`id_brand`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`id_color`);

--
-- Indexes for table `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id_genre`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_user_product_idx` (`id_user_product`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id_product`),
  ADD KEY `id_marca_idx` (`id_marca`),
  ADD KEY `id_category_idx` (`id_category`),
  ADD KEY `id_genre_idx` (`id_genre`);

--
-- Indexes for table `product_color`
--
ALTER TABLE `product_color`
  ADD PRIMARY KEY (`id_product_color`),
  ADD KEY `id_productColor_idx` (`id_product`),
  ADD KEY `id_colorProduct_idx` (`id_color`);

--
-- Indexes for table `product_size`
--
ALTER TABLE `product_size`
  ADD PRIMARY KEY (`id_product_size`),
  ADD KEY `id_product_idx` (`id_product`),
  ADD KEY `id_sizeProduct_idx` (`id_size`);

--
-- Indexes for table `shipping_information`
--
ALTER TABLE `shipping_information`
  ADD PRIMARY KEY (`id_shipping_information`),
  ADD KEY `id_user_idx` (`id_user`);

--
-- Indexes for table `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`id_size`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- Indexes for table `user_product`
--
ALTER TABLE `user_product`
  ADD PRIMARY KEY (`id_user_product`),
  ADD KEY `id_user_idx` (`id_user`),
  ADD KEY `id_productUser_idx` (`id_product`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `brands`
--
ALTER TABLE `brands`
  MODIFY `id_brand` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `colors`
--
ALTER TABLE `colors`
  MODIFY `id_color` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `genres`
--
ALTER TABLE `genres`
  MODIFY `id_genre` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id_product` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_size`
--
ALTER TABLE `product_size`
  MODIFY `id_product_size` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `shipping_information`
--
ALTER TABLE `shipping_information`
  MODIFY `id_shipping_information` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sizes`
--
ALTER TABLE `sizes`
  MODIFY `id_size` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_product`
--
ALTER TABLE `user_product`
  MODIFY `id_user_product` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `id_user_product` FOREIGN KEY (`id_user_product`) REFERENCES `user_product` (`id_user_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `id_brand` FOREIGN KEY (`id_marca`) REFERENCES `brands` (`id_brand`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_category` FOREIGN KEY (`id_category`) REFERENCES `categories` (`id_category`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_genre` FOREIGN KEY (`id_genre`) REFERENCES `genres` (`id_genre`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product_color`
--
ALTER TABLE `product_color`
  ADD CONSTRAINT `id_color` FOREIGN KEY (`id_color`) REFERENCES `colors` (`id_color`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `product_size`
--
ALTER TABLE `product_size`
  ADD CONSTRAINT `id_productSize` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_sizeProduct` FOREIGN KEY (`id_size`) REFERENCES `sizes` (`id_size`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `shipping_information`
--
ALTER TABLE `shipping_information`
  ADD CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_product`
--
ALTER TABLE `user_product`
  ADD CONSTRAINT `id_productUser` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_userProduct` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
