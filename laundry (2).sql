-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 01 Mar 2020 pada 18.17
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laundry`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `data_laundry`
--

CREATE TABLE `data_laundry` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `phone` int(20) NOT NULL,
  `image` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `rating` int(11) DEFAULT NULL,
  `status` varchar(10) NOT NULL,
  `minimum` int(11) NOT NULL,
  `open` time NOT NULL,
  `close` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `data_laundry`
--

INSERT INTO `data_laundry` (`id`, `name`, `address`, `user_id`, `description`, `phone`, `image`, `created_at`, `rating`, `status`, `minimum`, `open`, `close`) VALUES
(61, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-20-44.521Z-edensor.jpeg', '2020-03-01 14:20:44', 0, 'Online', 1, '00:00:00', '00:00:00'),
(62, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-11.574Z-edensor.jpeg', '2020-03-01 14:21:11', 0, 'Online', 1, '00:00:00', '00:00:00'),
(63, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-12.831Z-edensor.jpeg', '2020-03-01 14:21:12', 0, 'Online', 1, '00:00:00', '00:00:00'),
(64, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-13.653Z-edensor.jpeg', '2020-03-01 14:21:13', 0, 'Online', 1, '00:00:00', '00:00:00'),
(65, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-14.707Z-edensor.jpeg', '2020-03-01 14:21:14', 0, 'Online', 1, '00:00:00', '00:00:00'),
(66, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-15.536Z-edensor.jpeg', '2020-03-01 14:21:15', 0, 'Online', 1, '00:00:00', '00:00:00'),
(67, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-16.389Z-edensor.jpeg', '2020-03-01 14:21:16', 0, 'Online', 1, '00:00:00', '00:00:00'),
(68, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-17.345Z-edensor.jpeg', '2020-03-01 14:21:17', 0, 'Online', 1, '00:00:00', '00:00:00'),
(69, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-18.298Z-edensor.jpeg', '2020-03-01 14:21:18', 0, 'Online', 1, '00:00:00', '00:00:00'),
(70, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-19.147Z-edensor.jpeg', '2020-03-01 14:21:19', 0, 'Online', 1, '00:00:00', '00:00:00'),
(71, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-19.971Z-edensor.jpeg', '2020-03-01 14:21:19', 0, 'Offline', 1, '00:00:00', '00:00:00'),
(72, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-20.900Z-edensor.jpeg', '2020-03-01 14:21:20', 0, 'Online', 1, '00:00:00', '00:00:00'),
(73, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-21.648Z-edensor.jpeg', '2020-03-01 14:21:21', 0, 'Online', 1, '00:00:00', '00:00:00'),
(74, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-22.469Z-edensor.jpeg', '2020-03-01 14:21:22', 0, 'Online', 1, '00:00:00', '00:00:00'),
(75, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-23.145Z-edensor.jpeg', '2020-03-01 14:21:23', 0, 'Online', 1, '00:00:00', '00:00:00'),
(76, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-23.837Z-edensor.jpeg', '2020-03-01 14:21:23', 0, 'Online', 1, '00:00:00', '00:00:00'),
(77, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-24.455Z-edensor.jpeg', '2020-03-01 14:21:24', 0, 'Online', 1, '00:00:00', '00:00:00'),
(78, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-25.238Z-edensor.jpeg', '2020-03-01 14:21:25', 0, 'Online', 1, '00:00:00', '00:00:00'),
(79, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-26.008Z-edensor.jpeg', '2020-03-01 14:21:26', 0, 'Online', 1, '00:00:00', '00:00:00'),
(80, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-26.772Z-edensor.jpeg', '2020-03-01 14:21:26', 0, 'Online', 1, '00:00:00', '00:00:00'),
(81, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-27.568Z-edensor.jpeg', '2020-03-01 14:21:27', 0, 'Online', 1, '00:00:00', '00:00:00'),
(82, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-28.999Z-edensor.jpeg', '2020-03-01 14:21:29', 0, 'Online', 1, '00:00:00', '00:00:00'),
(83, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-29.826Z-edensor.jpeg', '2020-03-01 14:21:29', 0, 'Online', 1, '00:00:00', '00:00:00'),
(84, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-30.522Z-edensor.jpeg', '2020-03-01 14:21:30', 0, 'Online', 1, '00:00:00', '00:00:00'),
(85, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-31.312Z-edensor.jpeg', '2020-03-01 14:21:31', 0, 'Online', 1, '00:00:00', '00:00:00'),
(86, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-32.099Z-edensor.jpeg', '2020-03-01 14:21:32', 0, 'Online', 1, '00:00:00', '00:00:00'),
(87, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-32.904Z-edensor.jpeg', '2020-03-01 14:21:32', 0, 'Online', 1, '00:00:00', '00:00:00'),
(88, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-33.676Z-edensor.jpeg', '2020-03-01 14:21:33', 0, 'Online', 1, '00:00:00', '00:00:00'),
(89, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-34.440Z-edensor.jpeg', '2020-03-01 14:21:34', 0, 'Online', 1, '00:00:00', '00:00:00'),
(90, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-35.094Z-edensor.jpeg', '2020-03-01 14:21:35', 0, 'Online', 1, '00:00:00', '00:00:00'),
(91, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-35.860Z-edensor.jpeg', '2020-03-01 14:21:35', 0, 'Online', 1, '00:00:00', '00:00:00'),
(92, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-36.665Z-edensor.jpeg', '2020-03-01 14:21:36', 0, 'Online', 1, '00:00:00', '00:00:00'),
(93, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-37.485Z-edensor.jpeg', '2020-03-01 14:21:37', 0, 'Online', 1, '00:00:00', '00:00:00'),
(94, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-38.277Z-edensor.jpeg', '2020-03-01 14:21:38', 0, 'Online', 1, '00:00:00', '00:00:00'),
(95, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-21-39.106Z-edensor.jpeg', '2020-03-01 14:21:39', 0, 'Online', 1, '00:00:00', '00:00:00'),
(96, 'laundryku', 'jl depok', 1, 'bersih suci', 20005000, 'http://192.168.1.242:4006/uploads/laundry/2020-03-01T14-44-09.639Z-edensor.jpeg', '2020-03-01 14:44:09', 0, 'Online', 1, '00:00:07', '00:00:17');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_orders`
--

CREATE TABLE `detail_orders` (
  `id` int(11) NOT NULL,
  `id_orders` int(11) NOT NULL,
  `id_features` int(11) NOT NULL,
  `description` varchar(100) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `features_laundry`
--

CREATE TABLE `features_laundry` (
  `id` int(11) NOT NULL,
  `id_laundry` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` int(20) NOT NULL,
  `category` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `features_laundry`
--

INSERT INTO `features_laundry` (`id`, `id_laundry`, `name`, `description`, `price`, `category`) VALUES
(3, 61, 'banana', 'diganti', 200, 1),
(4, 61, 'Express', 'diganti', 200, 1),
(5, 61, 'Antar Jemput', 'diganti', 200, 2),
(6, 61, 'Kiloan', 'diganti', 200, 3);

-- --------------------------------------------------------

--
-- Struktur dari tabel `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `laundry_id` int(11) NOT NULL,
  `date` datetime NOT NULL,
  `price` int(20) NOT NULL,
  `status` int(11) NOT NULL,
  `date_done` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `username` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phone` int(20) NOT NULL,
  `role` int(11) NOT NULL,
  `image` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `data_laundry`
--
ALTER TABLE `data_laundry`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detail_orders`
--
ALTER TABLE `detail_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `features_laundry`
--
ALTER TABLE `features_laundry`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `data_laundry`
--
ALTER TABLE `data_laundry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=97;

--
-- AUTO_INCREMENT untuk tabel `detail_orders`
--
ALTER TABLE `detail_orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `features_laundry`
--
ALTER TABLE `features_laundry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT untuk tabel `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
