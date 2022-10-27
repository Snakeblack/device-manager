DROP DATABASE IF EXISTS dispositivos;

CREATE DATABASE dispositivos;

USE dispositivos;

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL UNIQUE,
  `contraseña` varchar(50) NOT NULL,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `centro` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `red` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `centro_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria_id` (`categoria_id`),
  KEY `centro_id` (`centro_id`),
  CONSTRAINT `red_ibfk_1` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`),
  CONSTRAINT `red_ibfk_2` FOREIGN KEY (`centro_id`) REFERENCES `centro` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `ubicacion` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `is_aula` BOOLEAN NOT NULL,
  `centro_id` int(11) NOT NULL,
  `red_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `centro_id` (`centro_id`),
  KEY `red_id` (`red_id`),
  CONSTRAINT `ubicacion_ibfk_1` FOREIGN KEY (`centro_id`) REFERENCES `centro` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


CREATE TABLE `tipodispositivo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `dispositivo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `marca` varchar(50) NULL,
  `modelo` varchar(50) NULL,
  `serial_number` varchar(50) NULL,
  `sistema_operativo` varchar(50) NULL,
  `cpu` varchar(50) NULL,
  `ram` SMALLINT(2) NULL,
  `disco_duro` INT(5) NULL,
  `congelado` BOOLEAN NULL,
  `detalles` varchar(300) NULL,
  `ubicacion_id` int(11) NOT NULL,
  `tipodispositivo_id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ubicacion_id` (`ubicacion_id`),
  KEY `tipodispositivo_id` (`tipodispositivo_id`),
  KEY `categoria_id` (`categoria_id`),
  CONSTRAINT `dispositivo_ibfk_1` FOREIGN KEY (`ubicacion_id`) REFERENCES `ubicacion` (`id`),
  CONSTRAINT `dispositivo_ibfk_2` FOREIGN KEY (`tipodispositivo_id`) REFERENCES `tipodispositivo` (`id`),
  CONSTRAINT `dispositivo_ibfk_3` FOREIGN KEY (`categoria_id`) REFERENCES `categoria` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

CREATE TABLE `incidencias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(300) NOT NULL,
  `fecha` DATE NOT NULL,
  `dispositivo_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `dispositivo_id` (`dispositivo_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `incidencias_ibfk_1` FOREIGN KEY (`dispositivo_id`) REFERENCES `dispositivo` (`id`),
  CONSTRAINT `incidencias_ibfk_2` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

