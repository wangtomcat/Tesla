-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2019-09-17 04:16:19
-- 服务器版本： 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `tesla`
--

-- --------------------------------------------------------

--
-- 表的结构 `admuser`
--

CREATE TABLE IF NOT EXISTS `admuser` (
  `username` varchar(10) CHARACTER SET utf8 NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `admuser`
--

INSERT INTO `admuser` (`username`, `password`) VALUES
('admin', 'admin'),
('赵文蕾', 'zwl123'),
('廖翔', 'lx'),
('黎海明', 'lhm');

-- --------------------------------------------------------

--
-- 表的结构 `buycar`
--

CREATE TABLE IF NOT EXISTS `buycar` (
  `name` varchar(10) CHARACTER SET utf8 NOT NULL,
  `sex` varchar(1) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 NOT NULL,
  `car` varchar(10) CHARACTER SET utf8 NOT NULL,
  `price` int(10) NOT NULL,
  `address` varchar(10) CHARACTER SET utf8 NOT NULL,
  `stuta` varchar(5) CHARACTER SET utf8 NOT NULL DEFAULT '未处理'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `buycar`
--

INSERT INTO `buycar` (`name`, `sex`, `phone`, `car`, `price`, `address`, `stuta`) VALUES
('李四', '男', '13462345987', 'SUV', 500000, '深圳', '已处理'),
('张三', '男', '13343574434', '轿车', 300000, '北京', '已处理');

-- --------------------------------------------------------

--
-- 表的结构 `orduser`
--

CREATE TABLE IF NOT EXISTS `orduser` (
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `orduser`
--

INSERT INTO `orduser` (`username`, `password`, `phone`) VALUES
('cat', 'c123456', '13465289013'),
('黎海明', '12345678', '13456788765'),
('王志源', 'wzy1234567', '13456789876'),
('廖翔', 'lx123456', '13423455432');

-- --------------------------------------------------------

--
-- 表的结构 `proposal`
--

CREATE TABLE IF NOT EXISTS `proposal` (
  `username` varchar(20) CHARACTER SET utf8 NOT NULL,
  `date` varchar(12) CHARACTER SET utf8 NOT NULL,
  `say` varchar(800) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `proposal`
--

INSERT INTO `proposal` (`username`, `date`, `say`) VALUES
('黎海明', '2019-10-01', '超跑太炫酷了'),
('赵文蕾', '2019-09-21', '这车就那样吧');

-- --------------------------------------------------------

--
-- 表的结构 `resinfo`
--

CREATE TABLE IF NOT EXISTS `resinfo` (
  `name` varchar(10) CHARACTER SET utf8 NOT NULL,
  `sex` varchar(1) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(11) CHARACTER SET utf8 NOT NULL,
  `address` varchar(50) CHARACTER SET utf8 NOT NULL,
  `stuta` varchar(5) CHARACTER SET utf8 NOT NULL DEFAULT '未处理'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `resinfo`
--

INSERT INTO `resinfo` (`name`, `sex`, `phone`, `address`, `stuta`) VALUES
('张三', '男', '13465289013', '深圳', '已处理'),
('大白', '男', '13462345987', '广州', '已处理');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
