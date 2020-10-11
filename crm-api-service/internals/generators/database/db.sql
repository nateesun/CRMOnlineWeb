CREATE TABLE `bank` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(5) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `code_no` varchar(100) DEFAULT NULL,
  `postfix` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `branch` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `map_latitude` varchar(100) DEFAULT NULL,
  `map_longitude` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `carts` (
  `uuid_index` varchar(36) NOT NULL,
  `cart_no` varchar(100) DEFAULT NULL,
  `cart_create_date` datetime DEFAULT NULL,
  `member_code` varchar(20) DEFAULT NULL,
  `total_item` int(5) DEFAULT NULL,
  `total_amount` float(10,2) DEFAULT NULL,
  `cart_active` char(1) DEFAULT NULL,
  `shopping_step` varchar(20) DEFAULT NULL,
  `total_point` int(5) DEFAULT NULL,
  `emp_code_update` varchar(30) DEFAULT NULL,
  `emp_reason` varchar(100) DEFAULT NULL,
  `account_from_name` varchar(150) DEFAULT NULL,
  `account_to_name` varchar(150) DEFAULT NULL,
  `from_account_no` varchar(30) DEFAULT NULL,
  `to_account_no` varchar(30) DEFAULT NULL,
  `transfer_date` varchar(20) DEFAULT NULL,
  `transfer_ref` varchar(10) DEFAULT NULL,
  `transfer_amount` float(10,2) DEFAULT NULL,
  `slip_path` varchar(100) DEFAULT NULL,
  `emp_update_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `carts_detail` (
  `uuid_index` varchar(36) NOT NULL,
  `cart_no` varchar(100) DEFAULT NULL,
  `product_code` varchar(20) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_unit` varchar(100) DEFAULT NULL,
  `qty` int(3) DEFAULT NULL,
  `total_amount` float(10,2) DEFAULT NULL,
  `options` varchar(100) DEFAULT NULL,
  `special_text` varchar(100) DEFAULT NULL,
  `point` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `company` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `line_official_id` varchar(100) DEFAULT NULL,
  `member_running` int(5) DEFAULT NULL,
  `prefix_running` varchar(3) DEFAULT NULL,
  `size_running` int(10) DEFAULT NULL,
  `order_running` int(5) DEFAULT NULL,
  `order_prefix` varchar(3) DEFAULT NULL,
  `order_size_running` int(10) DEFAULT NULL,
  `cart_running` int(5) DEFAULT NULL,
  `cart_prefix` varchar(3) DEFAULT NULL,
  `cart_size_running` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `login` (
  `member_active` char(1) NOT NULL DEFAULT 'Y',
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `member` (
  `code` varchar(36) NOT NULL DEFAULT '',
  `company_code` varchar(10) NOT NULL DEFAULT '000',
  `gender` varchar(20) NOT NULL DEFAULT 'M',
  `status` varchar(20) NOT NULL DEFAULT 'S',
  `email` varchar(50) DEFAULT NULL,
  `birthday` date NOT NULL,
  `expired_date` date NOT NULL,
  `total_purchase` float(10,2) NOT NULL DEFAULT '0.00',
  `mobile` varchar(20) DEFAULT NULL,
  `point_expired_date` date NOT NULL,
  `total_score` float(14,0) NOT NULL DEFAULT '0',
  `active` char(1) NOT NULL DEFAULT 'Y',
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(150) DEFAULT NULL,
  `system_created` datetime DEFAULT NULL,
  `system_updated` datetime DEFAULT NULL,
  `line_id` varchar(50) DEFAULT NULL,
  `prefix` varchar(100) DEFAULT NULL,
  `uuid_index` varchar(100) NOT NULL,
  `member_role` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `member_shipping` (
  `uuid_index` varchar(36) NOT NULL DEFAULT '',
  `map_latitude` varchar(50) DEFAULT NULL,
  `map_longitude` varchar(50) DEFAULT NULL,
  `member_code` varchar(20) DEFAULT NULL,
  `address_type` varchar(50) DEFAULT NULL,
  `member_name` varchar(100) DEFAULT NULL,
  `address1` varchar(200) DEFAULT NULL,
  `address2` varchar(200) DEFAULT NULL,
  `sub_district` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `province` varchar(100) DEFAULT NULL,
  `postcode` varchar(100) DEFAULT NULL,
  `member_lastname` varchar(100) DEFAULT NULL,
  `member_prefix` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `orders` (
  `uuid_index` varchar(36) NOT NULL,
  `order_no` varchar(100) DEFAULT NULL,
  `cart_no` varchar(100) DEFAULT NULL,
  `cart_create_date` datetime DEFAULT NULL,
  `member_code` varchar(20) DEFAULT NULL,
  `total_item` int(5) DEFAULT NULL,
  `total_amount` float(10,2) DEFAULT NULL,
  `cart_active` char(1) DEFAULT NULL,
  `shopping_step` varchar(20) DEFAULT NULL,
  `total_point` int(5) DEFAULT NULL,
  `emp_code_update` varchar(30) DEFAULT NULL,
  `emp_reason` varchar(100) DEFAULT NULL,
  `account_from_name` varchar(150) DEFAULT NULL,
  `account_to_name` varchar(150) DEFAULT NULL,
  `from_account_no` varchar(30) DEFAULT NULL,
  `to_account_no` varchar(30) DEFAULT NULL,
  `transfer_date` varchar(20) DEFAULT NULL,
  `transfer_ref` varchar(10) DEFAULT NULL,
  `transfer_amount` float(10,2) DEFAULT NULL,
  `slip_path` varchar(100) DEFAULT NULL,
  `emp_update_date` datetime DEFAULT NULL,
  `member_code_update` varchar(30) DEFAULT NULL,
  `member_remark` varchar(100) DEFAULT NULL,
  `order_update_date` datetime DEFAULT NULL,
  `order_create_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `orders_detail` (
  `uuid_index` varchar(36) NOT NULL,
  `order_no` varchar(100) DEFAULT NULL,
  `product_code` varchar(20) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `product_price` float DEFAULT NULL,
  `product_unit` varchar(100) DEFAULT NULL,
  `qty` int(3) DEFAULT NULL,
  `total_amount` float(10,2) DEFAULT NULL,
  `options` varchar(100) DEFAULT NULL,
  `special_text` varchar(100) DEFAULT NULL,
  `point` int(5) DEFAULT NULL,
  `cart_no` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `product` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `unit_code_sale` varchar(10) DEFAULT NULL,
  `product_group_code` varchar(10) DEFAULT NULL,
  `img_path` varchar(250) DEFAULT NULL,
  `point` int(5) DEFAULT NULL,
  `stock_code` varchar(10) DEFAULT NULL,
  `price_e` float(10,2) DEFAULT NULL,
  `price_t` float(10,2) DEFAULT NULL,
  `price_d` float(10,2) DEFAULT NULL,
  `max_stock` int(5) DEFAULT NULL,
  `min_stock` int(5) DEFAULT NULL,
  `unit_code_stock` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `promotion` (
  `uuid_index` varchar(36) NOT NULL,
  `product_code` varchar(100) DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `point_to_redeem` int(10) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `finish_time` datetime DEFAULT NULL,
  `qty_in_stock` int(10) DEFAULT NULL,
  `img_path` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `redeem` (
  `uuid_index` varchar(36) NOT NULL,
  `redeem_code` varchar(30) DEFAULT NULL,
  `product_code` varchar(20) DEFAULT NULL,
  `point_to_redeem` int(10) DEFAULT NULL,
  `use_in_branch` varchar(30) DEFAULT NULL,
  `emp_code_redeem` varchar(30) DEFAULT NULL,
  `member_code_use` varchar(30) DEFAULT NULL,
  `qty_in_use` int(3) DEFAULT NULL,
  `stystem_create` datetime DEFAULT NULL,
  `redeem_date` datetime DEFAULT NULL,
  `in_time` datetime DEFAULT NULL,
  `status_use` varchar(20) DEFAULT NULL,
  `active` varchar(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `roles` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `stock` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(5) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `stock_product` (
  `uuid_index` varchar(36) NOT NULL,
  `stock_code` varchar(5) DEFAULT NULL,
  `product_code` varchar(20) DEFAULT NULL,
  `in_stock` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `sytem_config` (
  `index_uuid` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `table_crud` (
  `uuid_index` varchar(36) NOT NULL,
  `col1` varchar(100) DEFAULT NULL,
  `col2` varchar(100) DEFAULT NULL,
  `col3` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
