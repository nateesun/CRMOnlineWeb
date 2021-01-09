CREATE TABLE IF NOT EXISTS `bank` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(5) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `code_no` varchar(100) DEFAULT NULL,
  `postfix` varchar(10) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `branch` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `map_latitude` varchar(100) DEFAULT NULL,
  `map_longitude` varchar(100) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `carts` (
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
);

CREATE TABLE IF NOT EXISTS `carts_detail` (
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
);

CREATE TABLE IF NOT EXISTS `company` (
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
  `cart_size_running` int(10) DEFAULT NULL,
  `member_register_point` int(3) DEFAULT NULL,
  `img_path` varchar(250) DEFAULT NULL
);
INSERT INTO `company`
(uuid_index, code, name, line_official_id, member_running, prefix_running, size_running, order_running, order_prefix, order_size_running, cart_running, cart_prefix, cart_size_running, member_register_point)
VALUES('3eeec383-0034-4213-bc93-e5e2ce608055', 'C001', 'MyCompany Limited 2021', '@mycom2021', 1, 'MB', 5, 1, 'OD', 5, 1, 'SP', 5, 10);

CREATE TABLE IF NOT EXISTS `login` (
  `member_active` char(1) NOT NULL DEFAULT 'Y',
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL
);
INSERT INTO `login`
(member_active, username, password)
VALUES('Y', 'softpos@gmail.com', 'MTExMTEx');

CREATE TABLE IF NOT EXISTS `member` (
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
  `member_role` varchar(10) DEFAULT NULL,
  `data_sync` char(1) DEFAULT 'N' COMMENT 'ดึงข้อมูลไป local'
);
INSERT INTO `member`
(code, company_code, gender, status, email, birthday, expired_date, total_purchase, mobile, point_expired_date, total_score, active, first_name, last_name, system_created, system_updated, line_id, prefix, uuid_index, member_role, data_sync)
VALUES('MB00000', '000', 'M', 'S', 'softpos@gmail.com', '1980-09-08', '2030-09-23', 0.0, '0864108403', '2030-09-23', 100.0, 'Y', 'Admin', 'ผู้ดูแลระบบ', '2020-09-23 21:28:46.0', '2020-10-21 05:42:48.0', 'softpos', 'คุณ', 'ff3a447d-d10f-45a4-978b-bde5fa052123', 'super', 'N');

CREATE TABLE IF NOT EXISTS `member_shipping` (
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
);

CREATE TABLE IF NOT EXISTS `orders` (
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
  `order_create_date` datetime DEFAULT NULL,
  `order_status` varchar(50) DEFAULT NULL,
  `signature` longtext,
  `member_mobile` varchar(10) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `orders_detail` (
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
);

CREATE TABLE IF NOT EXISTS `product` (
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
  `unit_code_stock` varchar(10) DEFAULT NULL,
  `qty_over_stock` varchar(1) DEFAULT 'N'
);

CREATE TABLE IF NOT EXISTS `promotion` (
  `uuid_index` varchar(36) NOT NULL,
  `product_code` varchar(100) DEFAULT NULL,
  `redeem_name` varchar(100) DEFAULT NULL,
  `point_to_redeem` int(10) DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `finish_time` datetime DEFAULT NULL,
  `qty_in_stock` int(10) DEFAULT NULL,
  `img_path` varchar(200) DEFAULT NULL,
  `redeem_or_free` char(1) DEFAULT NULL,
  `discount_amt` float(10,2) DEFAULT NULL,
  `discount_percent` float(5,2) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `redeem` (
  `uuid_index` varchar(36) NOT NULL,
  `redeem_code` varchar(30) DEFAULT NULL COMMENT 'รหัส qr code',
  `product_code` varchar(20) DEFAULT NULL COMMENT 'รหัสสินค้า',
  `point_to_redeem` int(10) DEFAULT NULL COMMENT 'แต้มที่ลด',
  `use_in_branch` varchar(30) DEFAULT NULL COMMENT 'สาขาที่ไปใช้',
  `emp_code_redeem` varchar(30) DEFAULT NULL COMMENT 'รหัสพนักงาน',
  `member_code_use` varchar(30) DEFAULT NULL COMMENT 'รหัสสมาชิก',
  `qty_in_use` int(3) DEFAULT NULL COMMENT 'จำนวนที่ใช้',
  `system_create` datetime DEFAULT NULL COMMENT 'วันที่สร้าง',
  `redeem_date` datetime DEFAULT NULL COMMENT 'วันที่นำไปใช้',
  `in_time` datetime DEFAULT NULL COMMENT 'ใช้ภายในระยะเวลา',
  `status_use` varchar(20) DEFAULT NULL COMMENT 'คำอธิบาย สถานะ',
  `active` varchar(1) DEFAULT NULL COMMENT 'flag  active',
  `redeem_name` varchar(250) DEFAULT NULL COMMENT 'ชื่อการใช้งาน',
  `bill_no` varchar(100) DEFAULT NULL COMMENT 'เลขที่เอกสาร',
  `discount_amt` float(10,2) DEFAULT NULL COMMENT 'จำนวนเงินที่ลด',
  `discount_percent` float(5,2) DEFAULT NULL COMMENT 'จำนวนเงินที่ลด เปอร์เซ็นต์',
  `redeem_or_free` char(1) DEFAULT NULL COMMENT 'ประเภท ลด(R) หรือแถม(F)',
  `data_sync` char(1) DEFAULT 'N' COMMENT 'ดึงข้อมูลไป local'
);

CREATE TABLE IF NOT EXISTS `roles` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `desc` varchar(100) DEFAULT NULL
);
INSERT INTO `roles`
(uuid_index, code, name, `desc`)
VALUES('37175ceb-220b-4dc1-9284-d220a792f395', 'admin', 'Admin', 'Administrator');
INSERT INTO `roles`
(uuid_index, code, name, `desc`)
VALUES('d628fcbd-717a-4a0d-a842-537fe5b334a6', 'member', 'Member', 'Member register to branch');
INSERT INTO `roles`
(uuid_index, code, name, `desc`)
VALUES('80bb217f-dd9e-4773-8023-eb13022507ae', 'employee', 'Employee', 'Employee to manage branch');
INSERT INTO `roles`
(uuid_index, code, name, `desc`)
VALUES('c8b12dc4-28ad-4cfb-81eb-6317a140c949', 'super', 'Super Admin', 'Super Adminitrator');

CREATE TABLE IF NOT EXISTS `stock` (
  `uuid_index` varchar(36) NOT NULL,
  `code` varchar(5) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `stock_product` (
  `uuid_index` varchar(36) NOT NULL,
  `stock_code` varchar(5) DEFAULT NULL,
  `product_code` varchar(20) DEFAULT NULL,
  `in_stock` int(5) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `sytem_config` (
  `index_uuid` varchar(36) NOT NULL
);

CREATE TABLE IF NOT EXISTS `table_crud` (
  `uuid_index` varchar(36) NOT NULL,
  `col1` varchar(100) DEFAULT NULL,
  `col2` varchar(100) DEFAULT NULL,
  `col3` varchar(100) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS `ui_menu` (
  `id` varchar(50) NOT NULL,
  `role` varchar(100) NOT NULL DEFAULT '',
  `priority` int(2) DEFAULT NULL
);
INSERT INTO ui_menu(id, `role`, priority) VALUES('Account', 'super|admin|member|employee', 1);
INSERT INTO ui_menu(id, `role`, priority) VALUES('Orders', 'super|admin|member', 2);
INSERT INTO ui_menu(id, `role`, priority) VALUES('Request Order', 'super|admin|employee', 3);
INSERT INTO ui_menu(id, `role`, priority) VALUES('Members', 'super|admin', 4);
INSERT INTO ui_menu(id, `role`, priority) VALUES('Settings', 'super', 5);
INSERT INTO ui_menu(id, `role`, priority) VALUES('Master', 'super|admin', 6);

CREATE TABLE IF NOT EXISTS `ui_menu_list` (
  `id` varchar(30) DEFAULT NULL,
  `menu_id` varchar(30) DEFAULT NULL,
  `icon` varchar(50) DEFAULT NULL,
  `to_path` varchar(100) DEFAULT NULL,
  `active` char(1) NOT NULL DEFAULT 'N'
);
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Overview', 'Account', 'CardGiftcardIcon', '/dashboard', 'Y');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Profile', 'Account', 'RecentActorsIcon', '/profile', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Shopping', 'Orders', 'LocalMallIcon', '/shopping', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Track Order', 'Orders', 'LocalMallIcon', '/tracking', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Check cart list', 'Request Order', 'LocalMallIcon', '/check_carts', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Member List', 'Members', 'PeopleIcon', '/members', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Use Promotion', 'Members', 'PeopleIcon', '/use_promotion', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Roles', 'Settings', 'LockIcon', '/ms/role', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Database', 'Settings', 'DnsRoundedIcon', '/database_config', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Company', 'Master', 'DnsRoundedIcon', '/ms/company', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Branch', 'Master', 'DnsRoundedIcon', '/ms/branch', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Product', 'Master', 'DnsRoundedIcon', '/ms/product', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Stock', 'Master', 'DnsRoundedIcon', '/ms/stock', 'N');
INSERT INTO ui_menu_list
(id, menu_id, icon, to_path, active)
VALUES('Promotion', 'Master', 'DnsRoundedIcon', '/ms/promotion', 'N');

ALTER TABLE `member` ADD line_user_id varchar(100) NULL;

CREATE TABLE `monitor_app` (
  `branch_code` varchar(100) NOT NULL,
  `branch_name` varchar(100) NOT NULL,
  `system_create` datetime DEFAULT NULL,
  `system_update` datetime DEFAULT NULL,
  `staus_open` char(1) DEFAULT NULL
);

ALTER TABLE `member` ADD UNIQUE (email);
ALTER TABLE `member` ADD UNIQUE (mobile);
ALTER TABLE `member` ADD UNIQUE (line_id);
