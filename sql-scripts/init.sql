USE master;
GO
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'nopCommerce')
BEGIN
    CREATE DATABASE [nopCommerce];
END
GO