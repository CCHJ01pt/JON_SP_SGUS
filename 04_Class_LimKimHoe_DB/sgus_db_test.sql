-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 28, 2021 at 10:38 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sgus_db_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `cls_asm`
--

CREATE TABLE `cls_asm` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cls_asm`
--

INSERT INTO `cls_asm` (`id`, `name`, `country`) VALUES
(1, 'Julius', 'France'),
(2, 'Tiffi', 'Guatemala'),
(3, 'Mora', 'Mongolia'),
(4, 'Ibrahim', 'Portugal'),
(5, 'Pandora', 'Russia'),
(6, 'Kirstin', 'Brazil'),
(7, 'Guenna', 'Portugal'),
(8, 'Nana', 'Brazil'),
(9, 'Justen', 'Serbia'),
(10, 'Valera', 'Indonesia');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cls_asm`
--
ALTER TABLE `cls_asm`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cls_asm`
--
ALTER TABLE `cls_asm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;